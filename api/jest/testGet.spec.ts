
import { HttpClient } from "../httpClient";

describe('Check Get method API', () => {

    it('check ID 1 and 100 to exist', async () => {
        const response1 = await HttpClient.get('posts', { id: 1 })
        const response100 = await HttpClient.get('posts', { id: 100 });
        expect(response1.status).toBe(200);
        expect(response100.status).toBe(200);
        const numId1 = response1.body.find((num: { id: number; }) => num.id === 1);
        const numId100 = response100.body.find((num: { id: number}) => num.id === 100);
        expect(numId1).toBeDefined();
        expect(numId100).toBeDefined();
    })

    it('check ID 101 not exist', async () => {
        const response = await HttpClient.get('posts', { id: 101 });
        expect(response.status).toBe(200);
        expect(response.body).toEqual([]);
    })

    it('find all with userId equal 10', async () => {
        const response = await HttpClient.get('posts', { userId: 10 });
        const result = response.body;
        expect(response.status).toBe(200);
        expect(result.length).toEqual(10);
    })

    it('find comment by email', async () => {
        const response = await HttpClient.get('comments', { email: 'Eliseo@gardner.biz' })
        expect(response.status).toBe(200);
        const commentWithEmail = response.body.find((comment: { email: string; }) => comment.email === 'Eliseo@gardner.biz');
        expect(commentWithEmail).toBeDefined();
        expect(commentWithEmail.name).toEqual('id labore ex et quam laborum');
    })

     it('find users with .tv email', async() => {
        //найти всех юзеров, у которых емейл заканчивается на biz
        const response = await HttpClient.get('users');
        expect(response.status).toBe(200);
        const myUsers = response.body.filter((user: { email: string; }) => user.email.endsWith('.biz'));
        //console.log(myUsers);
        const allEmailsEndWithBiz = myUsers.every((user: { email: string; }) => user.email.endsWith('.biz'));
        expect(allEmailsEndWithBiz).toBe(true);

    })


})