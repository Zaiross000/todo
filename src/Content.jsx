import { useState, useEffect } from "react";
import List from "./List";
// import Done from './Done'

function Content() {
  const [list, setList] = useState([]);
  const [job, setJob] = useState("");
  const [show, setShow] = useState(false);
  const inp = document.querySelector(".inp-add");

  useEffect(() => {}, [list]);

  function handleAdd() {
    setList((prev) => {
      if (job !== "") {
        inp.value = "";
        return [...prev, job];
      } else {
        inp.value = "";
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
  }
  return (
    <div>
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

      <List
        list={list}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleShow={handleShow}
        show={show}
      />
    </div>
  );
}

export default Content;
