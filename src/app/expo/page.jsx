import React from 'react';
import styles from "./expo.module.css"

const Page = () => {
    return (
        <div className='text-center mt-24 h-[70vh] font-semibold'>
            <section className={`w-full px-8 max-h-[250px] flex  items-center justify-between 2xl:justify-around mt-20 bg-[#461461] relative ${styles.font} overflow-hidden`}>
                <div className="py-12 justify-start text-left text-white">
                    Project<br /> Expo'24
                </div>
                <img src="/CommUnity.png" className='object-cover' />
            </section>
            project coming soon..
        </div>
    );
};

export default Page;