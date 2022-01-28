import axios from "axios";

export const api = axios.create({
  baseURL: process.env.API_URL + "/api",
});

export async function getPosts(locale: string) {
  try {
    const res = await api.get(`/posts?populate=%2A&locale=${locale}`);
    return res.data;
  } catch (err: any) {
    return err.message;
  }
}

export async function getPostsHome(locale: string) {
  try {
    const res = await api.get(
      `/posts?pagination[pageSize]=4&populate=%2A&locale=${locale}`
    );
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

export async function getAllPosts() {
  try {
    const res = await api.get("/posts?locale=all");
    return res.data;
  } catch (err: any) {
    return err.message;
  }
}
