// Import necessary modules
"use client"
import { useEffect, useState } from "react";
import gfm from 'remark-gfm'
import ReactMarkdown from "react-markdown";
import './styleblog.css'
// Import Tailwind CSS classes
import 'tailwindcss/tailwind.css';
import jsonData from '../../../public/event-response.json'

// Component definition
const EventId = ({ params }) => {
  console.log(params.blogid)
  // State to store the fetched data
  const [eventData, setEventData] = useState(null);

  // Effect to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API
        // const response = await fetch('/event-response.json');
        const data = await jsonData;
        // Find the blog post with the matching id
        const matchingBlog = data.items.find(blog => blog?.event_slug === params.eventid);
        // Update the state with the matching blog data
        setEventData(matchingBlog);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [params.blogid]); // Include params.id in the dependency array to refetch data when id changes
  console.log(eventData?.event_tags.split(","))

  let inputDate = eventData?.event_date;
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
          {eventData ? (
            <div >
              <section className="w-full bg-[#461461] mb-10">
                <div className=" flex flex-col text-white py-6 mx-auto w-4/5 md:max-w-full lg:max-w-screen-md 2xl:max-w-screen-lg lg:pt-10">
                  <div className="flex flex-wrap gap-2">
                    {eventData?.event_tags.split(",").map((data, index) => {
                      return (
                        <span key={index} className="px-2 py-1 bg-purple-600/40 rounded-full">{data}</span>
                      )
                    }
                    )}
                  </div>
                  <div className="text-xl text-white font-bold font-sans mt-4">
                    {eventData.title}
                  </div>
                  <div className="rounded-lg overflow-hidden w-[100%] mx-auto mt-6">
                    <img src={eventData.event_img_url}/>
                  </div>
                  <div className="text-xl text-purple-200/90 font-medium font-sans mt-6 flex justify-between items-center">
                    <span>{eventData.event_organizer}</span><span className=" border-l-4 pl-2 border-purple-200/90">{formattedDate}</span>
                  </div>
                </div>
              </section>
              <ReactMarkdown remarkPlugins={[gfm]} className="prose mx-auto w-4/5 md:max-w-full lg:max-w-screen-md 2xl:max-w-screen-lg text-black">{eventData.event_body}</ReactMarkdown>
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
export default EventId;
