import Tuit from "./tuit";
import * as likesService from "../../services/likes-service";
import * as dislikesService from "../../services/dislikes-service";
import * as tuitService from "../../services/tuits-service";
import {useEffect, useState} from "react";
const Tuits = ({tuits = [], deleteTuit}) => {
    const [tuitsState, setTuits] = useState(tuits);
    useEffect(() => setTuits(tuits));

    const refreshTuits = async (tuit) => {
        // const foundTuit = await tuitService.findTuitById(tuit._id);
        // const tuitsInList = tuits.filter((element) => element._id === foundTuit._id);
        // if (!tuitsInList) return;
        // if (tuitsInList.length > 1) return;
        // const tuitInList = tuitsInList[0];
        // tuits[tuits.indexOf(tuitInList)] = foundTuit;
        // setTuits(tuits);
    }

    const likeTuit = (tuit) =>
        likesService
            .userTogglesTuitLikes("me", tuit._id)
            .then(refreshTuits(tuit))
            .catch(e => alert(e))

    const dislikeTuit = (tuit) =>
        dislikesService
            .userTogglesTuitDislikes("me", tuit._id)
            .then(refreshTuits(tuit))
            .catch(e => alert(e))

    return (
        <div>
            {tuitsState.length > 0 &&
                <ul>
                    {
                        tuitsState.map(tuit =>
                            <Tuit key={tuit._id}
                                  deleteTuit={deleteTuit}
                                  likeTuit={likeTuit}
                                  dislikeTuit={dislikeTuit}
                                  tuit={tuit}/>)
                    }
                </ul>
            }
            {
                tuitsState.length < 1 &&
                <h4>No Tuits</h4>
            }
        </div>
    );
}

export default Tuits;