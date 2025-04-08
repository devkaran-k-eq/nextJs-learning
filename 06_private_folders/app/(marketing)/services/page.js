import Link from "next/link";

export default function Service() {
  return (
    <>
      <h1> This is Service page</h1>
      <p>THis is Service page description</p>
      <p>
        <Link href="services/web-dev">Web Dev</Link>
      </p>
    </>
  );
}
