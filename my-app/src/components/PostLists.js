import React from 'react'
import PostContent from './PostContent';
import { v4 as uuidv4 } from "uuid"
// const {v4:uuidv4} = require('uuid');

function PostLists() {
    let posts = [
        {
            title: "HTML",
            content: "Lorem ipsum HTML",
            img: "https://picsum.photos/200/300",

        },
        {
            title: "CSS",
            content: "Lorem ipsum CSS",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/0c/bb/a3/97/predator-ride-in-the.jpg",

        },
        {
            title: "JS",
            content: "Lorem ipsum JS",
            img: "https://gbmwolverine.com/wp-content/uploads/getty-images/2018/08/1217249560.jpeg",

        },
    ]

let list = posts.map((post) => {
    return (
        <PostContent
         key={uuidv4()}
          title={post.title}
           content={post.content}
            img = {post.img}
             />
    );
});

  return   <div>{list}</div>
  
}
export default PostLists