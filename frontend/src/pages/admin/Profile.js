import React, { useEffect } from 'react'
import { GetAdminApi } from '../../fetchApi/FetchAPI'

const Profile = () => {
  useEffect(() => {
    GetAdminApi().then((data) => {
      if (data.status === 200) {
        console.log(data.data)
      }
      else {
        console.log(data.data.message)
      }
    });

  },[])

  return (
    <div>Profile</div>
  )
}

export default Profile