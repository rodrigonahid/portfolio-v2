import axios from "axios";

interface IPosts {
  data: {
    results: {}[];
  };
}

// Get Refs
const ref = axios.create({
  baseURL: process.env.API_URL,
});

async function getRef() {
  const res = await ref.get("/api/v2");
  return res.data.refs[0].ref;
}

// Get Posts
export const api = axios.create({
  baseURL: process.env.API_URL + "/api/v2/documents/search",
  params: {
    ref: getRef(),
  },
});

export async function getPosts(locale: string) {
  try {
    const res: IPosts = await api.get("/", {
      params: { lang: locale === "en" ? "en-us" : "pt-br" },
    });

    return res.data.results;
  } catch (err: any) {
    return err.message;
  }
}

export async function getSinglePost(id: string) {
  try {
    const res = await api.get(`?q=[[at(document.id, "${id}" )]]`);
    return res.data;
  } catch (err: any) {
    return err.message;
  }
}

export async function getAllPosts() {
  try {
    const res: IPosts = await api.get("/", {
      params: { lang: "*" },
    });
    return res.data.results;
  } catch (err: any) {
    return err.message;
  }
}
