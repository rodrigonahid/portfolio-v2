import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: process.env.API_URL + "/api",
});

export async function getPosts() {
  try {
    const res = await api.get("/posts?populate=%2A");
    console.log(res);
    return res.data;
  } catch (err: any) {
    return err.message;
  }
}

export async function getPostsHome() {
  try {
    const res = await api.get("/posts?pagination[pageSize]=4&populate=%2A");
    return res.data;
  } catch (err: any) {
    return err.message;
  }
}

export async function getSinglePost(id: string) {
  try {
    const res = await api.get(`/posts/${id}?populate=%2A`);
    return res.data;
  } catch (err: any) {
    return err.message;
  }
}
