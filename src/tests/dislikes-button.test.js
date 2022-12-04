import Tuit from "../components/tuits/tuit";
import {render, screen} from "@testing-library/react";
import {HashRouter} from "react-router-dom";

jest.mock('axios');

const MOCKED_USERS = [
    {username: 'ellen_ripley', password: 'lv426', email: 'repley@weyland.com', _id: "123"},
    {username: 'sarah_conor', password: 'illbeback', email: 'sarah@bigjeff.com', _id: "234"},
]
const mock_tuit = {tuit: "alice's tuit", postedBy: MOCKED_USERS[0], _id: "1", stats: {likes: 384, dislikes: 420, retuits: 0, replies: 0}}

test('Tuit has the expected number of dislikes', async () => {
    render(
        <HashRouter>
            <Tuit tuit={mock_tuit}/>
        </HashRouter>);
    const ellen = screen.getByText(/420/i);
    expect(ellen).toBeInTheDocument();
});

test('Tuit has the expected number of likes', async () => {
    render(
        <HashRouter>
            <Tuit tuit={mock_tuit}/>
        </HashRouter>);
    const ellen = screen.getByText(/384/i);
    expect(ellen).toBeInTheDocument();
});