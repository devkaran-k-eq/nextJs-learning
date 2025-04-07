"use client";
// it converts server side to client side component

import Link from "next/link";

export default  function Home({params, searchParams}) {

  console.log(  searchParams);
  console.log( params);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 onClick={() => console.log("Hello")}> Namaste Duniya !!</h1>
      <p>
        <Link href="/about">About</Link>
      </p>
      <p>
        <Link href="/services">Services</Link>{" "}
      </p>
      <p>
        <Link href="/blogs">Blogs</Link>{" "}
      </p>
    </div>
  );
}

// learn regex test in 1 to 9
// learn not found page set up
// usePathname Hook of client side react component  to get params string

