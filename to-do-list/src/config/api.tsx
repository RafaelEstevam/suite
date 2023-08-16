import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8081",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export { API };
