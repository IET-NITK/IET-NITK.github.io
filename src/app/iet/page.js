"use client"
import { useState } from "react";
import About from "@/components/about";
import SIG from "@/components/sig";
import Link from 'next/link'
import Footer from "@/components/footer";
import Hero from "@/components/hero";


export default function Home() {
    return (
        <>
            <Link aria-current="page" href={"/blogs"} passHref></Link>
            <Link aria-current="team" href={"/team"} passHref></Link>
            <Hero />
            <About />
            <SIG />
        </>
    )
}