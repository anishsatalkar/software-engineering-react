import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import {findAllTuits} from "../services/tuits-service";
import Tuits from "../components/tuits";

const MOCKED_USERS = [
    {username: 'alice-username', password: 'lv426', email: 'alice@weyland.com', _id: "1"},
    {username: 'bob-username', password: 'illbeback', email: 'bob@bigjeff.com', _id: "2"},
    {username: 'charlie-username', password: 'charsd', email: 'charlie@what.com', _id: "3"},
]

const MOCKED_TUITS = [
    {tuit: "alice's tuit", postedBy: MOCKED_USERS[0], _id: "1", stats: {likes: 1, dislikes: 0, retuits: 0, replies: 0}},
    {tuit: "bob's tuit", postedBy: MOCKED_USERS[1], _id: "2", stats: {likes: 1, dislikes: 1, retuits: 0, replies: 0}},
    {tuit: "charlie's tuit", postedBy: MOCKED_USERS[2], _id: "3", stats: {likes: 1, dislikes: 3, retuits: 0, replies: 0}},
];

test('tuit list renders static tuit array', () => {
  render(
      <HashRouter>
        <Tuits tuits={MOCKED_TUITS}/>
      </HashRouter>
  );
  const ulElement = screen.getByText(/charlie's tuit/i);
  expect(ulElement).toBeInTheDocument();

  const username = screen.getByText(/charlie-username/i);
  expect(ulElement).toBeInTheDocument();
});

test('tuit list renders async', async () => {
  const tuitsResponse = await findAllTuits();
  render(
      <HashRouter>
          <Tuits tuits={tuitsResponse}/>
      </HashRouter>
  );

  const tuitContent = screen.getByText(/Bob's NEW TUIT/i);
  expect(tuitContent).toBeInTheDocument();


})
