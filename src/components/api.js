import jsonData from '../../public/project-response.json'

export const fetchProjects = async () => {
  try {
    // const response = await fetch('/project-response.json');
    // console.log(response);

    // if (!response.ok) {
    //   throw new Error(`API request failed with status: ${response.status}`);
    // }

    const data = jsonData;
    return data.items || [];
  } catch (error) {
    console.error('Error fetching data from API:', error);
    return [];
  }
};