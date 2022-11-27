import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import MyDislikes from "../components/profile/my-dislikes";
import * as dislikesService from '../services/dislikes-service'
// import axios from "axios";
// jest.mock('axios')
jest.mock('../services/dislikes-service')

const MOCKED_USERS = [
    {username: 'alice-username', password: 'lv426', email: 'alice@weyland.com', _id: "1"},
    {username: 'bob-username', password: 'illbeback', email: 'bob@bigjeff.com', _id: "2"},
    {username: 'charlie-username', password: 'charsd', email: 'charlie@what.com', _id: "3"},
]

const STATS = {
    replies: 1,
    retuits: 0,
    likes: 0,
    dislikes: 4
}

const MOCKED_TUITS = [
    {tuit: "alice's tuit", postedBy: MOCKED_USERS[0], _id: "1", stats: STATS},
    {tuit: "bob's tuit", postedBy: MOCKED_USERS[1], _id: "2", stats: STATS},
    {tuit: "charlie's tuit", postedBy: MOCKED_USERS[2], _id: "3", stats: STATS},
];


test('Disliked tuits are rendered corectly.', async () => {
    dislikesService.findAllTuitsDislikedByUser.mockImplementation(() =>
        Promise.resolve(MOCKED_TUITS)
    );
    render(
        <HashRouter>
            <MyDislikes/>
        </HashRouter>
    );
    await new Promise(process.nextTick);

    const username = screen.getByText(/charlie-username/i);
    expect(username).toBeInTheDocument();
});