'use client'

import { useRouter } from "next/navigation";
import { startTransition } from "react";


const Error = ({ error, reset }) => {
    const router = useRouter();

    // console.dir(error);
    return (
        <>
            <div>
                {error.digest},
            </div>
            <div>{error.message}</div>
            {/* <div>{error._componentStack}</div> */}
            <button onClick={() => {
                startTransition(() => {
                    reset(); // clears the error boundary on the client.
                    router.refresh() // triggers a navigation event that re-fetches data from the server.
                    // router.push("/blogs/1")
                })
                
            }}>Try again</button>
        </>
    )
};

export default Error;
