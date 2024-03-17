export default function Footer() {
    return (
        <footer
            className=" text-center bg-[#303133] text-neutral-200 lg:text-left">
            <div className="mx-16 py-10 text-left">
                <div className="grid-1 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
                    <div className="">
                        <h6
                            className="mb-4 flex items-center font-semibold uppercase justify-start">
                            {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-4 w-4">
                                <path
                                    d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                            </svg> */}
                            IET NITK
                        </h6>
                        <p>
                            The Institute of Engineering Technology - National Institute of Technology Karnataka (IET-NITK) Student Chapter
                        </p>
                    </div>

                    <div className="md:pl-6">
                        <h6
                            className="mb-4 flex font-semibold uppercase justify-start">
                            SIGs
                        </h6>
                        <p className="mb-4">
                            <a href="#!" className=" text-neutral-200"
                            >Cipher</a
                            >
                        </p>
                        <p className="mb-4">
                            <a href="#!" className=" text-neutral-200"
                            >Rovisp</a
                            >
                        </p>
                        <p className="mb-4">
                            <a href="#!" className=" text-neutral-200"
                            >Torsion</a
                            >
                        </p>
                        <p className="mb-4">
                            <a href="#!" className=" text-neutral-200"
                            >Venture</a
                            >
                        </p>
                        <p className="mb-4">
                            <a href="#!" className=" text-neutral-200"
                            >Inkheart</a
                            >
                        </p>
                        <p>
                            <a href="#!" className=" text-neutral-200"
                            >Medium</a
                            >
                        </p>
                    </div>

                    <div className="">
                        <h6
                            className="mb-4 flex font-semibold uppercase justify-start">
                            Affinity Groups
                        </h6>
                        <p className="mb-4">
                            <a href="#!" className=" text-neutral-200"
                            >Women In Technology</a
                            >
                        </p>
                        <p className="mb-4">
                            <a href="#!" className=" text-neutral-200"
                            >CP Community</a
                            >
                        </p>
                        <p className="mb-4">
                            <a href="#!" className=" text-neutral-200"
                            >Java Community</a
                            >
                        </p>
                    </div>

                    <div className="">
                        <h6
                            className="mb-4 flex font-semibold uppercase justify-start">
                            Information
                        </h6>
                        {/* <p className="mb-4">
                            <a href="/teams" className=" text-neutral-200"
                            >Our Team</a
                            >
                        </p> */}
                        <p className="mb-4">
                            <a href="/projects" className=" text-neutral-200"
                            >Projects</a
                            >
                        </p>
                        <p className="mb-4">
                            <a href="/events" className=" text-neutral-200"
                            >Events</a
                            >
                        </p>
                        <p className="mb-4">
                            <a href="/blogs" className=" text-neutral-200"
                            >Blogs</a
                            >
                        </p>
                        <p>
                            <a href="/contact" className=" text-neutral-200"
                            >Help</a
                            >
                        </p>
                    </div>

                    <div>
                        <h6
                            className="mb-4 flex font-semibold uppercase justify-start">
                            Contact
                        </h6>
                        <p className="mb-4 ">
                            {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-5 w-5">
                                <path
                                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                <path
                                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                            </svg> */}
                            <strong>NITK Surathkal</strong><br />
                            NH 66, Srinivasnagar<br />
                            Surathkal, Mangalore<br />
                            Karnataka 575025<br />
                        </p>
                        <p className="mb-4 flex items-center justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-5 w-5">
                                <path
                                    d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path
                                    d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>
                            <a href="mailto: iet@nitk.ac.in"> iet@nitk.ac.in</a>
                        </p>
                        <div className="flex items-center">
                            <a href="https://www.facebook.com/ietnitk" target="_blank" className="mr-4 text-neutral-200">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                            <a className="mr-4 text-neutral-200">
                                <img className="h-5 w-5" src="/youtube.svg"></img>
                            </a>
                            <a href="https://www.instagram.com/ietnitk" target="_blank" className="mr-4 text-neutral-200">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/company/ietnitk/" target="_blank" className="mr-4 text-neutral-200">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                </svg>
                            </a>
                            <a href="https://www.github.com/IET-NITK" target="_blank" className=" text-neutral-200">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" p-6 text-center bg-[#262626]">
                Copyright © 2024 All rights reserved | Made with ❤️ by IET-NITK
            </div>
        </footer>
    )
}