import Head from "next/head";
import { useRouter } from "next/router";
import { PictureProps } from "../../components/global/PostItems";
import { PostsSingleContent } from "../../components/posts/PostsSingleContent";
import { PostsSingleHeader } from "../../components/posts/PostsSingleHeader";
import { getPosts, getSinglePost } from "../../services/api";

interface StaticPros {
  params: {
    id: string;
  };
}

interface PostItemProps {
  singlePost: {
    attributes: {
      Title: string;
      Content: string;
      Date: string;
      Picture: PictureProps;
    };
  };
}

export default function PostItem({ singlePost }: PostItemProps) {
  return (
    <>
      <Head>
        <title>Rodrigo Nahid | {singlePost.attributes.Title}</title>
      </Head>

      <PostsSingleHeader attributes={singlePost.attributes} />
      <PostsSingleContent attributes={singlePost.attributes} />
    </>
  );
}

export async function getStaticPaths() {
  const { meta } = await getPosts();
  const totalPosts: number = meta.pagination.total;

  const mapPosts = () => {
    const arrayTotal = [];
    for (let i = 0; i <= totalPosts; i++) {
      arrayTotal.push({ params: { id: `${i}` } });
    }
    return arrayTotal;
  };
  // const params = mapPosts();
  // console.log(params);
  return {
    paths: mapPosts(),
    fallback: false,
  };
}

export async function getStaticProps({ params }: StaticPros) {
  const { data } = await getSinglePost(params.id);
  if (data)
    return {
      props: {
        singlePost: data,
      },
    };

  return {
    props: {
      singlePost: null,
    },
  };
}
