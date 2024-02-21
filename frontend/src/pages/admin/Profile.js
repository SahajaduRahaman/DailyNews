import React, { useEffect, useState } from 'react'
import { GetAdminApi } from '../../fetchApi/FetchAPI'
import "../../styles/Profile.css"


const Profile = () => {
  const [user, setUser] = useState({})
  // const [profile, setProfile] = useState()
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
        console.log(data.data.reporter);
      }
      else {
        alert("failed")
        console.log(data.data.message)
      }
    });

  },[])

  // useEffect(() => {
  //   setProfile({...user})
  // },[user])

  // const HandleSubmit = (e) => {

  // }

  return (
    <>
      {user &&
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

      {/* {profile &&
        <div className='admin-profile'>
          <form action="" onSubmit={(e) => HandleSubmit(e)}>
            <fieldset>
              <legend>User Profile</legend>

              <label htmlFor="file">Picture</label>
              <input type="file" id='file' name='file' value={profile.file}/>

              <label htmlFor="name">Name</label>
              <input type="text" id='name' name='name' value={profile.name}/>

              <label htmlFor="email">Email</label>
              <input type="email" id='email' name='email' value={profile.email}/>

              <label htmlFor="mobile">Mobile</label>
              <input type="tel" id='mobile' name='mobile' value={profile.mobile}/>

              <label htmlFor="about">About</label>
              <input type="text" id='about' name='about' value={profile.about}/>

              <input type="submit" value="Submit"/>
            </fieldset>
          </form>
        </div>
      } */}
    </>
  )
}

export default Profile