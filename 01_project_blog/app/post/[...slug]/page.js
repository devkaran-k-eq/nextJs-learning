// import React from 'react';
import PostContent from "@/app/components/PostContent";

export default async function SlugPage({ params }) {

  const { slug } = await params;
  console.log(slug);



  return (
    <>
      <PostContent params={slug[1]} />
    </>)

}
