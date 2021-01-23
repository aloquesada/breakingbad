import axios from "axios";

export const url = "https://www.breakingbadapi.com/api/characters?limit=6&offset=0"

export const getCharacters = () => {
    axios.get(url)
        .then(function (response) {
            // handle success
            return response.data
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            return [];
        })
};
