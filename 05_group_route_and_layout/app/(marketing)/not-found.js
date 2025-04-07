// "use client"

import { notFound } from "next/navigation"

export default function NotFound() {
      // This should forcefully trigger your custom 404 page
  
    return (
        <div>
            <h1>Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        </div>
    )
}