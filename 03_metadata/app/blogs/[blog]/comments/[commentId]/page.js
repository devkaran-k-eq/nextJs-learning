
export default async function Comment({ params }) {

    const paramsObj = await params
    const {blog, commentId} = paramsObj
    console.log("Comments", blog);
    console.log("CommentId", commentId);
    
    return (
        <>
            <h1>Comment: {blog}</h1>
            <h2>commentId: {commentId}</h2>
        </>
    );
}
