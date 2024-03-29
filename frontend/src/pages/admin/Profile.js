import React, { useEffect, useState } from 'react'
import { GetAdminApi, UpdateAdminApi } from '../../fetchApi/FetchAPI'
import "../../styles/Profile.css"
import ProfilePic from "../../assets/profile-logo.png"
import Lottie from 'lottie-react'
import AddNewsLtt from "../../assets/Added.json"


const Profile = () => {
  const [profile, setProfile] = useState({})
  const [disAbled, setDisabled] = useState({
    name : false,
    email : false,
    mobile : false,
    about : false,
  })

  const [ hidden, setHidden] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden("");
    }, 5000);
    return () => clearTimeout(timer);
  }, [hidden]);

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
        setHidden(data.data.status);
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
      <div className='addnews-container'>
        <div className="addnews-box">
          {hidden &&
            <div className='addnews_lottie'>
                <Lottie animationData={AddNewsLtt} loop={true} />
            </div>
          }
          <form action="" onSubmit={(e) => HandleSubmit(e)}>
            <div className="news-box">
              <div className="news-file_title_cat">
                <div className="file-box">
                  {profile.file ?
                    <img src={profile.file.secure_url ? profile.file.secure_url : URL.createObjectURL(profile.file)} alt="ProfilePic"/>
                    :
                    <img src={ProfilePic} alt="ProfilePic"/>
                  }
                  <label htmlFor="file">Change Picture</label>
                  <input type="file" id='file' name='file' onChange={(e) => setProfile({...profile, [e.target.name] : e.target.files[0]})}/>
                </div>
                <div className="title_cat">
                  <label htmlFor="name">Name</label>
                  <div className="pro-edit-icon">
                    <input type="text" id='name' name='name' value={profile.name ? profile.name : "Full Name"} onChange={(e) => HandleFormChange(e)} disabled={!disAbled.name}/>
                    <i className="fa-solid fa-pen-to-square" onClick={() => HandleEditFile("name")}/>
                  </div>

                  <label htmlFor="email">Email</label>
                  <div className="pro-edit-icon">
                    <input type="email" id='email' name='email' value={profile.email ? profile.email : "example@gmail.com"} onChange={(e) => HandleFormChange(e)} disabled={!disAbled.email}/>
                    <i className="fa-solid fa-pen-to-square" onClick={() => HandleEditFile("email")}/>
                  </div>

                  <label htmlFor="mobile">Mobile</label>
                  <div className="pro-edit-icon">
                    <input type="tel" id='mobile' name='mobile' value={profile.mobile ? profile.mobile : "9800111111"} onChange={(e) => HandleFormChange(e)} disabled={!disAbled.mobile}/>
                    <i className="fa-solid fa-pen-to-square" onClick={() => HandleEditFile("mobile")}/>
                  </div>
                </div>
              </div>

              <div className='desc'>
                <label htmlFor="about">About</label>
                <div className="pro-edit-icon">
                  <textarea type="text" id='about' name='about' value={profile.about ? profile.about : "This is about."} onChange={(e) => HandleFormChange(e)} rows="15" placeholder="Enter news description..." disabled={!disAbled.about}/>
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
    </>
  )
}

export default Profile