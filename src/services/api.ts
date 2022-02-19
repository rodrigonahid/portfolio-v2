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

// export async function getPostsHome(locale: string) {
//   try {
//     const res = await api.get(
//       `/posts?pagination[pageSize]=4&populate=%2A&locale=${locale}`
//     );
//     return res.data;
//   } catch (err: any) {
//     return err.message;
//   }
// }

export async function getSinglePost(locale: string, slug: string) {
  try {
    const res = await api.get(`/content/posts/slug/${slug}?include=tags`);
    const localPosts = res.data.posts.filter((item: any) => {
      if (locale === "pt-BR" && item.primary_tag.slug == "pt-br") {
        return item;
      } else if (locale === "en" && item.primary_tag.slug === "en-us") {
        return item;
      }
    });

    return localPosts[0];
  } catch (err: any) {
    return err.message;
  }
}

export async function getAllPosts() {
  try {
    const res = await api.get("/content/posts?include=tags");

    return res.data.posts;
  } catch (err: any) {
    return err.message;
  }
}
