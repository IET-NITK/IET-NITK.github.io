export default function SIG() {
    return (
        <main className="bg-[#fdf7fe] p-14 px-4 sm:px-14">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl flex gap-3 items-center font-bold text-[#222222]"><span className="bg-[#631c6f] w-8 h-1 block">{" "}</span>Our SIGs<span className="bg-[#631c6f] w-8 h-1 block">{" "}</span></h1>
                <p className="mt-3 text-[#222222] text-center"> IET NITK consists of six different Special Interest Groups</p>
            </div>
            <div className=" grid grid-cols-2 sm:grid-cols-3 grid-rows-2 place-items-center gap-6 w-full sm:w-3/4 m-auto mt-14">
                <div className="flex flex-col items-center justify-center">
                    <img src="/cipher.webp" alt="cipher" className="h-[100px] mb-4" />
                    <p className=" text-center text-[#222222]">Cipher SIG brings together people interested in Computer Science and Information Technology. </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src="/rovisp.webp" alt="rovisp" className="h-[100px] mb-4" />
                    <p className=" text-center text-[#222222]">Rovisp SIG brings together people who are passionate about Electronics and Electrical Technology. </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src="/torsion.webp" alt="torsion" className="h-[100px] mb-4" />
                    <p className=" text-center text-[#222222]">Torsion SIG brings together people interested in Mechanical, Civil, Chemical and Material Sciences. </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src="/venture.webp" alt="venture" className="h-[100px] mb-4" />
                    <p className=" text-center text-[#222222]">We're interested in exploring the fields of finance, business and management. </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src="/inkheart.webp" alt="inkheart" className="h-[100px] mb-4" />
                    <p className=" text-center text-[#222222]">Inkheart is our new Lit&Phil SIG for people who are passionate about literature, music etc </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src="/medium.webp" alt="medium" className="h-[100px] mb-4" />
                    <p className=" text-center text-[#222222]">Medium SIG is dedicated to people interested in Media and Marketing. </p>
                </div>
            </div>
        </main>
    )
}