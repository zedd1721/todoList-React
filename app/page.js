"use client";
import React, { useState } from "react";

function page() {
  let [title, settitle] = useState("");
  let [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(mainTask.length);
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
  };

  function deletetask(i){
    let copy = [...mainTask];
    copy.splice(i,1);
    setmainTask(copy);

  }

  let renderTask = <p>No Task available</p>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map(function (t, i) {
      return (
        <li key={i} className="flex justify-around">
          <h1 className="font-bold text-2xl">{t.title}</h1>
          <p>{t.desc}</p>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md"
          onClick={()=>{
            deletetask(i)
          }}>
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-yellow-500 font-extrabold text-6xl p-5 text-center">
        Zain's Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-600 border-4 px-4  py-2 m-8"
          placeholder="Enter your Task here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-2xl border-zinc-600 border-4 px-4  py-2 m-8"
          placeholder="Enter your Task's Description here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-zinc-500 text-white px-4 py-2 rounded-lg text-2xl font-bold">
          Add Task
        </button>
      </form>
      <div className="bg-slate-300 p-9">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
}

export default page;
