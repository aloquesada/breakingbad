import { Component } from "react";
import axios from "axios";
import DeathCard from "./DeathCard";
import { UilCrosshair } from '@iconscout/react-unicons';
const url = "https://www.breakingbadapi.com/api/deaths";

class Deaths extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalDeaths: 0,
            deaths: [],
        }
    }

    /**
     * Fetch deaths
     */
    fetchDeaths = () => {
        axios.get(url)
            .then(response => {
                this.setState(state => {
                    const deds = response.data;
                    return {
                        totalDeaths: deds.length,
                        deaths: deds.slice(0, 5)
                    }
                });
            })
            .catch(error => {
                console.log(error);
            });
    }


    componentDidMount() {
       this.fetchDeaths();
    }

    render() {
        const { deaths, totalDeaths } = this.state;
        return (
            <div>
                <h5>Total deaths: {totalDeaths}</h5>
                <h2><UilCrosshair /> Deaths</h2>
                <div className="DeathsContainer">
                    {deaths && deaths.map(d => <DeathCard death={d} key={d.death_id} />)}
                </div>
            </div>
        )
    }
}

export default Deaths;