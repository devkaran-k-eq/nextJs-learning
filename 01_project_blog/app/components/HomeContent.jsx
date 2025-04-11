"use client"

import { useBlog } from "../contexts/blogContext"
import PostCard from "./PostCard"


export default function HomeContent() {

    const { posts } = useBlog();

    console.log("Posts", posts);
    return (
        <div className="w-full py-8">

            {posts.length === 0 ? (
                <div className="flex flex-wrap">
                    <div className="p-2 w-full">
                        <h1 className="text-2xl font-bold hover:text-gray-500">
                            No Post Available
                        </h1>
                    </div>
                </div>
            ) : (
                <div className="flex flex-wrap">

                    {posts.map((post) => (
                        <div key={post.id} className="p-2  sm:w-1/3 w-1/1">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            )}

        </div>
    );

}