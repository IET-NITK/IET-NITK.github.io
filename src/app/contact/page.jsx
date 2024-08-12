export default function Helppage() {
    return (
        <section className=" min-h-[70vh] mt-20">
            <div className="container px-6 py-12 mx-auto">
                <div className="text-center">
                    <p className="font-medium text-purple-600 dark:text-purple-400">Contact us</p>

                    <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">Get in touch</h1>

                    <p className="mt-3 text-gray-600">Our friendly team is always here to help.</p>
                </div>

                <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="p-3 text-purple-600 rounded-full bg-purple-100/80">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </span>

                        <h2 className="mt-4 text-lg font-medium text-gray-800">Email</h2>
                        <p className="mt-2 text-gray-600">Our team is here to help.</p>
                        <p className="mt-2 text-purple-600">iet@nitk.edu.in</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="p-3 text-purple-600 rounded-full bg-purple-100/80">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </span>

                        <h2 className="mt-4 text-lg font-medium text-gray-800">Email</h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">Vidit Harin Shah (Convenor)</p>
                        <a href="mailto:viditshah.211cs264@nitk.edu.in" className="mt-2 text-purple-600 dark:text-purple-400">Email</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="p-3 text-purple-600 rounded-full bg-purple-100/80">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </span>

                        <h2 className="mt-4 text-lg font-medium text-gray-800">Email</h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">Druvika Nuthalapati (President)</p>
                        <a href="mailto:druvikanuthalapati.211ee224@nitk.edu.in" className="mt-2 text-purple-600 dark:text-purple-400">Email</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
