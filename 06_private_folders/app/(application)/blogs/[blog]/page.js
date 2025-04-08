import { notFound } from "next/navigation";

// for changing MetaData from params
export async function generateMetadata({params}){
    const {blog} = await params;

    return{
        title: `Blog: ${blog}`
    }
}

// for simple change meta data in particular page
// export const metadata = {
//     title: {
//         absolute: "Chika",
//     }
// }


export default async function page1({ params }) {

    const paramsObj = await params
    const {blog} = paramsObj
    console.log("paramsObje", paramsObj);
    console.log(blog);
    
    if(/[^0-9]/.test(blog)){
        notFound();
    }
    return (
        <>
            <h1>Blog {blog}</h1>
        </>
    );
}
