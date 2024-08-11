async function requesterFunc(method, url, data) {

    const options = {};

    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
        options.headers = {
            ...options.headers,
            'X-Authorization': accessToken
        }
    }

    if (method !== 'GET') {
        options.method = method;
    }

    if (data) {
        options.headers = {
            ...options.headers,
            'Content-Type': 'application/json'
        }
        options.body = JSON.stringify(data);
    }





    const response = await fetch(url, options);
    //TODO error handling if response status not okay
    const result = await response.json();

    if (!response.ok) {
        throw result;
    }
    return result;

}

export const requester = {
    get: requesterFunc.bind(null, 'GET'),
    post: requesterFunc.bind(null, 'POST'),
    put: requesterFunc.bind(null, 'PUT'),
    del: requesterFunc.bind(null, 'DELETE')
}



