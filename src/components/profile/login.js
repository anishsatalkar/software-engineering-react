import {useNavigate} from "react-router-dom";
import {useState} from "react";
import * as service from "../../services/auth-service";

export const Login = () => {
    const [loginUser, setLoginUser] = useState({});
    const navigate = useNavigate()
    const login = () =>
        service.login(loginUser)
            .then((user) => navigate('/profile/mytuits'))
            .catch(e => alert(e));
    return (
        <div className="container-fluid">
            <h1>Login</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="usernameId">Username</label>
                    <input id="usernameId" className="form-control" onChange={(e) =>
                        setLoginUser({...loginUser,
                            username: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="passwordId">Password</label>
                    <input id="passwordId" className="form-control" onChange={(e) =>
                        setLoginUser({...loginUser,
                            password: e.target.value})}/>
                </div>

                <button className="btn btn-primary" onClick={login}>
                    Login</button>
            </form>

        </div>
    );
};
