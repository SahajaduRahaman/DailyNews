import React, { useEffect, useState } from 'react'
import { GetAdminApi, UpdateNewsApi } from '../../fetchApi/FetchAPI'
import "../../styles/Profile.css"


const Profile = () => {
  const [profile, setProfile] = useState()

  useEffect(() => {
    GetAdminApi().then((data) => {
      if (data.status === 200) {
        setProfile(data.data.reporter)
        console.log(data.data.reporter);
      }
      else {
        alert("failed")
        console.log(data.data.message)
      }
    });

  },[])

  const HandleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("file", profile.file);
    formData.append("name", profile.name);
    formData.append("email", profile.email);
    formData.append("mobile", profile.mobile);
    formData.append("about", profile.about);

    UpdateNewsApi(formData).then((data) => {
      if (data.status === 200) {
        alert("admin updated successfully.")
      }
      else {
        alert(data.data.message)
      }
    });
  }

  return (
    <>
      {profile &&
        <div className='admin-profile'>
          <form action="" onSubmit={(e) => HandleSubmit(e)}>
            <fieldset>
              <legend>User Profile</legend>

              <label htmlFor="file">Picture</label>
              {profile.file &&
                <img src={profile.file.secure_url} alt="" />
              }
              <input type="file" id='file' name='file' onChange={(e) => setProfile({...profile, [e.target.name] : e.target.files[0]})}/>

              <label htmlFor="name">Name</label>
              <input type="text" id='name' name='name' defaultValue={profile.name}/>

              <label htmlFor="email">Email</label>
              <input type="email" id='email' name='email' defaultValue={profile.email}/>

              <label htmlFor="mobile">Mobile</label>
              <input type="tel" id='mobile' name='mobile' defaultValue={profile.mobile}/>

              <label htmlFor="about">About</label>
              <input type="text" id='about' name='about' defaultValue={profile.about}/>

              <input type="submit" defaultValue="Submit"/>
            </fieldset>
          </form>
        </div>
      }
    </>
  )
}

export default Profile