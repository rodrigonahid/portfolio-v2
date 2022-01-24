import Head from "next/head";
import { useRouter } from "next/router";
import { PictureProps } from "../../components/global/PostItems";
import { PostsSingleContent } from "../../components/posts/PostsSingleContent";
import { PostsSingleHeader } from "../../components/posts/PostsSingleHeader";
import { getSinglePost } from "../../services/api";

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
  // Return a list of possible value for id
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }: StaticPros) {
  const { data } = await getSinglePost(params.id);
  console.log(data);
  return {
    props: {
      singlePost: data,
    },
  };
}
