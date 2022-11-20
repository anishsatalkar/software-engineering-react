import {useState} from "react";
import * as service
    from "../../services/auth-service";
import {useNavigate} from "react-router-dom";

const Signup = () => {
    const [newUser, setNewUser] = useState({});
    const navigate = useNavigate();
    const signup = () =>
        service.signup(newUser)
            .then(() => navigate('/profile'))
            .catch(e => alert(e));
    return (
        <div className="container-fluid">
            <h1>Signup</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="setUserId">Set User Id</label>
                    <input id="setUserId" className="form-control" onChange={(e) =>
                        setNewUser({...newUser,
                            username: e.target.value})}/>
                </div>

                <div className="form-group">
                    <label htmlFor="setPassword">Set Password</label>
                    <input id="setPassword" className="form-control" onChange={(e) =>
                        setNewUser({...newUser,
                            password: e.target.value})}/>
                </div>

                <div className="form-group">
                    <label htmlFor="setEmail">Email</label>
                    <input id="setEmail" className="form-control" onChange={(e) =>
                        setNewUser({...newUser,
                            email: e.target.value})}/>
                </div>
            </form>
            <button className="btn btn-primary" onClick={signup}>
                Signup</button>

        </div>
    );
}
export default Signup;