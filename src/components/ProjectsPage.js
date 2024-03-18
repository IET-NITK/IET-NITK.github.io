// ProjectsPage.js
import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import ReactPaginate from 'react-paginate';
import './ProjectsPage.css'; // Import your CSS for styling
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation';

const ProjectsPage = ({ projects, tag, img, sig }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const bigScreen = useMediaQuery({ minWidth: "1536px" });
  const [selectedOption, setSelectedOption] = useState("2023");
  const projectsPerPage = bigScreen ? 8 : 6;
  const pathname = usePathname()
  const router = useRouter()

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  if (tag) {
    projects = projects.filter(project => project.project_tags.toLowerCase().includes(tag.toLowerCase()))
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const options = [
    { name: "2023", url: `${pathname}?year=2023` },
    { name: "2022", url: `${pathname}?year=2022` },
  ];

  const indexOfLastProject = (currentPage + 1) * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.filter(project => project.project_sig.toLowerCase() == sig.toLowerCase()).filter(project => project.project_year == selectedOption).slice(indexOfFirstProject, indexOfLastProject);
  const pageCount = Math.ceil(projects.length / projectsPerPage);

  return (
    <main className='min-h-[90vh] relative'>
      <section className={`w-full ${img == 'cipher' ? 'bg-cipher-background' : (img == 'venture' ? 'bg-venture-background' : (img == 'rovisp' ? 'bg-rovisp-background' : 'bg-torsion-background'))} bg-cover relative`}>
        <div className="z-20 w-screen bg-black/60 relative text-center font-semibold text-4xl py-32 flex justify-center text-white mx-auto">
          {sig} Projects
        </div>
      </section>
      {currentProjects.length > 0 &&
        <div className="flex gap-3 flex-col items-center mt-3">
          <div display="flex">
            <ul className="flex p-0 m-0 w-full bg-[#ebe5ec] border-[1px] border-[#71287e] rounded-lg list-none shadow-md">
              {options.map((data, index) => {
                console.log(selectedOption == data.name);
                return (
                  <li className="p-1 flex-1" key={index}>
                    {selectedOption == data.name ? (
                      <button
                        className=" text-[rgba(255,242,255,1)] m-0 py-2 px-4 border-0 outline-0 w-full rounded-sm relative will-change-auto transition-colors duration-300 ease-in"
                        onClick={() => {
                          setSelectedOption(data.name);
                          router.push(data.url)
                        }}
                      >
                        <div className="absolute inset-0 bg-purple-800 rounded-md"></div>
                        <p className="whitespace-nowrap text-base m-0 font-semibold relative z-10">
                          {data.name}
                        </p>
                      </button>
                    ) : (
                      <button
                        className=" text-purple-800 m-0 py-2 px-4 border-0 outline-0 w-full rounded-sm relative will-change-auto transition-colors duration-300 ease-in"
                        onClick={() => {
                          setSelectedOption(data.name);
                          router.push(data.url)
                        }}
                      >
                        <div className="absolute inset-0 rounded-md"></div>
                        <p className="whitespace-nowrap text-base m-0 font-semibold relative z-10">
                          {data.name}
                        </p>
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      }
      <div className='py-6 p-5 md:p-8 grid justify-items-center gap-5 grid-cols-1 md:grid-cols-2 xl:px-20 lg:grid-cols-3 2xl:grid-cols-4 auto-rows-max relative' >
        {currentProjects.length === 0 && <div className="absolute text-center mt-20 text-2xl font-semibold">No projects found</div>}
        {currentProjects.map((project, index) => {
          return (
            <>
              <div className="row h-full" key={index}>
                <div className="col-md-12 h-full">
                  <ProjectCard project={project} />
                </div>
              </div>
            </>
          )
        })}
      </div>
      {currentProjects.length > 0 &&
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
      }
    </main>
  );
};

export default ProjectsPage;
