// "use client"
import Comments from "@/components/Comments";
import Likes from "@/components/Likes";
import Views from "@/components/Views";
import Link from "next/link";
import { Suspense } from "react";

const Blogs = () => {

    return (
        <>
            <nav>
                <ul className="navbar">
                    <li>
                        <Link href="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="nav-link ">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/services" className="nav-link">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/blogs" className="nav-link active">
                            Blogs
                        </Link>
                    </li>
                </ul>
            </nav>
            <ul className="navbar">
                <li><Link href="/blogs/1" style={{ color: "white" }}>Blog 1</Link></li>
                <li><Link href="/blogs/2" style={{ color: "white" }}>Blog 2</Link></li>
                <li><Link href="/blogs/3" style={{ color: "white" }}>Blog 3</Link></li>
            </ul>
            <div className="blog-links">
                <Likes />
                <Comments/>
                <Views/>
            </div>

        </>
    );
};

export default Blogs;
