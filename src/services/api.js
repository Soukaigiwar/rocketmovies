import axios from "axios"

export const api = axios.create({
    baseURL: "http://localhost:4444",
    //baseURL: "https://rocketmovies-api.sergiomello.online",
})
