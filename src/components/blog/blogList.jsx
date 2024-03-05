"use client"
import React, { useEffect, useState } from 'react';
import BlogCard from './Blogcard';
import jsonData from '../../../public/blog-response.json';
import ReactPaginate from 'react-paginate';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const bigScreen = useMediaQuery({ minWidth: "1536px" });
  const blogsPerPage = bigScreen ? 8 : 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await jsonData;
        setBlogs(data.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const indexOfLastProject = (currentPage + 1) * blogsPerPage;
  const indexOfFirstProject = indexOfLastProject - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstProject, indexOfLastProject);
  const pageCount = Math.ceil(blogs.length / blogsPerPage);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);


  return (
    <>
      <div className='mt-20 min-h-[90vh] relative'>
        <section className="w-full bg-[#461461]">
          <div className=" text-4xl py-16 flex justify-center text-white mx-auto w-4/5 md:max-w-full lg:max-w-screen-md 2xl:max-w-screen-lg">
            Blogs
          </div>
        </section>
        <section className='py-6 p-5 md:p-8 grid justify-items-center gap-5 grid-cols-1 md:grid-cols-2 xl:px-20 lg:grid-cols-3 2xl:grid-cols-4 auto-rows-max'>
          {currentBlogs.map((blog, index) => {
            return (
              <>
                <BlogCard
                  key={index}
                  title={blog.blog_title}
                  authors={blog.blog_authors}
                  img={blog.blog_img_url}
                  description={blog.blog_description}
                  slug={blog.blog_slug}
                  date={blog.published_on}
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

export default BlogList;
