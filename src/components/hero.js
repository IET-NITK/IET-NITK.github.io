import Typewriter from 'typewriter-effect';
import Particles from './particles';

export default function Hero() {
    return (
        <>
            <main className=" flex relative justify-center items-center min-h-[80vh] md:min-h-[90vh] mt-14 sm:mt-0 flex-col ">
                <Particles />
                <div className="flex items-center sm:justify-between w-full px-10 flex-col-reverse md:flex-row z-10">
                    <div className="flex flex-col flex-auto w-full md:w-1/2 justify-center">
                        <h1 className="text-black text-4xl md:text-5xl font-bold">Igniting Innovation
                        </h1>
                        <h1 className=' text-[#631c6f] text-4xl md:text-5xl font-bold mb-4'>
                            <Typewriter
                                options={{
                                    strings: ["Empowering Futures.", "Inspiring Tomorrow's Engineers.", "Designing to ideate.", "Unlocking potential."],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <h2 className=" text-2xl text-[#484848] mb-12 ">Empowering future innovators to promote global engineering and innovations.
                        </h2>
                    </div>
                    <div className="hidden md:flex w-1/2 justify-center">
                        <img src="/iet-logo.png" alt="iet-logo" className="h-auto mb-4" />
                    </div>
                </div>
            </main>
        </>
    )
}