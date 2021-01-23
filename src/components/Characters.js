import { Component } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { UilUserSquare } from '@iconscout/react-unicons';
const url = "https://www.breakingbadapi.com/api/characters?limit=6&offset="

class Characters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            page: 0,
        }
    }

    /**
     * Fetch characters
     */
    fetchCharacters = () => {
        const charUrl = `${url}${this.state.page * 6}`;
        axios.get(charUrl)
            .then(response => {
                this.setState(state => {
                    const chars = response.data;
                    return {
                        ...state, 
                        characters: state.characters.concat(chars)}
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    /**
     * Load More characters
     */
    loadMore = () => {
        this.setState(state => {
            return {
                ...state, 
                page: state.page + 1}
        }, 
        this.fetchCharacters)
    }

    /**
     * Sort characters for param
     */
    sortCharacters = param => {
        const { characters } = this.state
        let sorted;
        if (param === "birthday"){
            sorted = characters.sort((a, b) => {
                if (a.birthday !== "Unknown" && b.birthday !== "Unknown") {
                    const birthA = new Date(a.birthday);
                    const birthB = new Date(b.birthday);
                    return birthA - birthB;
                } else if (a.birthday !== "Unknown" && b.birthday === "Unknown") {
                    return -1;
                } else if (a.birthday === "Unknown" && b.birthday !== "Unknown") {
                    return 1;
                } else {
                    return 0;
                }
            });
        } else {
            sorted = characters.sort((a, b) => (a[param] > b[param]) ? 1 : ((b[param] > a[param]) ? -1 : 0));
        }
        this.setState(state => {
            return {
                ...state, 
                characters: sorted}
        });
    }

    componentDidMount() {
       this.fetchCharacters();
    }

    render() {
        const { characters } = this.state;
        const sortBtns = ["name", "birthday", "portrayed"];
        return (
            <div>
                <h2><UilUserSquare />Characters</h2>
                <div className="SortingButtons">
                    Sort by:
                    {sortBtns.map((item, idx) =>
                        <button className="Button" onClick={() => {this.sortCharacters(item)}} key={idx}>{item}</button>
                    )}
                </div>
                <div className="CharactersContainer">
                    {characters && characters.map(c => <CharacterCard character={c} key={c.char_id} />)}
                </div>
                <button className="Button LoadMore" onClick={this.loadMore}>Get More</button>
            </div>
        )
    }
}

export default Characters;