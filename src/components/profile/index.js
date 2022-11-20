import * as service from "../../services/auth-service"
import {useEffect, useState} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import MyTuits from "./my-tuits";
const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  useEffect(async () => {
    try {
      const user = await service.profile();
      setProfile(user);
    } catch (e) {
      navigate('/login');
    }
  }, []);
  const logout = () => {
    service.logout()
        .then(() => navigate('/login'));
  }
    return(
        <div>
            <h4>{profile.username}</h4>
            <h6>@{profile.username}</h6>
            <button className="btn btn-primary" onClick={logout}>
                Logout</button>
                <Routes>
                    <Route path="/profile/mytuits"  element={<MyTuits/>}/>
                </Routes>
        </div>
    );
};
export default Profile;