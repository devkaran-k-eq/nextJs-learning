"use client";
import { useBlog } from "../contexts/blogContext"; // Ensure path is correct
import Link from "next/link";

export default function VideoContent() {
  const { videos, loading } = useBlog();

  return (
    <div className="w-full py-8">
      {(videos.length === 0 || loading) ? (
        <div className="flex flex-wrap">
          <div className="p-2 w-full">
            <h1 className="text-2xl font-bold hover:text-gray-500">
              No Videos Available
            </h1>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap">
          {videos.map((video) => (
            <div
              key={video.id}
              className="p-2 w-full sm:w-1/2 lg:w-1/3"
            >
              <Link href={`https://dev.to/${video.path}`} target="_blank">
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                  <div className="relative">
                    <img
                      alt={video.title}
                      loading="lazy"
                      className="w-full object-cover block aspect-video"
                      width="320"
                      height="180"
                      src={video.cloudinary_video_url}
                    />
                    <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      {video.video_duration_in_minutes}
                    </span>
                  </div>
                  <div className="p-4 h-30">
                    <h2 className=" font-medium mb-2">{video.title}</h2>
                    <small className="text-sm font-bold text-gray-600">
                      {video["user"]["name"]}
                    </small>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}