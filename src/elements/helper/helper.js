import { Link } from "gatsby";
import React from "react";
import * as style from "./helper.module.css";

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

export const renderAuthorsName = (arr) =>
  arr.map(({ name }, index2) => (
    <>
      <Link
        className="pr-3"
        key={`x${  index2}`}
        style={{ display: "inline-block" }}
        to={`/members/${  lcrs(name)}`}
      >
        <span className={style.project_author_name}> {name} </span>
      </Link>
      {""}
    </>
  ));

export const renderProjectDescription = (element, len = 100) => {
  if (element !== null && element.length >= len) {
    return `${element.substring(0, len)  }...`;
  }
  return element;
};

export const newrenderAuthors = (arr) =>
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

export function getRandom(arr, num) {
  const result = new Array(num);
  let arrLen = arr.length;
  const taken = new Array(arrLen);
  if (num > arrLen)
    throw new RangeError("getRandom: more elements taken than available");
  while (num--) {
    const item = Math.floor(Math.random() * arrLen);
    result[num] = arr[item in taken ? taken[item] : item];
    taken[item] = --arrLen in taken ? taken[arrLen] : arrLen;
  }
  return result;
}

export const commonMdProps={
  h1: "h3",
  h2: "h3"
};