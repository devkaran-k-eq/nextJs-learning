"use client"
import Link from "next/link"

const PostCard = ({
    id,
    social_image,
    user,
    title,
    edited_at,
    organization = "Devkaran",
    tag_list,
    path,
    ...props
}) => {
    // console.log(tag_list);
    return (
        <Link href={`/post/${path}`}>
            <div className="w-full bg-gray-100 hover:bg-[#F3C301] rounded-xl p-4">
                <div className="mb-4 justify-center w-full">
                    <img
                        src={social_image}
                        alt="Image Not Found !!"
                        className="rounded-xl"
                        loading="lazy"
                    />
                </div>

                <h2 className="text-xl inline-block">
                    <span className="font-bold">{title}</span>
                    <div className="flex flex-col">
                        <p className="text-sm text-gray-600"> <span className="font-bold hover:text-pink-500">{user["name"]}  </span> <i className={
                            (organization["name"] === undefined) ? "hidden" : ""
                        }>Written for</i> <span className="font-bold hover:text-pink-500">
                                {organization["name"]}</span> </p>
                        <ul className="text-sm text-gray-600 flex flex-wrap">
                            {
                                tag_list.map(
                                    (tag, index) => (
                                        (index % 2 === 0) ? (<li key={index} className="text-sm p-2.5 py-1 text-black bg-gray-200 border-gray-600 rounded-2xl m-1 hover:bg-pink-100 hover:text-pink-500" ># <b className="text-black">{tag} </b></li>) : (<li key={index} className="text-sm p-2.5 py-1 text-black bg-gray-200 border-gray-600 rounded-2xl m-1 hover:bg-green-200 hover:text-green-400" ># <b className="text-black">{tag} </b></li>)

                                    )
                                )
                            }
                        </ul>
                    </div>
                </h2>
            </div >
        </Link >
    )
}

export default PostCard

// #4e7ace

// #2f73f6