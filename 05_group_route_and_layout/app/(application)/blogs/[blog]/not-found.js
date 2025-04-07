// export default async function ({params}) {

//     const{blog} = await  params;
//     console.log("Blog", blog);

//     return (
//         <>
//             <h1>Page is not found</h1>
//             <h2>Try with better words</h2>
//         </>
//     )
// }
"use client"

import { usePathname } from "next/navigation"

export default function NotFound(){

    const blog = usePathname();
    console.log("Blog", blog);
    const lastPage = blog.split("/")
    const lastWord = lastPage[lastPage.length - 1];
    return(
        <>
        <h1>This Blog Page <i style={{color: "red"}}>{lastWord} </i> is Not Found</h1>
        <h2>This not Found only use in Dynamic routing not in nested routing</h2>
        </>
    )
}
