import React from "react";
import * as style from "./section.module.scss";

const SectionLayout = ({ children }) => {
    return (
        <section className="clean-block about-us">
            <div className="container">
                <div className={style.article_list}>
                    <div className="container">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default SectionLayout; 