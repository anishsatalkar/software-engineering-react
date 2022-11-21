import * as service from "../../services/auth-service"
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import MyTuits from "./my-tuits";
import MyLikes from "./my-likes";
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
        <div className={"container-fluid"}>
            <h4>{profile.username}</h4>
            <h6>@{profile.username}</h6>
            <button className="btn btn-primary" onClick={logout}>
                Logout</button>
            {/*TODO: Change this to Routes*/}
            <div className={"row"}>
                <div className={"col"}>
                    <MyTuits/>
                </div>
            </div>
            <div className={"row"}>
                <div className={"col"}>
                    <MyLikes/>
                </div>
            </div>

                {/*<Routes>*/}
                {/*    <Route path="/mytuits"  element={<MyTuits/>}/>*/}
                {/*</Routes>*/}
        </div>
    );
};
export default Profile;