// Page.js
"use client";
import { useEffect, useState } from 'react';
import ProjectsPage from "@/components/ProjectsPage";
import { fetchProjects } from '@/components/api';
import { useSearchParams } from 'next/navigation'

export default function ProjectList({ img, sig, tag }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const projectsData = await fetchProjects();
      setProjects(projectsData);
    };

    fetchData();
  }, []);

  const searchParams = useSearchParams()

  // const tag = searchParams.get('tag')

  return (
    <div>
      <ProjectsPage projects={projects} tag={tag} img={img} sig={sig} />
    </div>
  );
}
