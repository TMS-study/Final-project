import superagent, { SuperAgent, post } from "superagent";
import { HttpClient } from "../httpClient";

describe('Check Post method API', () => {

    it('create new user', async () => {
        const newUser = {

            name: "John Doe",
            usernam: "johnny",
            email: "john.doe@example.com",
            address: {
                street: "123 Main St",
                suite: "Apt. 101",
                city: "Anytown",
                zipcode: "12345",
                geo: {
                    lat: 12.3456,
                    lng: -67.8901
                }
            },
            phone: 555 - 123 - 4567,
            website: "example.com",
            company: {
                name: "Tech Solutions Inc.",
                catchPhrase: "Innovate. Create. Excel.",
                bs: "Leading in technology solutions"
            }
        }

        const response = await HttpClient.post('users', { 'Content-Type': 'application/json' }, newUser);

        expect(response.status).toEqual(201);
        expect(response.body.id).toEqual(11);
    });

    it('create user with 3 field', async () => {
        const newUser = {
            name: "John",
            usernam: "Depp",
            email: "john.depp@example.com"
        }
        const response = await HttpClient.post('users', { 'Content-Type': 'application/json' }, newUser);

        expect(response.status).toEqual(201);
        expect(response.body.name).toEqual(newUser.name);
        expect(response.body.usernam).toEqual(newUser.usernam);
        expect(response.body.email).toEqual(newUser.email);


        //console.log(response.body)
    })

    it('create new post', async () => {
        const newPost = {
            title: "hello world",
            body: " I'm tired"
        }
        const response = await HttpClient.post('posts', { 'Content-Type': 'application/json' }, newPost);

        expect(response.status).toEqual(201);
        expect(response.body.id).toEqual(101);
        expect(response.body.title).toBe(newPost.title);
        expect(response.body.body).toBe(newPost.body);
        //console.log(response.body)
    })

    it('create post with indalid data', async () => {
        const invalidPost = {
            author: 'Invalid Author',
            content: 'Invalid Post Content'
        };

        const response = await HttpClient.post('posts', { 'Content-Type': 'application/json' }, invalidPost);

        expect(response.status).toBe(201); // вообще тут ждала ошибку, но апишка жрет все и не выдает ошибок
    });

    it('create a post with an existing id and field', async () => {
        const existPost = {
            userId: 9,
            id: 89,
            title: "sint soluta et vel magnam aut ut sed qui",
            body: "repellat aut aperiam totam temporibus autem et\narchitecto magnam ut\nconsequatur qui cupiditate rerum quia soluta dignissimos nihil iure\ntempore quas est"
        }

        const response = await HttpClient.post('posts', { 'Content-Type': 'application/json' }, existPost);
        expect(response.status).toBe(201); // вообще тут ждала ошибку, но апишка жрет все и не выдает ошибок
    })
})