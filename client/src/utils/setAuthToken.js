import axios from "axios";

const setAuthToken = token => {
    if (token) {
        axios.defualts.headers.common["Authorization"] = token;
    } else {
        delete axios.defualts.headers.common["Authorization"];
    }
};

export default setAuthToken;