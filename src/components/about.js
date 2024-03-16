import Link from "next/link";
import styles from "./about.module.scss"
import { BiSolidCalendarEvent } from "react-icons/bi";

export default function About() {
    return (
        <main className="flex flex-col w-full">
            <Link href="/expo" className="overflow-hidden animate-bounce">
                <section className="bg-[#542568] h-10 cursor-pointer flex justify-center items-center w-screen relative">
                    <span className={`font-normal text-white flex items-center gap-1`}><BiSolidCalendarEvent className="w-5 h-5" /> {" "} <span>Project Expo. Check out <span className="underline underline-offset-2">projects</span></span></span>
                </section>
            </Link>
            <section className="bg-[#280c33] bg-[url('/bg.png')] bg-cover h-full p-12">
                <div className="flex flex-col items-center justify-center mt-2">
                    <h1 className=" text-white flex items-center gap-3 text-3xl font-bold text-center"><span className="bg-[white] w-8 h-1 block">{" "}</span> ABOUT US<span className="bg-[white] w-8 h-1 block">{" "}</span></h1>
                    <p className="text-white text-center text-lg mt-2">The Institute of Engineering Technology - National Institute of Technology Karnataka (IET-NITK) Student Chapter</p>
                </div>
                <div className="flex flex-col items-center m-auto mt-10 max-w-6xl gap-11 ">
                    <div className="flex flex-col items-center bg-[#5c1670] rounded-lg shadow-xl sm:flex-row hover:bg-[#481457] w-full">
                        <div className=" w-full overflow-hidden">
                            <img className="object-cover rounded-t-lg h-auto md:rounded-l-lg" src="https://images.unsplash.com/photo-1552652893-2aa10a0ab4df?q=80&w=2070&auto=format&fit=crop" alt="" />
                        </div>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">Vision and Mission</h5>
                            <p className="mb-3 font-normal text-gray-100 dark:text-gray-400">The Institute of Engineering Technology - National Institute of Technology Karnataka (IET-NITK) Student Chapter is dedicated to fostering a passion for innovation and cultivating an appreciation for the transformative power of ideas. Through workshops and seminars, we aim to equip students with the skills necessary to shape the future.</p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse items-center bg-[#5c1670] rounded-lg shadow-xl sm:flex-row l hover:bg-[#481457] w-full">
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">Global Network and Impact</h5>
                            <p className="mb-3 font-normal text-gray-100 dark:text-gray-400">Affiliated with IET London, a premier professional society with over 168,000 members worldwide, we offer a global knowledge network to facilitate the exchange of ideas and promote the positive impact of science, engineering, and technology. Eminent personalities are invited to conduct lectures for the benefit of club members and those interested in our activities.</p>
                        </div>
                        <div className="w-full overflow-hidden">
                            <img className="object-cover rounded-t-lg h-auto md:rounded-r-lg" src="https://images.unsplash.com/photo-1627389955800-4afab384df17?q=80&w=1974&auto=format&fit=crop" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}