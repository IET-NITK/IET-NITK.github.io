const fs = require('fs');

async function fetchDataAndSave() {
  try {
    const blogresponse = await fetch('https://tetragram.codered.cloud/api/v2/pages/?type=blog.BlogPage&fields=*');
    const blogdata = await blogresponse.json();
    fs.writeFileSync('./public/blog-response.json', JSON.stringify(blogdata, null, 2));

    const eventesponse = await fetch('https://tetragram.codered.cloud/api/v2/pages/?type=events.EventsPage&fields=*');
    const eventdata = await eventesponse.json();
    fs.writeFileSync('./public/event-response.json', JSON.stringify(eventdata, null, 2));

    const projectresponse = await fetch('https://tetragram.codered.cloud/api/v2/pages/?type=projects.ProjectsPage&fields=*');
    const projectdata = await projectresponse.json();
    fs.writeFileSync('./public/project-response.json', JSON.stringify(projectdata, null, 2));
    console.log('API response saved to public folder!');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchDataAndSave();
