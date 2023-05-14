"use client";
import axios from "axios";
import { useRef } from "react";

function newClient() {
  const formRef = useRef();

  const saveClient = async () => {
    try {
      const newClient = Object.fromEntries(new FormData(formRef.current));
      formRef.current.reset();
      const { data } = await axios.post("http://localhost:3000/api/clients", {
        ...newClient,
        oid: Number(newClient.oid),
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form ref={formRef} onSubmit={(e) => e.preventDefault()}>
      <div>
        <input name="oid"></input>
        <label htmlFor="oid">ח.פ.</label>
      </div>
      <div>
        <input name="name"></input>
        <label htmlFor="name">שם</label>
      </div>
      <button onClick={() => saveClient()}>שמירה</button>
    </form>
  );
}
export default newClient;
