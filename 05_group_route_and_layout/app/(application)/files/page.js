export default async function MainPage(params) {
    const paramsObj = await params
    const { fileId } = paramsObj
    console.log(fileId);
    return (
        <div>
            <h1>Optional Catch-all Route</h1>
            <h3>
                {fileId}
            </h3>
            <h2>File: <i>{fileId?.join("/")}</i></h2>
        </div>
    )
}