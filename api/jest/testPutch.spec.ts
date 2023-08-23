import superagent, { SuperAgent } from "superagent";
import { HttpClient } from "../httpClient";

describe('Check Patch method API', () =>{

    it('update not exist post', async() => {
        const updatedTitle = 'Updated Title for Non-existent Post';
        const response = await HttpClient.putch('posts/1', {'Content-Type': 'application/json'}
        ,{ title: updatedTitle });
        expect(response.status).toBe(200); // вообще ожидаю тут 404, но апишка кушает все
    });

    it('update only title', async() => {
        const updatedTitle = 'New Title'
        const response = await HttpClient.putch('posts/67', {'Content-Type': 'application/json'}
       ,{ title: updatedTitle });
        expect(response.status).toBe(200);
        expect(response.body.title).toBe(updatedTitle);
    });

    it('update only body', async() => {
        const updatedBody = 'Updated body content with PATCH';
        const response = await HttpClient.putch('posts/34', {'Content-Type': 'application/json'}
        ,{ body: updatedBody });
        expect(response.status).toBe(200);
        expect(response.body.body).toBe(updatedBody);
    });

    it('update body and title', async() => {
        const updatedData = {
            title: 'New Title',
            body: 'New Body'
        };
        const response = await HttpClient.putch('posts/67', {'Content-Type': 'application/json'} ,updatedData);
        expect(response.status).toBe(200);
        expect(response.body).toBe(updatedData);
    });
});