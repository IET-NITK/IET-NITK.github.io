// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectsPage from './Components/ProjectsPage';
import ProjectDetailsPage from './Components/ProjectDetailsPage';

const App = () => {
  const projects = [
    {
      id: 1,
      sig: 'Cipher',
      title: 'React Project',
      description: 'A sample React project.',
      details: '# React Project\n\nThis is a sample React project.',
      githubRepo: 'https://github.com/your-username/react-project',
      authors: ['Author1', 'Author2', 'Author3'],
      date: 'Jan 1, 2021'
    },
    {
      id: 2,
      sig: 'Cipher',
      title: 'Node.js Project',
      description: 'A sample Node.js project.',
      details: '# Node.js Project\n\nThis is a sample Node.js project.',
      githubRepo: 'https://github.com/your-username/nodejs-project',
      authors: ['Author4', 'Author5'],
      date: 'Jan 1, 2021'
    },
    {
      id: 3,
      title: 'Python Project',
      sig: 'Cipher',
      description: 'A sample Python project.',
      details: '# Python Project\n\nThis is a sample Python project.',
      githubRepo: 'https://github.com/your-username/python-project',
      authors: ['Author6', 'Author1'],
      date: 'Jan 1, 2021'
    },
    {
      id: 4,
      sig: 'Cipher',
      title: 'Java Project',
      description: 'A sample Java project.',
      details: '# Java Project\n\nThis is a sample Java project.',
      githubRepo: 'https://github.com/your-username/java-project',
      authors: ['Author2', 'Author3'],
      date: 'Jan 1, 2021'
    },
    {
      id: 5,
      sig: 'Cipher',
      title: 'Angular Project',
      description: 'A sample Angular project.',
      details: '# Angular Project\n\nThis is a sample Angular project.',
      githubRepo: 'https://github.com/your-username/angular-project',
      authors: ['Author4', 'Author5', 'Author6'],
      date: 'Jan 1, 2021'

    },
    {
      id: 6,
      sig: 'Cipher',
      title: 'Vue.js Project',
      description: 'A sample Vue.js project.',
      details: '# Vue.js Project\n\nThis is a sample Vue.js project.',
      githubRepo: 'https://github.com/your-username/vuejs-project',
      authors: ['Author1', 'Author2'],
      date: 'Jan 1, 2021'
    },
    
    
  ];

  return (
    <Router>
      <Routes>
        <Route path="/projects" element={<ProjectsPage projects={projects} />} />
        <Route
          path="/projects/:id"
          element={<ProjectDetailsPage projects={projects} />}


          
        />
      </Routes>
    </Router>
  );
};

export default App;
