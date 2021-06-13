import { Link } from "gatsby"
import React from "react"

export const redirectController = control => {
  if (!control) {
  }
}
export const generateSIGHash = sig_images => {
  let img_hash = {}
  sig_images &&
    sig_images.forEach(element => {
      img_hash[element.name] = element.childImageSharp.fixed.srcWebp
    })
  return img_hash
}

export const RenderAuthors = (arr, cls) =>
  arr.map(({ name }, index2) => (
    <>
      &nbsp;
      <Link
      className={cls}
        key={"x" + index2}
        to={"/members/" + name.toLowerCase().split(" ").join("")}
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

export const RenderAuthorsName = (arr, cls) =>
  arr.map(({ name }, index2) => (
    <>
      <Link
        className="pr-3"
        key={"x" + index2}
        to={"/members/" + name.toLowerCase().split(" ").join("")}
        style={{ display: "inline-block" }}
      >
        <span class="project-auther-name">#{name}</span>
      </Link>
      {""}
    </>
  ))

export const RenderProjectDescription = (element, len = 100) => {
  if (element != null && element.length >= len) {
    return element.substring(0, len) + "..."
  }
  return element
}

export const newRenderAuthors = (arr, cls) =>
  arr.map(({ name }, index2) => (
    <>
      &nbsp;
      <Link
        key={"x" + index2}
        to={"/members/" + name.toLowerCase().split(" ").join("")}
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

export const niceFormat = name =>
  name.toLowerCase().replace(/^\w|\s\w/g, function (letter) {
    return letter.toUpperCase()
  })

export function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len)
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available")
  while (n--) {
    var x = Math.floor(Math.random() * len)
    result[n] = arr[x in taken ? taken[x] : x]
    taken[x] = --len in taken ? taken[len] : len
  }
  return result
}
