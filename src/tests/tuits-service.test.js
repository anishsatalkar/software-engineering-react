import {createUser} from "../services/users-service";
import {createTuit, deleteTuit, findTuitById} from "../services/tuits-service";

jest.setTimeout(30000);

describe('can create tuit with REST API', () => {
    const tuitRequestBody = {
        tuit: "Test tuit."
    }

    const userReqBody = {
        username: "TestUser",
        password: "TestPassword",
        email: 'TestUser@aliens.com'
    }

    let userId;
    let tuitId;

    beforeAll(async () => {
        const response = await createUser(userReqBody);
        userId = response._id;
    });

    afterAll(() => {
        deleteUsersByUsername(userReqBody.username);
        return deleteTuit(tuitId);
    });

    test('can create tuit with REST API', async () => {
        const newTuit = await createTuit(userId, tuitRequestBody);
        tuitId = newTuit._id;
        expect(newTuit.tuit).toEqual(tuitRequestBody.tuit);
        expect(newTuit.postedBy).toEqual(userId);
        expect(newTuit.postedOn).toBeDefined();
    });
});

describe('can delete tuit wtih REST API', () => {
    const tuitRequestBody = {
        tuit: "Test tuit."
    }

    const userReqBody = {
        username: "TestUser",
        password: "TestPassword",
        email: 'TestUser@aliens.com'
    }

    let userId;
    let tuitId;

    beforeAll(async () => {
        const response = await createUser(userReqBody);
        userId = response._id;
    });

    afterAll(() => {
        deleteUsersByUsername(userReqBody.username);
        return deleteTuit(tuitId);
    });

    test('can delete tuit wtih REST API', async () => {
        const newTuit = await createTuit(userId, tuitRequestBody);
        tuitId = newTuit._id;
        expect(newTuit.tuit).toEqual(tuitRequestBody.tuit);
        expect(newTuit.postedBy).toEqual(userId);
        expect(newTuit.postedOn).toBeDefined();

        const deletedCount = await deleteTuit(tuitId);
        expect(deletedCount.deletedCount).toEqual(1);
    });
});

describe('can retrieve a tuit by their primary key with REST API', () => {
    const tuitRequestBody = {
        tuit: "Test tuit."
    }

    const userReqBody = {
        username: "TestUser",
        password: "TestPassword",
        email: 'TestUser@aliens.com'
    }

    let userId;
    let tuitId;

    beforeAll(async () => {
        const response = await createUser(userReqBody);
        userId = response._id;
    });

    afterAll(() => {
        deleteUsersByUsername(userReqBody.username);
        return deleteTuit(tuitId);
    });

    test('can retrieve a tuit by their primary key with REST API', async () => {
        const newTuit = await createTuit(userId, tuitRequestBody);
        tuitId = newTuit._id;
        expect(newTuit.tuit).toEqual(tuitRequestBody.tuit);
        expect(newTuit.postedBy).toEqual(userId);
        expect(newTuit.postedOn).toBeDefined();

        const tuitResponse = await findTuitById(tuitId);
        expect(tuitResponse._id).toEqual(tuitId);
        expect(tuitResponse.tuit).toEqual(tuitRequestBody.tuit);
        expect(tuitResponse.postedBy._id).toEqual(userId);
        expect(tuitResponse.postedOn).toBeDefined();
    });
});

describe('can retrieve all tuits with REST API', () => {
  // TODO: implement this
});