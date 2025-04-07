export default async function page1({ params }) {

    const paramsObj = await params
    const {blogId} = paramsObj
    console.log("paramsObje", paramsObj);
    console.log(blogId);
    
    return (
        <>
            <h1>Blog {blogId}</h1>
        </>
    );
}
