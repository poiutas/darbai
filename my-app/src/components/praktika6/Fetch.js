import React, { useState, useEffect } from "react";
import PostsList from "./PostsList";
import CommentsList from "./CommentsList";
import UsersList from "./UsersList";
function Fetch() {
  const [type, setType] = useState("posts");
  const [data, setData] = useState([]);
  const getData = async (type) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${type}`);
    const data = await response.json();
    setData(data);
    console.log(data);
  };
  useEffect(() => {
    getData(type);
  }, [type]);


  return (
      <>
        <div>
            <button onClick={() => setType("posts")}>posts</button>
            <button onClick={() => setType("users")}>users</button>
            <button onClick={() => setType("comments")}>comments</button>
        </div>
        <div className="container-fluid">
        {type === "posts" ? <PostsList data={data} /> : type === "comments" ? <CommentsList  data={data}/> : <UsersList  data={data}/>}

        

        {/* {type === "posts" && <PostsList data={data} />}
        {type === "users" && <UsersList data={data} />}
        {type === "comments" && <CommentsList data={data} />} */}

        </div>
      </>
  );
}
export default Fetch;