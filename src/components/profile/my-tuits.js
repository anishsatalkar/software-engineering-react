import {useEffect, useState} from "react";
import * as service from "../../services/tuits-service";
import Tuits from "../../components/tuits";

const MyTuits = () => {
    const [tuits, setTuits] = useState([]);
    const findMyTuits = () =>
        service.findTuitByUser("me")
            .then(tuits => setTuits(tuits));
    useEffect(findMyTuits, []);
    const deleteTuit = (tid) =>
        service.deleteTuit(tid)
            .then(findMyTuits);
    return(
        <div>
            <h2>My Tuits</h2>
            <Tuits tuits={tuits}
                   deleteTuit={deleteTuit}/>
        </div>
    );
};

export default MyTuits;