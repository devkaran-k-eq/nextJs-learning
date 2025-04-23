export async function generateMetadata({ params }) {

    const paramsObj = await params
    const { fileId } = paramsObj

    return {
        title: {
            absolute: `${fileId.join("/")}`
        }
    }
}

export default async function FileId({ params }) {

    const paramsObj = await params
    const { fileId } = paramsObj
    console.log(fileId);

    return (
        <div>
            <h1>Hey You learned Catch All Routes</h1>
            <h2>File: <i>{fileId?.join("/")}</i></h2>
            <h3>Difference between [...fileId] & [[...fileId]]</h3>

            <h4> [...fileId] (Catch-all Route)</h4>
            <ol>
                <li>This matches multiple segments in a URL.</li>
                <li>It creates a dynamic route that captures one or more parts of the URL as an array.

                </li>
            </ol>
            <h4>[[...fileId]] (Optional Catch-all Route) </h4>
            <ol>
                <li>Similar to [...fileId], but it allows the route to match when no parameter is provided.

                </li>
                <li>If no parameters are passed, fileId will be undefined.

                </li>
            </ol>

            <h1>Don't Use Optional in Root Directory</h1>
        </div>
    )
}