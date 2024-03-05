import React from 'react';
import './MagnifyCard.css';
import Link from 'next/link'

const ProjectCard = ({ project }) => {
  return (
    <Link href={`/projects/${project.project_slug}`}>
      <div className="w-full xs:w-[320px] overflow-hidden flex justify-between flex-col h-full mx-auto bg-gray-50 rounded-lg relative hover:bg-gray-100 transition duration-300">
        <div className="rounded-t-4">
          <img className='w-full object-cover h-52' src={project.project_img_url} alt={project.title} />
        </div>
        <div className='p-6 pb-0 h-full'>
          <div className='h-full'>
            <h6 className="mb-2 text-md font-semibold text-fuchsia-900">{project.project_sig}</h6>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-black">{project.title}</h5>
            <p className="mb-3 font-normal text-gray-700">({project.project_description.slice(0, 150) + "... see more"})</p>
          </div>

        </div>
        <a href={project.github_url} className="inline-flex items-center px-3 py-2 mb-3 mx-3 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github mr-2" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
          </svg> Repository URL
        </a>
      </div>
    </Link>
  );
};

export default ProjectCard;
