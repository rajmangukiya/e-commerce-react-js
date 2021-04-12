import React from 'react'
import ProfileButtonDropDwon from './ProfileButtonDropDwon'

function ProfileButton() {
  return (
    <div className="ProfileButton">
      <div className="ProfileMainButton">
        <div className="image"></div>
        <p>Profile</p>
      </div>
      <ProfileButtonDropDwon />
    </div>
  )
}

export default ProfileButton
