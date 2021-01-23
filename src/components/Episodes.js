import { Component } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";
import { UilTvRetro } from '@iconscout/react-unicons';
const url = "https://www.breakingbadapi.com/api/episodes";

class Episodes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            episodes: [],
        }
    }

    /**
     * Fetch episodes
     */
    fetchEpisodes = () => {
        axios.get(url)
            .then(response => {
                this.setState(state => {
                    const eps = response.data;
                    return {
                        episodes: eps
                    }
                });
            })
            .catch(error => {
                console.log(error);
            });
    }


    componentDidMount() {
       this.fetchEpisodes();
    }

    render() {
        const { episodes } = this.state;
        return (
            <div>
                <h2><UilTvRetro /> Episodes</h2>
                <div className="EpisodesContainer">
                    {episodes && episodes.map(e => <EpisodeCard episode={e} key={e.episode_id} />)}
                </div>
            </div>
        )
    }
}

export default Episodes;