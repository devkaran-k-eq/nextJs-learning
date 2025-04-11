import Link from "next/link";

// SSR WITHOUT THIS SHOW NOT_FOUND PAGE
export const dynamicParams = false;

//ISR works in production environment so you can understand
export const revalidate = 10;

// SSR
// export async function generateStaticParams() {
    // const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    // const data = await response.json();
    // console.log(data);
    // return data.map( ({id}) => ({blogID: `${id}`}))
// }

const Blog = async ({ params }) => {
    const { blogID } = await params;
    console.log("Blog in dev: ", blogID);

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

            <h1>Welcome to our {blogID} Page</h1>
            <h2 style={{ textAlign: "center" }}>This is Blog {blogID}. Page</h2>
            <h2 style={{ textAlign: "center" }}>{new Date().toString()}</h2>

        </>
    );
};

export default Blog;