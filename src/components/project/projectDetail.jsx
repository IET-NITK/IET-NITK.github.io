// Import necessary modules
"use client"
import { useEffect, useState } from "react";
import gfm from 'remark-gfm'
import ReactMarkdown from "react-markdown";
import './styleblog.css'
// Import Tailwind CSS classes
import 'tailwindcss/tailwind.css';
import jsonData from '../../../public/project-response.json'

// Component definition
const ProjectId = ({ params }) => {
  console.log(params.blogid)
  // State to store the fetched data
  const [projectData, setProjectData] = useState(null);

  // Effect to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API
        // const response = await fetch('/project-response.json');
        const data = await jsonData;
        console.log("check", data);
        // Find the blog post with the matching id
        const matchingBlog = data.items.find(project => project?.project_slug === params.projectid);
        console.log("matchingBlog", data.items[0]);
        // Update the state with the matching blog data
        setProjectData(matchingBlog);
        console.log("blog :", matchingBlog.project_img_url)

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [params.blogid]); // Include params.id in the dependency array to refetch data when id changes
  console.log(projectData?.project_tags.split(","))

  return (
    <>

      <div className="mt-20 pb-10 min-h-screen flex items-center justify-center">
        <div className="w-full">
          {projectData ? (
            <div >
              <section className="w-full bg-[#461461] mb-10">
                <div className=" flex flex-col text-white py-6 mx-auto w-4/5 md:max-w-full lg:max-w-screen-md 2xl:max-w-screen-lg lg:pt-16">
                  <div className="flex flex-wrap gap-2">
                    {projectData?.project_tags.split(",").map((data, index) => {
                      return (
                        <span key={index} className="px-2 py-1 bg-purple-600/40 rounded-full">{data}</span>
                      )
                    }
                    )}
                  </div>
                  <div className="text-xl text-white font-bold font-sans mt-4">
                    {projectData.title}
                  </div>
                  <div className="text-xl text-gray-300 font-thin font-sans mt-2">
                    {projectData.project_description}
                  </div>
                  <div className="text-xl text-purple-200/90 font-medium font-sans mt-6 flex justify-between items-center">
                    <span>{projectData.project_authors}</span>
                  </div>
                </div>
              </section>
              <ReactMarkdown remarkPlugins={[gfm]} className="prose mx-auto w-4/5 md:max-w-full lg:max-w-screen-md 2xl:max-w-screen-lg text-black">{projectData.project_body}</ReactMarkdown>
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
export default ProjectId;
