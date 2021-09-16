import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

function scrollTop() {
  if (document.body.scrollTop !== 0) {
    document.body.scrollTop = 0;
  } else {
    document.documentElement.scrollTop = 0;
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
    listState: list,
    filterType: null,
    // eslint-ignore-next-line
    filterCategories: [...new Set(list.map((element) => element[filterBy]))],
  });

  if (state.listState && state.listState.length === 0) {
    return <div className="text-center">{noneMessage}</div>;
  }

  return (
    <>
      {filterBy && state.listState ? (
        <Dropdown>
          <Dropdown.Toggle
            className="mr-4"
            id={`dropdown-${  filterBy}`}
            size="sm"
            variant="outline-primary"
          >
            {state.filterType ? state.filterType : filterLabel}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {state.filterCategories &&
              state.filterCategories.map(({ex}, index) => (
                <Dropdown.Item
                  key={index}
                  name={ex}
                  onClick={(event) =>
                    setState({
                      ...state,
                      listState: list.filter((element) => {
                        return element[filterBy] === event.target.name;
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
                onClick={() => {
                  setState({
                    ...state,
                    listState: list,
                    filterType: null,
                  });
                }}
              >
                Clear Filters
              </Dropdown.Item>
            ) : null}
          </Dropdown.Menu>
          {state.listState.length} Items
          <hr />
        </Dropdown>
      ) : null}

      {state.pno !== 1 ? (
        <>
          <h6 className="text-primary">Page {state.pno}</h6>
          <hr />
          <br />
        </>
      ) : null}

      {state.listState &&
        state.listState
          .slice((state.pno - 1) * max, (state.pno - 1) * max + max)
          .map(item)}
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${state.pno === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => {
                scrollTop();
                setState({ ...state, pno: state.pno - 1 });
              }}
            >
              Previous
            </button>
          </li>
          {state.listState &&
            [...Array(Math.ceil(state.listState.length / max))].map((element, index) => (
              <li
                className={`page-item ${state.pno === index + 1 ? "active" : ""}`}
                key={index}
              >
                <button
                  className="page-link"
                  data-toggle="tooltip"
                  onClick={() => {
                    scrollTop();
                    setState({ ...state, pno: index + 1 });
                  }}
                  title={`Page ${index + 1}`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          <li
            className={`page-item ${
              state.listState &&
              state.pno === Math.ceil(state.listState.length / max)
                ? "disabled"
                : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => {
                scrollTop();
                setState({ ...state, pno: state.pno + 1 });
              }}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default PaginationComponent;
