// src/components/BlogCard.js
import Link from 'next/link';
import Image from 'next/image';
import styles from './Eventcard.module.css'; // Use CSS modules for styles
import { CiCalendar } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import ReactMarkdown from "react-markdown";

const BlogCard = ({ title, img, description, slug, date, location }) => {
  // const truncatedDescription = description.length > 100 ? `${description.slice(0, 100)}...` : description;

  let inputDate = date;
  let dateObj = new Date(inputDate);
  let day = dateObj.getDate();
  let month = dateObj.toLocaleString('default', { month: 'short' });
  let year = dateObj.getFullYear();

  let formattedDate = `${day} ${month} ${year}`;

  return (
    <Link href={`/events/${slug}`} >
      <div className={styles.blogCard}>
        <div className={styles.blogImage}>
          <img className='w-full object-cover h-52' src={img} alt={title} />
        </div>
        <div className={styles.blogDetails}>
          <h2 className={`font-semibold ${styles.head}`}>{title}</h2>
          <p className='font-medium text-sm mb-1 flex gap-2 items-center'><CiCalendar /> {" "} <span>{formattedDate}</span></p>
          <p className='font-medium text-sm mb-1 flex gap-2 items-center'><IoLocationOutline /> {" "} <span>{location}</span></p>
          <p className={styles.para}>{description.slice(0, 150) + "... see more"}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
