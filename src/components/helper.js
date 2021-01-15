import { Link } from "gatsby"
import React from "react"

export const redirectController = (control) => {
  if(!control){
    
  }
}
export const generateSIGHash = (sig_images)=> {
  let img_hash = {}
  sig_images && sig_images.forEach(element => {
    img_hash[element.name] = element.publicURL
  })
  return img_hash
}

export const RenderAuthors = (arr, cls) => (
  arr.map((name, index2) => (
    <>
      {" "}
      <Link
        key={"x" + index2}
        to={"/member/" + name.toLowerCase().split(" ").join("")}
      >
        {name}
      </Link>
      {index2 + 2 === arr.length
        ? " and"
        : index2 + 1 !== arr.length
        ? ","
        : ""}
    </>
  ))
);
