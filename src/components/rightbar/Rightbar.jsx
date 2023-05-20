import React from 'react'
import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online"


export default function Rightbar({profile}) {

  const HomeRightbar = () => {
    return(
      <>
      <div className="birthdayContainer">
      <img className="birthdayImg" src="Asset/Asset/gift.jpg" alt="" />
      <span className="birthdayText">
        <b>Pola Foster</b> and <b> 6 other friends</b> have their birthday today</span>
        </div>
        <img className="rightbarAd" src="/Asset/Asset/street1.jpg"  alt=""/>
        <h4 className= "rightbarTitle">Online friends</h4>
      <ul className="rightbarFriendList">
      {Users.map(u=>(
        <Online key={u.id} user={u}/>
        ))}

      </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
  return (
  <>
  <h4 className="rightbarTitle">User information</h4>
  <div className="rightbarInfo">
    <div className="rightbarInfoItem">
  <span className="rightbarInfoKey">City:</span>
  <span className="rightbarInfoValue">Lagos</span>
  </div>
  <div className="rightbarInfoItem">
  <span className="rightbarInfoKey">From:</span>
  <span className="rightbarInfoValue">Nigeria</span>
  </div>
  <div className="rightbarInfoItem">
  <span className="rightbarInfoKey">Relationship:</span>
  <span className="rightbarInfoValue">Married</span>
  </div>
  </div>
  <h4 className="rightbarTitle">User friends</h4>
  <div className="rightbarFollowings">
  <div className="rightbarFollowing">
    <img src="Asset/Asset/index1.jpg" alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">John Carter</span>
  </div>
  <div className="rightbarFollowing">
    <img src="Asset/Asset/index2.jpg" alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">John Carter</span>
  </div>
  <div className="rightbarFollowing">
    <img src="Asset/Asset/index3.jpg" alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">John Carter</span>
  </div>
  <div className="rightbarFollowing">
    <img src="Asset/Asset/index4.jpg" alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">John Carter</span>
  </div>
  <div className="rightbarFollowing">
    <img src="Asset/Asset/index5.jpg" alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">John Carter</span>
  </div>
  <div className="rightbarFollowing">
    <img src="Asset/Asset/index6.jpg" alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">John Carter</span>
  </div>
  </div>
  </>
  )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>

    </div>
  )
}

