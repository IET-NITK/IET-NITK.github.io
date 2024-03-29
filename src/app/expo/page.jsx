import React from 'react';
import styles from "./expo.module.css"
import ProjectList from '@/components/project/projectList';

const Page = () => {
    return (
        <div className='text-center mt-24 min-h-[70vh] font-semibold'>
            <section className={`w-full mb-8 px-8 max-h-[250px] flex  items-center justify-between 2xl:justify-around mt-20 bg-[#461461] relative ${styles.font} overflow-hidden`}>
                <div className="py-12 justify-start text-left text-white">
                    Project<br /> Expo'24
                </div>
                <img src="/CommUnity.png" className='object-cover' />
            </section>
            <ProjectList img="" sig="" tag="expo24"/>
        </div>
    );
};

export default Page;