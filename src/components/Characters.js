import { Component } from "react";
import { getCharacters } from "../config/request";
import axios from "axios";

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
    fetchCaracters = () => {
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
        this.fetchCaracters)
    }

    componentDidMount() {
       this.fetchCaracters();
    }

    render() {
        const { characters } = this.state;
        return (
            <div>
                {(characters && characters.length > 0 )&&
                    characters.map((c) => <p key={c.char_id}>{c.name}</p>)
                }
                <button onClick={this.loadMore}>Load More</button>
            </div>
        )
    }
}

export default Characters;