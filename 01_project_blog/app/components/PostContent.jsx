"use client";
import React, { useEffect, useState } from 'react';
import { useBlog } from '@/app/contexts/blogContext';
import "@/app/globals.css";
import Link from 'next/link';

export default function PostContent({ params }) {
    const { posts, loading } = useBlog();
    const [randomPosts, setRandomPosts] = useState([]);

    const matchPost = posts.find((postItem) => postItem.slug === params)
    const filteredPosts = posts.filter((postItem) => postItem.slug !== params)

    useEffect(() => {

        const getRandomPosts = () => {
            const userIndexs = [];
            const randoms = [];


            while (randoms.length < 5 && userIndexs.length < filteredPosts.length) {

                const randomIndex = Math.floor(Math.random() * filteredPosts.length);

                if (!userIndexs.includes(randomIndex)) {

                    userIndexs.push(randomIndex);
                    randoms.push(filteredPosts[randomIndex]);
                }
            }

            return randoms;
        }

        const generated = getRandomPosts();
        setRandomPosts(generated);

    }

        , [posts, params])


    if (loading) {
        return <p>Loading...</p>;
    }






    if (!matchPost) {
        return <p>No Posts Available</p>;
    }

    return (
        <>
            {/* <div className='bg-white'> */}


            <div className="w-full flex justify-center my-4 relative">
                {matchPost.social_image ? (
                    <Link href={""}>
                        <img
                            src={matchPost.social_image}
                            alt={matchPost.title}
                            className="w-full h-auto rounded-xl object-cover"
                        />
                    </Link>
                ) : (
                    <div className="w-1/2 h-40 rounded-xl flex items-center justify-center">
                        <p className="text-gray-500">No Image Available</p>
                    </div>
                )}




            </div>
            <div className='bg-white border border-white rounded-2xl mt-5'>
                {/* <div className='mt-5'> */}
                <div className="w-50vw  m-2 flex items-center justify-between p-4 py-0">
                    {/* <h1 className="text-2xl font-semibold">
                        Date:{" "}{
                            (matchPost?.created_at)
                                ? (new Date(matchPost.created_at).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                }))
                                : ("Unknown Date")}
                    </h1> */}

                    {/* left side */}
                    <div className="flex mb-5 items-center ">
                        <div className="relative">
                            <span>
                                {matchPost?.["organization"]?.["profile_image_90"] === undefined ? (" ") : (

                                    <img className="rounded-full align-middle" src={matchPost?.["organization"]?.["profile_image_90"]} width="50" height="50" alt="Image not available" />)
                                }


                            </span>
                        </div>
                        <div className="pl-1">
                            {
                                (matchPost?.["organization"]?.["name"] === undefined) ? " " : (
                                    <>
                                        <p className="fs-xs opacity-75">{matchPost?.["user"]["name"]}</p>
                                        <i className='text-sm opacity-75'>Written For </i>
                                        <Link href={`https://dev.to/${matchPost?.["organization"]["slug"]}`} target="_blank">
                                            <span className="font-bold hover:text-[#3b49df] hover:cursor-pointer"> {matchPost?.["organization"]?.["name"]}  </span>
                                        </Link>
                                    </>
                                )
                            }
                        </div>
                    </div>



                    {/* right-side */}
                    <div className="flex mb-5 items-center space-x-3">
                        <div className="relative">
                            <span><img className="rounded-full align-middle" src={matchPost?.["user"]?.["profile_image_90"]} width="50" height="50" alt={matchPost.title} /></span>
                        </div>
                        <div className="pl-3">
                            <span className="font-bold">{matchPost["user"]["name"]?.toUpperCase()}</span>

                            <p className="fs-xs color-base-60">
                                <i>Posted on</i> <time dateTime={new Date(matchPost.created_at)} className="date-no-year" title={new Date(matchPost.created_at).toLocaleString()}>
                                    {
                                        new Date(matchPost.created_at).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })
                                    }
                                </time>


                            </p>
                        </div>
                    </div>
                </div>

                <ul className="text-sm text-gray-600 flex flex-wrap m-4 ml-6">
                    {
                        matchPost.tag_list.map(
                            (tag, index) => (
                                (index % 2 === 0) ? (
                                    <Link href={`https://dev.to/t/${tag}`} target="_blank">
                                        <li key={index} className="text-sm p-2.5 py-1 text-black bg-gray-200 border-gray-600 rounded-2xl m-1 hover:bg-pink-100 hover:text-pink-500" ># <b className="text-black">{tag} </b></li>
                                    </Link>
                                )
                                    : (
                                        <Link href={`https://dev.to/t/${tag}`} target="_blank">
                                            <li key={index} className="text-sm p-2.5 py-1 text-black bg-gray-200 border-gray-600 rounded-2xl m-1 hover:bg-green-200 hover:text-green-400" ># <b className="text-black">{tag} </b></li>
                                        </Link>
                                    )

                            )
                        )
                    }
                </ul>


                <div className="m-4 ml-6">
                    <h1 className="text-2xl font-bold">{matchPost.title}</h1>
                </div>
                {matchPost.description ? (
                    <div className="h-fit m-4 ml-6">
                        <div className="browser-css text-2xl text-justify text-black">
                            🚀 Explore the full article on the official website - <Link href={`https://dev.to/${matchPost["path"]}`} target="_blank">  <span className='font-semibold hover:font-bold hover:text-[#3b49df] hover:cursor-pointer'>Click Here! 🔗📖 </span> </Link>
                        </div>{" "}
                    </div>
                ) : (
                    <p> No Content Available...</p>
                )}

                {/* </div> */}

            </div>


            <div className="bg-white">

                <section className=" px-16 py-8 mt-5 print-hidden" id="bottom-content-read-next">
                    <h2 className="text-3xl font-bold m-5">Read next</h2>

                    {
                        randomPosts.map((IndiPost) => (
                            <div className='m-3' key={IndiPost.id}>
                                <Link href={`/post/${IndiPost.path}`}>
                                    <div className="flex items-center hover:text-[#3b49df] hover:cursor-pointer">
                                        <span className="crayons-avatar crayons-avatar--xl m:crayons-avatar--2xl mr-4 shrink-0">
                                            <img loading="lazy" alt="sinedied profile image" className="rounded-full" width="100" height="100" src={IndiPost["user"]["profile_image_90"]} />
                                        </span>
                                        <div>
                                            <h3 className="font-bold text-lg">{IndiPost.title}</h3>
                                            <p className="opacity-75 pt-1 text-sm">
                                                {IndiPost["user"]["name"]?.toUpperCase()} - <time dateTime={new Date(IndiPost.created_at)} className="date-no-year" title={new Date(IndiPost.created_at).toLocaleString()}>
                                                    {
                                                        new Date(IndiPost.created_at).toLocaleDateString("en-US", {
                                                            month: "long",
                                                            day: "numeric",
                                                        })
                                                    }
                                                </time>
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }


                </section>

            </div>








        </>
    )
}


