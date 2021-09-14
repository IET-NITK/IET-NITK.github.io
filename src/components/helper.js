import { Link } from "gatsby";
import React from "react";

export const lcrs = (link) => {
  return link.toLowerCase().split(" ").join("");
};


export const renderAuthors = (arr, cls) =>
  arr.map(({ name }, index2) => (
    <>
      &nbsp;
      <Link
      className={cls}
        key={`x${  index2}`}
        to={`/members/${  lcrs(name)}`}
      >
        {name}
      </Link>
      {index2 + 2 === arr.length
        ? " and"
        : index2 + 1 !== arr.length
        ? ","
        : ""}
    </>
  ));

export const renderAuthorsName = (arr, cls) =>
  arr.map(({ name }, index2) => (
    <>
      <Link
        className="pr-3"
        key={`x${  index2}`}
        style={{ display: "inline-block" }}
        to={`/members/${  lcrs(name)}`}
      >
        <span className="project-auther-name"> {name} </span>
      </Link>
      {""}
    </>
  ));

export const RenderProjectDescription = (element, len = 100) => {
  if (element != null && element.length >= len) {
    return `${element.substring(0, len)  }...`;
  }
  return element;
};

export const newrenderAuthors = (arr, cls) =>
  arr.map(({ name }, index2) => (
    <>
      &nbsp;
      <Link
        key={`x${  index2}`}
        to={`/members/${  lcrs(name)}`}
      >
        {name}
      </Link>
      {index2 + 2 === arr.length
        ? " and"
        : index2 + 1 !== arr.length
        ? ","
        : ""}
    </>
  ));

export const niceFormat = (name) =>
  name.toLowerCase().replace(/^\w|\s\w/g, (letter) => {
    return letter.toUpperCase();
  });

export function getRandom(arr, n) {
  let result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    const x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}
