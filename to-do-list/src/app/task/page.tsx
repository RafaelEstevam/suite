"use client";

import { useState } from "react";

const Task = () => {
  const [test, setTest] = useState("");
  return (
    <>
      <input value={test} onChange={(e) => setTest(e.target.value)} />
    </>
  );
};

export default Task;
