"use client"
import React, { useEffect, useState } from 'react';
import BlogCard from './eventCard';
import jsonData from '../../../public/event-response.json'
import ReactPaginate from 'react-paginate';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const bigScreen = useMediaQuery({ minWidth: "1536px" });
  const eventsPerPage = bigScreen ? 8 : 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('/event-response.json');
        const data = await jsonData;
        setEvents(data.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastProject = (currentPage + 1) * eventsPerPage;
  const indexOfFirstProject = indexOfLastProject - eventsPerPage;
  const currentEvevnts = events.slice(indexOfFirstProject, indexOfLastProject);
  const pageCount = Math.ceil(events.length / eventsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <>
      <div className='mt-20 min-h-[90vh] relative'>
        <section className="w-full bg-[#461461]">
          <div className=" text-4xl py-16 flex justify-center text-white mx-auto w-4/5 md:max-w-full lg:max-w-screen-md 2xl:max-w-screen-lg">
            Events
          </div>
        </section>
        <section className='py-6 p-5 md:p-8 grid justify-items-center gap-5 grid-cols-1 md:grid-cols-2 xl:px-20 lg:grid-cols-3 2xl:grid-cols-4 auto-rows-max'>
          {currentEvevnts.map((blog, index) => {
            return (
              <>
                <BlogCard
                  key={index}
                  title={blog.title}
                  organizer={blog.event_organizer}
                  img={blog.event_img_url}
                  description="A fun-filled event to bring out the gamer in you and compete to be the best gamer out there. Register in teams of 5 or individually and showcase your gaming talent! Individual registrants will be teamed up with other individual registrants to form teams of 5."
                  slug={blog.event_slug}
                  date={blog.event_date}
                  location={blog.event_location}
                />
              </>
            )
          })}
        </section>
        <section className='flex justify-center my-5'>
          <ReactPaginate
            breakLabel="..."
            nextLabel=<IoIosArrowForward />
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel=<IoIosArrowBack />
            pageClassName="page-item font-medium"
            pageLinkClassName="page-link"
            previousClassName="page-item font-semibold"
            previousLinkClassName="text-gray-800 font-semibold mr-4 block h-fit"
            nextClassName="page-item font-semibold"
            nextLinkClassName="text-gray-800 font-semibold ml-4 block h-fit"
            breakClassName="page-item font-semibold"
            breakLinkClassName="page-link"
            containerClassName="bg-gray-100 p-4 px-6 flex gap-4 rounded-full shadow-md justify-center items-center"
            activeClassName="bg-[#cfbae6] p-1 px-3 rounded-full text-gray-100 font-semibold"
            renderOnZeroPageCount={null}
          />
        </section>
      </div>
    </>
  );
};

export default EventList;
