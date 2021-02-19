import axios from "axios";
let baseURL;

process.env.NODE_ENV === "production"
  ? (baseURL = "/herokuUrl")
  : (baseURL = "http://localhost:5000");

const service = axios.create({ withCredentials: true, baseURL });

const actions = {
  test: async () => {
    console.log("hi");
    return await service.get("/test");
  },
  getTasks: async () => {
    return await service.get("/tasks");
  },
  seed: async () => {
    return await service.post("/seed");
  },
  drop: async () => {
    return await service.post("/drop-db");
  },
};

export default actions;
