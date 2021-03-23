import React, { useEffect, useState } from "react"
import Dropdown from "react-bootstrap/Dropdown"

function scrollTop() {
  if (document.body.scrollTop !== 0) {
    document.body.scrollTop = 0
  } else {
    document.documentElement.scrollTop = 0
  }
}
const PaginationComponent = ({
  max,
  list,
  item,
  noneMessage,
  filterBy,
  filterLabel,
}) => {
  const [state, setState] = useState({
    pno: 1,
    list_state: list,
    filterType: null,
    filterCategories: [...new Set(list.map(e => e[filterBy]))],
  })

  if (state.list_state && state.list_state.length === 0) {
    return <div className="text-center">{noneMessage}</div>
  }
  
  return (
    <>
      {filterBy && state.list_state ? (
        <Dropdown>
          <Dropdown.Toggle
            variant="secondary"
            id={"dropdown-" + filterBy}
            size="sm"
          >
            {state.filterType ? state.filterType : filterLabel}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {state.filterCategories &&
              state.filterCategories.map((ex, i) => (
                <Dropdown.Item
                  name={ex}
                  key={i}
                  onClick={event => 
                    setState({
                      ...state,
                      list_state: list.filter(e => {
                        return e[filterBy] === event.target.name
                      }),
                      filterType: event.target.name,
                    })
                  }
                >
                  {ex}
                </Dropdown.Item>
              ))}
            {state.filterType ? (
              <Dropdown.Item
                onClick={event => {
                  setState({
                    ...state,
                    list_state: list,
                    filterType: null,
                  })
                }}
              >
                Clear Filters
              </Dropdown.Item>
            ) : null}
          </Dropdown.Menu>
          <hr/>
        </Dropdown>
      ) : null}

      {state.pno !== 1 ? (
        <>
          <h6 className="text-primary">Page {state.pno}</h6>
          <hr />
          <br />
        </>
      ) : null}

      {state.list_state && state.list_state
        .slice((state.pno - 1) * max, (state.pno - 1) * max + max)
        .map(item)}
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
          {state.list_state && [...Array(Math.ceil(state.list_state.length / max))].map((e, i) => (
            <li
              className={`page-item ${state.pno === i + 1 ? "active" : ""}`}
              key={"a" + i}
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
              state.list_state && state.pno === Math.ceil(state.list_state.length / max) ? "disabled" : ""
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
