import React from 'react'
import '../../design/profile.scss'

const Profile = () => {

  return (
    <>
      <h1>회원 정보 수정</h1>
      <div className='prof-main'>
        <img src={require("../../img/profileImage.png")} />
        <div className='profile'>
          <div className='left'>
            <span>아이디 : </span>
            <span>비밀번호 : </span>
            <span>닉네임 : </span>
            <span>이메일 : </span>
          </div>
          <div className="right">
            <input type='text' name='id' value='사용자 아이디' readOnly /> <br />
            <input type='password' name='pw' placeholder='비밀번호' />  <br />
            <input type='text' name='nick' placeholder='닉네임' />  <br />
            <input type='text' name='email' placeholder='이메일' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile