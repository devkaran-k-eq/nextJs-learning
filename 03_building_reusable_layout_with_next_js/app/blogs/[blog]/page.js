export async function generateMetadata({ params}) {

    const {blog} = await params
    return{
        title: blog,
    };
}

export default async function page1({ params }) {

    const paramsObj = await params
    const {blog} = paramsObj
    console.log("paramsObje", paramsObj);
    console.log(blog);
    
    return (
        <>
            <h1>Blog {blog}</h1>
        </>
    );
}
