import {getLocalstorage} from "../redux/helpers";
import {USER_STORAGE_KEY} from "../redux/user/sagas";

const PREFIX = 'http://localhost:5000/api/'

export class ApiGenerator {
    static HEADERS = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }

    static async get(url) {
        try {
            return await request(url, 'GET')
        } catch(e) {
            throw new Error(e)
        }
    }

    static async post(url, data = {}) {
        try {
            return await request(url, 'POST', data)
        } catch(e) {
            throw new Error(e)
        }
    }

    static async delete(url) {
        try {
            return await request(url, 'DELETE')
        } catch(e) {
            throw new Error(e)
        }
    }

    static async patch(url, data = {}) {
        try {
            return await request(url, 'PATCH', data)
        } catch(e) {
            throw new Error(e)
        }
    }
}

async function request(url, method = 'GET', data) {
    const user = getLocalstorage(USER_STORAGE_KEY)
    const config = {
        method,
        headers: user ? {...ApiGenerator.HEADERS, authorization: `BEARER ${user.token}`} : ApiGenerator.HEADERS
    }

    if (method === 'POST' || method === 'PATCH') {
        config.body = JSON.stringify(data)
    }
    const response = await fetch(`${PREFIX}${url}`, config)
    return await response.json()
}