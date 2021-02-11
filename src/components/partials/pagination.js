import React, { useState } from "react"

const PaginationComponent = ({ max, list, item }) => {
  const [state, setState] = useState({
    pno: 1,
  })
  console.log((state.pno - 1) * max, (state.pno - 1) * max + max)
  return (
    <>
    
      {state.pno !== 1 ? (
        <>
          <h6 className="text-primary">Page {state.pno}</h6>
          <hr />
          <br/>
        </>
      ) : null}

      {list.slice((state.pno - 1) * max, (state.pno - 1) * max + max).map(item)}
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class={`page-item ${state.pno === 1 ? "disabled" : ""}`}>
            <button
              class="page-link"
              onClick={() => {
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
                setState({ pno: state.pno - 1 })
              }}
            >
              Previous
            </button>
          </li>
          {[...Array(Math.ceil(list.length / max))].map((e, i) => (
            <li
              class={`page-item ${state.pno === i + 1 ? "active" : ""}`}
              key={i + 1}
            >
              <button
                class="page-link"
                data-toggle="tooltip"
                title={`Page ${i+1}`}
                onClick={() => {
                  document.body.scrollTop = 0
                  document.documentElement.scrollTop = 0
                  setState({ pno: i + 1 })
                }}
              >
                {i + 1}
              </button>
            </li>
          ))}
          <li
            class={`page-item ${
              state.pno === Math.ceil(list.length / max) ? "disabled" : ""
            }`}
          >
            <button
              class="page-link"
              onClick={() => {
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
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
