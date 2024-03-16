"use client"

import React, { useState } from "react";
import Link from "next/link";
import { IoClose, IoMenu } from "react-icons/io5";
import styles from "./Navbar.module.css";
import { useMediaQuery } from "react-responsive";
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: "1150px" });
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMobileMenu = () => {
        if (isMobile) {
            setIsMenuOpen(false);
        }
    };

    function hasProjectPath(str) {
        const regex = /^\/projects\/.*$/;
        return regex.test(str);
      }      

    const pathname = usePathname()

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link className={styles.nav_logo} href={"/"} passHref >
                    <img src="/logo-iet.png" alt="logo" width={50} height={50} />
                </Link>
                {(isMobile && !isMenuOpen) && (
                    <div className={styles.nav__toggle} id="nav-toggle" onClick={toggleMenu}>
                        <IoMenu />
                    </div>
                )}
                {isMobile ? (
                    <div
                        className={`${isMenuOpen ? "right-0" : "-right-full"} ${styles.nav__menu}`}
                        id="nav-menu"
                    >
                        <ul className={`${isMobile ? styles.nav__list : styles.nav__list__web}`}>
                            <li className={styles.nav__item}>
                                <Link href="/" className={styles.nav__link} onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className={styles.nav__item}>
                                <Link href="/blogs" className={styles.nav__link} onClick={closeMobileMenu}>
                                    Blogs
                                </Link>
                            </li>
                            <li className={styles.nav__item}>
                                <Link
                                    href="/events"
                                    className={styles.nav__link}
                                    onClick={closeMobileMenu}
                                >
                                    Events
                                </Link>
                            </li>
                            <li className={styles.nav__item}>
                                <Link
                                    href="/projects"
                                    className={styles.nav__link}
                                    onClick={closeMobileMenu}
                                >
                                    Projects
                                </Link>
                            </li>
                            {/* <li className={styles.nav__item}>
                                <Link
                                    href="/teams"
                                    className={styles.nav__link}
                                    onClick={closeMobileMenu}
                                >
                                    Team
                                </Link>
                            </li> */}
                            <li className={styles.nav__item}>
                                <Link
                                    href="/help"
                                    className={styles.nav__link}
                                    onClick={closeMobileMenu}
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        <div className={styles.nav__close} id="nav-close" onClick={toggleMenu}>
                            <IoClose />
                        </div>
                    </div>
                ) : (
                    <ul className={` ${isMobile ? styles.nav__list : styles.nav__list__web} ${hasProjectPath(pathname) ? 'text-white' : 'text-[--title-color]' }`}>
                        <li className={styles.nav__item}>
                            <Link href="/" className={styles.nav__link} onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        {/* <li className={styles.nav__item}>
                            <Link href="/teams" className={styles.nav__link} onClick={closeMobileMenu}>
                                Team
                            </Link>
                        </li> */}
                        <li className={styles.nav__item}>
                            <Link href="/blogs" className={styles.nav__link} onClick={closeMobileMenu}>
                                Blogs
                            </Link>
                        </li>
                        <li className={styles.nav__item}>
                            <Link
                                href="/events"
                                className={styles.nav__link}
                                onClick={closeMobileMenu}
                            >
                                Events
                            </Link>
                        </li>
                        <li className={styles.nav__item}>
                            <Link
                                href="/projects"
                                className={styles.nav__link}
                                onClick={closeMobileMenu}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className={styles.nav__item}>
                            <Link
                                href="/help"
                                className={styles.nav__link}
                                onClick={closeMobileMenu}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
};

export default Navbar