import superagent, { SuperAgent } from "superagent";
import { HttpClient } from "../httpClient";

describe('Check Put method API', () => {

    it('update post number 1', async () => {
        const response = await HttpClient.put('posts/1', { 'Content-Type': 'application/json' }
            , {
                userId: 2,
                title: "Clark",
                body: "Cent"
            })

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ id: 1, userId: 2, title: "Clark", body: "Cent" });
    });

    it('update some field in post', async () => {
        const response = await HttpClient.put('posts/1', { 'Content-Type': 'application/json' }
            , {
                title: "Piter",
                body: "Parker"
            });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            id: 1,
            title: "Piter",
            body: "Parker"
        });
    });

    it('update only title', async () => {
        const updatedTitle = 'Updated Title';
        const response = await HttpClient.put('posts/2', { 'Content-Type': 'application/json' }
            , { title: updatedTitle });
        expect(response.status).toBe(200);
        expect(response.body.title).toBe(updatedTitle);
    });

    it('update only body', async () => {
        const updatedBody = 'Updated body content.';
        const response = await HttpClient.put('posts/3', { 'Content-Type': 'application/json' }
            , { body: updatedBody });
        expect(response.status).toBe(200);
        expect(response.body.body).toBe(updatedBody);
    });

    it('update post with invalid data', async () => {
        const response = await HttpClient.put('posts/1', { 'Content-Type': 'application/json' }
            , {
                comment: 'not exist'
            });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ comment: 'not exist', id: 4 });
        //console.log(response.body)
    });

});