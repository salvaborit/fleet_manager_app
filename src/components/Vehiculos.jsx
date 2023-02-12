import React, { useState, useEffect } from "react";
import axios from "axios";
import ElementoLista from "./ElementoLista";

function Vehiculos() {
  const [posts, setPosts] = useState([]);

  async function getData() {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(resp.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ul>
        {posts.map((post) => {
          return <ElementoLista title={post.title} body={post.body} />;
        })}
      </ul>
    </>
  );
}

export default Vehiculos;
