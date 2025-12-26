import Image from "next/image";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
          <h1 className="text-4xl text-shadow-indigo-600">
            Tailwind is Working ✅
          </h1>
        <a href="/users">Users</a>
        <ProductCard/>
      </main>
    </div>
  );
}





