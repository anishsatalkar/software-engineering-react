import axios from "axios";
import {findAllUsers} from "../services/users-service";
import {render, screen} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import Tuits from "../components/tuits";

jest.mock('axios');

const MOCKED_USERS = [
    {username: 'alice-username', password: 'lv426', email: 'alice@weyland.com', _id: "1"},
    {username: 'bob-username', password: 'illbeback', email: 'bob@bigjeff.com', _id: "2"},
    {username: 'charlie-username', password: 'charsd', email: 'charlie@what.com', _id: "3"},
]

const MOCKED_TUITS = [
    {tuit: "alice's tuit", postedBy: MOCKED_USERS[0], _id: "1"},
    {tuit: "bob's tuit", postedBy: MOCKED_USERS[1], _id: "2"},
    {tuit: "charlie's tuit", postedBy: MOCKED_USERS[2], _id: "3"},
];

test('tuit list renders mocked', async () => {
    axios.get.mockImplementation(() =>
        Promise.resolve({ data: {tuits: MOCKED_TUITS} }));
    const response = await findAllUsers();
    const tuitsResponse = response.tuits;

    render(
        <HashRouter>
            <Tuits tuits={tuitsResponse}/>
        </HashRouter>);

    const tuitContent = screen.getByText(/charlie's tuit/i);
    expect(tuitContent).toBeInTheDocument();

    const username = screen.getByText(/charlie-username/i);
    expect(username).toBeInTheDocument();
});