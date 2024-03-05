// Page.js
"use client";
import { useEffect, useState } from 'react';
import ProjectsPage from "@/components/ProjectsPage";
import { fetchProjects } from '@/components/api';

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const projectsData = await fetchProjects();
      setProjects(projectsData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <ProjectsPage projects={projects} />
    </div>
  );
}
