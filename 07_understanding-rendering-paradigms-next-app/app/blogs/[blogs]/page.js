import Link from "next/link";

const Blog = async ({ params }) => {
    const { blogs } = await params;
    console.log(blogs);

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
                        <Link href="/about" className="nav-link">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/services" className="nav-link">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/blogs" className="nav-link">
                            Blogs
                        </Link>
                    </li>
                </ul>
            </nav>

            <h1>Welcome to our {blogs} Page</h1>
            <h2 style={{textAlign: "center"}}>This is Blog {blogs}. Page</h2>

        </>
    );
};

export default Blog;