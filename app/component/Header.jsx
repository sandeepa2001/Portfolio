import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="py-8 text-white xl:py-12">
      <div className="container flex items-center justify-between mx-autofill">
        {/*logo*/}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Sandeepa <span className="text-accent">.</span>
          </h1>
        </Link>
        {/*dekstop nav*/}
        <div className="items-center hidden gap-8 xl:flex ">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
        <div className="xl:hidden"><MobileNav/></div>
      </div>
    </header>
  );
}
