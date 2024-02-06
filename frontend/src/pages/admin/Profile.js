import React, { useEffect, useState } from 'react'
import { GetAdminApi } from '../../fetchApi/FetchAPI'


const Profile = () => {
  const [user, setUser] = useState({})

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
      {user ?
        <div className="profile-container">
          <h2>{user.name}</h2>
          <h6>{user.email}</h6>
          <h6>{user.mobile}</h6>
        </div>
        :
        <div>Loading...</div>
      }
    </>
  )
}

export default Profile