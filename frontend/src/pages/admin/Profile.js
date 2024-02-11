import React, { useEffect, useState } from 'react'
import { GetAdminApi } from '../../fetchApi/FetchAPI'
import "../../styles/Profile.css"


const Profile = () => {
  const [user, setUser] = useState({})
  // const [visible, setVisible] = useState({
  //   file: "Invincible",
  //   name: "Invincible",
  //   email: "Invincible",
  //   mobile: "Invincible",
  //   about: "Invincible"
  // })
  // const [updateUser, setUpdateuser] = useState({
  //   file: null,
  //   name: "",
  //   email: "",
  //   mobile: "",
  //   about: ""
  // })

  useEffect(() => {
    GetAdminApi().then((data) => {
      if (data.status === 200) {
        setUser(data.data.reporter)
      }
      else {
        alert("failed")
        console.log(data.data.message)
      }
    });

  },[])

  return (
    <>
      {eser &&
        <div className='admin-profile'>
          {user.image &&
            <div>
              <img src={user.image} alt="" />
            </div>
          }
          <div>
            <h3>{user.name}</h3>
            <h5>{user.email}</h5>
            <h5>{user.mobile}</h5>
          </div>
          {user.about &&
            <div>
              <p>{user.about}</p>
            </div>
          }
        </div>
      }
    </>
  )
}

export default Profile