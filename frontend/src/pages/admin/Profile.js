import React, { useEffect, useState } from 'react'
import { GetAdminApi, UpdateAdminApi } from '../../fetchApi/FetchAPI'
import "../../styles/Profile.css"


const Profile = () => {
  const [profile, setProfile] = useState({})

  useEffect(() => {
    GetAdminApi().then((data) => {
      if (data.status === 200) {
        setProfile(data.data.reporter)
      }
      else {
        alert(data.data.message)
      }
    });

  },[])

  const HandleFormChange = (e) => {
    setProfile({...profile, [e.target.name] : e.target.value})
  }

  const HandleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("file", profile.file);
    formData.append("name", profile.name);
    formData.append("email", profile.email);
    formData.append("mobile", profile.mobile);
    formData.append("about", profile.about);

    UpdateAdminApi(formData).then((data) => {
      if (data.status === 200) {
        alert("admin updated successfully.")
        GetAdminApi().then((data) => {
          if (data.status === 200) {
            setProfile(data.data.reporter)
          }
          else {
            alert(data.data.message)
          }
        });
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
                <img src={profile.file.secure_url ? profile.file.secure_url : URL.createObjectURL(profile.file)} alt="" style={{ width : "50px", height: "50px"}}/>
              }
              <input type="file" id='file' name='file' onChange={(e) => setProfile({...profile, [e.target.name] : e.target.files[0]})}/>

              <label htmlFor="name">Name</label>
              <input type="text" id='name' name='name' value={profile.name} onChange={(e) => HandleFormChange(e)}/>

              <label htmlFor="email">Email</label>
              <input type="email" id='email' name='email' value={profile.email} onChange={(e) => HandleFormChange(e)}/>

              <label htmlFor="mobile">Mobile</label>
              <input type="tel" id='mobile' name='mobile' value={profile.mobile} onChange={(e) => HandleFormChange(e)}/>

              <label htmlFor="about">About</label>
              <input type="text" id='about' name='about' value={profile.about} onChange={(e) => HandleFormChange(e)}/>

              <input type="submit" value="Submit"/>
            </fieldset>
          </form>
        </div>
      }
    </>
  )
}

export default Profile