import superagent, { SuperAgent } from "superagent";
import { HttpClient } from "../httpClient";

describe('Check Delete method API', () => {

    it('delete post 1', async () => {
        const response = await HttpClient.get('posts', { id: 1 });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({});
       // console.log(response.body)
    });

    it('delete not exist post', async () => {
        const response = await HttpClient.get('posts', { id: 101 });
        expect(response.status).toBe(200); // а вообще ожидаю 404 ( так как такого поста нет)
        expect(response.body).toEqual({});

    });

    it('delete all posts', async () => {
        const response = await HttpClient.get('posts');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({});
    });

    it('create and delete post', async () => {
        const newPost = {
            title: "hello world",
            body: " I'm tired"
        }
        const response = await HttpClient.post('posts', { 'Content-Type': 'application/json' }, newPost);
        expect(response.status).toEqual(201);
        expect(response.body.id).toEqual(101);

        const response1 = await HttpClient.get('posts', { id: 101 });
        expect(response1.status).toBe(200);
        expect(response1.body).toEqual({});
    });

    it('delete post 3', async () => {
        const response = await HttpClient.get('posts', { id: 3 });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({});
       // console.log(response.body)
    });

});
