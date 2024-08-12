import ProjectId from "@/components/project/projectDetail";
import jsonData from '../../../../public/project-response.json'

export default function ProjectDetail({ params }){
  return(
    <ProjectId params={params}/>
  )
}

export async function generateStaticParams() {
  const posts = jsonData
  
  return posts.items.map((post) => ({
    projectid: post.project_slug,
  }))
}