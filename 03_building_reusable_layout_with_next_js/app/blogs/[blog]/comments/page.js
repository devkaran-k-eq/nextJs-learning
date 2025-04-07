export default async function Comments({ params }) {

    const paramsObj = await params
    const {blog} = paramsObj
    console.log("Comments", blog);
    
    return (
        <>
            <h1>Comments: {blog}</h1>
        </>
    );
}
