import BlogId from "@/components/blog/blogDetail";
import jsonData from '../../../../public/blog-response.json'

export default function BlogDetail({ params }){
  return(
    <BlogId params={params}/>
  )
}

export async function generateStaticParams() {
  const posts = jsonData
 
  return posts.items.map((post) => ({
    blogid: post.blog_slug,
  }))
}
