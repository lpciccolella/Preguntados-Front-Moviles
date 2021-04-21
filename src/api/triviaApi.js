  import axios from "axios";

const instance = axios.create({
 baseURL: "https://opentdb.com/api.php",
//  baseURL: "https://opentdb.com/api.php?amount=10"
//  baseURL: "https://opentdb.com/api.php?amount=10&type=multiple"
});

export default instance;