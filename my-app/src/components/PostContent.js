import React from 'react'

function PostContent(props) {
  // let {title, content, img} = props;
  return (
    <div>
      <h3>{props.title}</h3>
      <img src={props.img} alt={props.title} />
      <p>{props.content}</p>
    </div>
  )
}

export default PostContent
