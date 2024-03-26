import Link from "next/link";
import type { FC } from "react";

const Home : FC = () => {
  console.log("not client side app");
  return (
    <div>
      <h1>my app</h1>
      <Link href={"/about"}>lets go to a about page</Link>
    </div>
  );
};

export default Home;
