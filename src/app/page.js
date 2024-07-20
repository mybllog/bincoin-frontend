"use client"
import Page from "./pages/Home";
import Image from "next/image";

import Nav from "./components/Nav";
export default function Home() {
  return (
   
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    <Page/>
      </div>
    </main>
  );
}
