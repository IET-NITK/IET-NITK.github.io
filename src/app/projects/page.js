import ProjectList from "@/components/project/projectList";
import Link from "next/link";

export default function Project() {
  return (
    <div>
      <section className={`w-full mt-20 bg-[#461461] relative`}>
        <div className="text-4xl py-16 flex justify-center text-white mx-auto w-4/5 md:max-w-full lg:max-w-screen-md 2xl:max-w-screen-lg">
          Projects
        </div>
      </section>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 min-h-[70vh] gap-6 justify-items-center mb-10 mx-5 sm:mx-10 md:mx-20">

        <Link href="/projects/cipher" className=" rounded-lg max-w-[500px] bg-purple-900/10 hover:shadow-md cursor-pointer">
          <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4" className="rounded-t-lg object-cover" />
          <div className="py-3 font-semibold text-lg text-center ">
            Cipher
          </div>
        </Link>

        <Link href="/projects/venture" className=" rounded-lg max-w-[500px] bg-purple-900/10 hover:shadow-md cursor-pointer">
          <img src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa" className="rounded-t-lg object-cover" />
          <div className="py-3 font-semibold text-lg text-center ">
            Venture
          </div>
        </Link>

        <Link href="/projects/rovisp" className=" rounded-lg max-w-[500px] bg-purple-900/10 hover:shadow-md cursor-pointer">
          <img src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e" className="rounded-t-lg object-cover" />
          <div className="py-3 font-semibold text-lg text-center ">
            Rovisp
          </div>
        </Link>

        <Link href="/projects/torsion" className=" rounded-lg max-w-[500px] bg-purple-900/10 hover:shadow-md cursor-pointer">
          <img src="https://images.unsplash.com/photo-1595787142842-7404bc60470d" className="rounded-t-lg object-cover" />
          <div className="py-3 font-semibold text-lg text-center ">
            Torsion
          </div>
        </Link>
      </div>
    </div>
  )
}