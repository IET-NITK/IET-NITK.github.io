import EventId from "@/components/event/eventDetail";
import jsonData from '../../../../public/event-response.json'

export default function EventDetail({ params }){
  return(
    <EventId params={params}/>
  )
}

export async function generateStaticParams() {
  const posts = jsonData
 
  return posts.items.map((post) => ({
    eventid: post.event_slug,
  }))
}