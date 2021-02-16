import React, { useState } from "react"

function scrollTop() {
  if (document.body.scrollTop !== 0) {
    document.body.scrollTop = 0
  } else {
    document.documentElement.scrollTop = 0
  }
}
const PaginationComponent = ({ max, list, item, noneMessage }) => {
  const [state, setState] = useState({
    pno: 1,
  })
  if (list.length === 0) {
    return <div className="text-center">{noneMessage}</div>
  }

  return (
    <>
      {state.pno !== 1 ? (
        <>
          <h6 className="text-primary">Page {state.pno}</h6>
          <hr />
          <br />
        </>
      ) : null}

      {list.slice((state.pno - 1) * max, (state.pno - 1) * max + max).map(item)}
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${state.pno === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => {
                scrollTop()
                setState({ pno: state.pno - 1 })
              }}
            >
              Previous
            </button>
          </li>
          {[...Array(Math.ceil(list.length / max))].map((e, i) => (
            <li
              className={`page-item ${state.pno === i + 1 ? "active" : ""}`}
              key={i + 1}
            >
              <button
                className="page-link"
                data-toggle="tooltip"
                title={`Page ${i + 1}`}
                onClick={() => {
                  scrollTop()
                  setState({ pno: i + 1 })
                }}
              >
                {i + 1}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${
              state.pno === Math.ceil(list.length / max) ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => {
                scrollTop()
                setState({ pno: state.pno + 1 })
              }}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default PaginationComponent
