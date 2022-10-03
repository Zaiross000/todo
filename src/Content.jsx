import Done from "./Done";
import { useState, useEffect } from "react";

function Content() {
  const [list, setList] = useState([]);
  const [job, setJob] = useState("");
  const [show, setShow] = useState(false);
  const [i, setIndex] = useState();
  const [count, setCount] = useState(0);
  const [isDone, setDone] = useState(false);
  const inp = document.querySelector('.inp-add');

  useEffect(() => {}, [count]);

  function handleAdd() {
    setList((prev) => {
      if (job !== "") {
        inp.value = ''
        return [...prev, job];
      } else {
        inp.value = ''
        return [prev];
      }
    });
  }

  function handleDelete(index) {
    const newList = list;
    newList.splice(index, 1);
    setList([...newList]);
    console.log(newList);
  }

  function handleEdit(index, e) {
    const newList = list;
    newList[index] = e.target.value;
    setList([...newList]);
  }

  function handleShow(index) {
    setShow(!show);
    setIndex(index);
  }
  return (
    <div>
      <Done count={count} />
      {list.length === 0 && <p className="is-done">Không có công việc</p>}
      <div className="wrapper">
        <input
          type="text"
          name=""
          id=""
          className="inp-add"
          onChange={(e) => setJob(e.target.value)}
        />
        <button onClick={handleAdd} className="btn btn-submit">
          Submit
        </button>
      </div>

      <ul>
        {list.map((job, index) => {
          return (
            <div
              key={index}
              className={isDone ? "list-jobs done" : "list-jobs"}
            >
              <li>{job}</li>
              <button
                className="btn btn-del"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
              <div>
                {show && i === index && (
                  <input
                    type="text"
                    name=""
                    id=""
                    onInput={(e) => handleEdit(index, e)}
                    className="inp-edit"
                  />
                )}
                <button
                  className="btn btn-edit"
                  onClick={() => handleShow(index)}
                >
                  Edit
                </button>
              </div>
              <button
                className="btn"
                onClick={() => {
                  setDone(!isDone);
                  setCount(count => {
                    if(isDone){
                      return count + 1
                    }
                    else{
                      return count
                    }
                  })
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

export default Content;
