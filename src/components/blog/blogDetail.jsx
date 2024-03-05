"use client"

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm'
import './styleblog.css'
// Import Tailwind CSS classes
import 'tailwindcss/tailwind.css';
import jsonData from '../../../public/blog-response.json'

// Component definition
const BlogId = ({ params }) => {
  console.log(params.blogid)
  // State to store the fetched data
  const [blogData, setBlogData] = useState(null);

  // Effect to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API
        // const response = await fetch('/blog-response.json');
        const data = await jsonData;
        console.log("check", data);
        // Find the blog post with the matching id
        const matchingBlog = data.items.find(blog => blog?.blog_slug === params.blogid);
        console.log("matchingBlog", data.items[0]);
        // Update the state with the matching blog data
        setBlogData(matchingBlog);
        console.log("blog :", matchingBlog.blog_img_url)

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [params.blogid]); // Include params.id in the dependency array to refetch data when id changes
  console.log(blogData?.blog_tags.split(","))

  let inputDate = blogData?.published_on;
  let dateObj = new Date(inputDate);
  let day = dateObj.getDate();
  let month = dateObj.toLocaleString('default', { month: 'short' });
  let year = dateObj.getFullYear();

  let formattedDate = `${day} ${month} ${year}`;

  // Render the component
  return (
    <>

      <div className="mt-20 pb-10 min-h-screen flex items-center justify-center">
        <div className="w-full">
          {blogData ? (
            <div >
              <section className="w-full bg-[#461461] mb-10">
                <div className=" flex flex-col text-white py-6 mx-auto w-4/5 md:max-w-full lg:max-w-screen-md 2xl:max-w-screen-lg lg:pt-16">
                  <div className="flex flex-wrap gap-2">
                    {blogData?.blog_tags.split(",").map((data, index) => {
                      return (
                        <span key={index} className="px-2 py-1 bg-purple-600/40 rounded-full">{data}</span>
                      )
                    }
                    )}
                  </div>
                  <div className="text-xl text-white font-bold font-sans mt-4">
                    {blogData.title}
                  </div>
                  <div className="text-xl text-gray-300 font-thin font-sans mt-2">
                    {blogData.blog_description}
                  </div>
                  <div className="text-xl text-purple-200/90 font-medium font-sans mt-6 flex justify-between items-center">
                    <span>{blogData.blog_authors}</span><span className=" border-l-4 pl-2 border-purple-200/90">{formattedDate}</span>
                  </div>
                </div>
              </section>
              <ReactMarkdown remarkPlugins={[gfm]} className="prose mx-auto w-4/5 md:max-w-full lg:max-w-screen-md 2xl:max-w-screen-lg text-black">{blogData.blog_body}</ReactMarkdown>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

// Export the component
export default BlogId;
