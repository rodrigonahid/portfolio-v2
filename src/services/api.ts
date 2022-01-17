import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: process.env.API_URL + "/api",
});

export async function getPosts() {
  try {
    const res = await api.get("/posts");
    return res.data;
  } catch (err: any) {
    console.log(err);
    return err.message;
  }
}
