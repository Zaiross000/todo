import { useState, useEffect } from "react";
import Done from './Done'

function List(props) {
  const [isDone, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect( () => {}, [count])

  return (
      <div>
        <Done count={count} />

      <ul>
        {props.list.map((job, index) => {
          return (
            <div
              key={index}
              className={isDone ? "list-jobs done" : "list-jobs"}
            >
              <li>{job}</li>
              <button
                className="btn btn-del"
                onClick={() => props.handleDelete(index)}
              >
                Delete
              </button>
              <div>
                {props.show && (
                  <input
                    type="text"
                    name=""
                    id=""
                    onInput={(e) => props.handleEdit(index, e)}
                    className="inp-edit"
                  />
                )}
                <button
                  className="btn btn-edit"
                  onClick={() => props.handleShow(index)}
                >
                  Edit
                </button>
              </div>
              <button
                className='btn'
                onClick={() => {
                  setDone(!isDone);
                  setCount((count) => {
                    if (isDone) {
                      return count ;
                    } else {
                      return count + 1;
                    }
                  });
                }}
              >
                Done
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
