import React, { useEffect, useState } from 'react'
import { GetAdminApi, UpdateAdminApi } from '../../fetchApi/FetchAPI'
import "../../styles/Profile.css"
import ProfilePic from "../../assets/profile-logo.png"

const Profile = () => {
  const [profile, setProfile] = useState({})
  const [disAbled, setDisabled] = useState({
    name : false,
    email : false,
    mobile : false,
    about : false,
  })

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
            setDisabled({
              name : false,
              email : false,
              mobile : false,
              about : false,
            })
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

  const HandleEditFile = (field) => {
    switch (field) {
      case 'name':
        setDisabled({...disAbled, name : true});
        break;
      case 'email':
        setDisabled({...disAbled, email : true});
        break;
      case 'mobile':
        setDisabled({...disAbled, mobile : true});
        break;
      case 'about':
        setDisabled({...disAbled, about : true});
        break;
      default:
        break;
    }
  }

  return (
    <>
      {profile &&
        <div className='addnews-container'>
          <div className="addnews-box">
            <form action="" onSubmit={(e) => HandleSubmit(e)}>
              <div className="news-box">
                <div className="news-file_title_cat">
                  <div className="file-box">
                    {profile.file ?
                      <img src={profile.file.secure_url ? profile.file.secure_url : URL.createObjectURL(profile.file)} alt="ProfilePic" style={{ width : "200px", height: "200px"}}/>
                      :
                      <img src={ProfilePic} alt="ProfilePic" style={{ width : "200px", height: "200px"}}/>
                    }
                    <label htmlFor="file">Change Picture</label>
                    <input type="file" id='file' name='file' onChange={(e) => setProfile({...profile, [e.target.name] : e.target.files[0]})}/>
                  </div>
                  <div className="title_cat">
                    <label htmlFor="name">Name</label>
                    <div className="pro-edit-icon">
                      <input type="text" id='name' name='name' value={profile.name} onChange={(e) => HandleFormChange(e)} disabled={!disAbled.name}/>
                      <i className="fa-solid fa-pen-to-square" onClick={() => HandleEditFile("name")}/>
                    </div>

                    <label htmlFor="email">Email</label>
                    <div className="pro-edit-icon">
                      <input type="email" id='email' name='email' value={profile.email} onChange={(e) => HandleFormChange(e)} disabled={!disAbled.email}/>
                      <i className="fa-solid fa-pen-to-square" onClick={() => HandleEditFile("email")}/>
                    </div>

                    <label htmlFor="mobile">Mobile</label>
                    <div className="pro-edit-icon">
                      <input type="tel" id='mobile' name='mobile' value={profile.mobile} onChange={(e) => HandleFormChange(e)} disabled={!disAbled.mobile}/>
                      <i className="fa-solid fa-pen-to-square" onClick={() => HandleEditFile("mobile")}/>
                    </div>
                  </div>
                </div>

                <div className='desc'>
                  <label htmlFor="about">About</label>
                  <div className="pro-edit-icon">
                    <textarea type="text" id='about' name='about' value={profile.about} onChange={(e) => HandleFormChange(e)} rows="15" placeholder="Enter news description..." disabled={!disAbled.about}/>
                    <i className="fa-solid fa-pen-to-square desc-icon" onClick={() => HandleEditFile("about")}/>
                  </div>
                </div>

                <div className="news-btn pro-btn">
                  <input type="submit" value="Submit"/>
                </div>
              </div>
            </form>
          </div>
        </div>
      }
    </>
  )
}

export default Profile