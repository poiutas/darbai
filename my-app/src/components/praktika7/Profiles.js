import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";

function Profiles() {
    let { login, avatar_url } = useParams();
    const [users, setUsers] = useState([]);
      useEffect( async () =>{
        const res = await   axios
        .get(`https://api.github.com/users/${users.id}`)
        .then(   (res) => {
            setUsers(res.data);
            console.log(res);
            console.log(users)
            
        })
        .catch((err) => {
            console.log(err)
        });
    },[]);
    console.log(users)

  return (
    <div className='container'>
        <h1>Profile:</h1>
        <div className="row bg-light p-4 w-100 rounded">
            
            <div className="col-5">
                <img src={users.avatar_url} alt="avatar" className='rounded w-100' />
            </div>
            <div className="col-12">
                <div className="d-flex">
                    <h4>Labas, aš:</h4> <p className=' ps-3 fs-5'>{login}.</p>
                </div>
                <p className='w-150 text-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellat ratione delectus. Quidem repellat fugiat, omnis nobis voluptas, fugit hic delectus ipsum blanditiis maxime perferendis doloremque rem similique ducimus ut.</p>
            </div>
        </div>
    </div>
  )
}

export default Profiles;