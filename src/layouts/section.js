import React from "react";

const SectionLayout = ({ children }) => {
    return (
        <section className="clean-block about-us">
            <div className="container">
                <div className="article-list">
                    <div className="container">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default SectionLayout; 