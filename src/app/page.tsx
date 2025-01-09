import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className=" container mx-auto flex flex-col lg:flex-row py-16 p-4 items-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold">
          Get exciting news update at the finger of your tips
        </h1>
        <p className="text-gray-500 text-2xl">
          Get all the trending news happening around you 24hrs. Never miss an
          update
        </p>
        <button className="bg-red-500 py-2 font-semibold rounded-md px-8 text-center text-white">
          <Link href={"/news"}>Try for free</Link>
        </button>
      </div>
      <div>
        <img src="/hero.png" alt="" />
      </div>
    </section>
  );
}
