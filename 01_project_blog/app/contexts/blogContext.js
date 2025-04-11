"use client"
import { useContext, createContext, useState, useEffect } from "react";

const BlogContext = createContext();

export function BlogContextProvider({ children }) {
    const [posts, setPosts] = useState([]);
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            async function fetchPosts() {
                try {
                    const response = await fetch("https://dev.to/api/articles")
                    const data = await response.json()
                    const videoResponse = await fetch("https://dev.to/api/videos")
                    const videoData = await videoResponse.json()
                    setPosts(data)
                    setLoading(false)
                    setVideos(videoData)
                    console.log(posts);
                    console.log("Videos", videos);
                } catch (error) {
                    console.error("Error in fetching Posts")
                    setLoading(false)
                }
            }

            fetchPosts();
        }, [setPosts, setVideos]
    )


    return(
        <BlogContext.Provider value={{posts, loading, videos}}>
            {children}
        </BlogContext.Provider>
    )
} 

export function useBlog(){
    return useContext(BlogContext)
}