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
    const config = {
        method,
        headers: ApiGenerator.HEADERS
    }

    if (method === 'POST' || method === 'PATCH') {
        config.body = JSON.stringify(data)
    }
    const response = await fetch(`${PREFIX}${url}`, config)
    return await response.json()
}