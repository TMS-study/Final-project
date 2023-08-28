import superagent from "superagent";
import { getStatus } from "./log.conf";

export class HttpClient {
    static readonly url = 'https://jsonplaceholder.typicode.com';

    static async get(path: string, queryValue?: string | object): Promise<any> {
        let response: unknown;
        try {
            if (queryValue) {
                response = await superagent.get(`${HttpClient.url}/${path}`).query(queryValue);
            }
            else {
                response = await superagent.get(`${HttpClient.url}/${path}`);
            }

            getStatus(response);

        }
        catch (err: any) {
            console.log(err.message);
        }
        finally {
            return response;
        }
    }

    static async post(path: string, setDate: any, sendDate: string | object): Promise<any> {
        let response: unknown;
        try {
            response = await superagent.post(`${HttpClient.url}/${path}`).set(setDate).send(sendDate)
            
            getStatus(response);

        }
        catch (err: any) {
            console.log(err.message);
        }
        finally {
            return response;
        }
    }

    static async put(path: string, setDate: any, sendDate: string | object): Promise<any> {
        let response: unknown;
        try {
            response = await superagent.put(`${HttpClient.url}/${path}`).set(setDate).send(sendDate)
            
            getStatus(response);

        }
        catch (err: any) {
            console.log(err.message);
        }
        finally {
            return response;
        }
    }

    static async putch(path: string, setDate: any, sendDate: string | object): Promise<any> {
        let response: unknown;
        try {
            response = await superagent.post(`${HttpClient.url}/${path}`)
            
            getStatus(response);

        }
        catch (err: any) {
            console.log(err.message);
        }
        finally {
            return response;
        }
    }

    static async delete(path: string, queryValue?: string | object): Promise<any> {
        let response: unknown;
        try {
            if (queryValue) {
                response = await superagent.delete(`${HttpClient.url}/${path}`).query(queryValue);
            }
            else {
                response = await superagent.delete(`${HttpClient.url}/${path}`);
            }

            getStatus(response);

        }
        catch (err: any) {
            console.log(err.message);
        }
        finally {
            return response;
        }
    }

}