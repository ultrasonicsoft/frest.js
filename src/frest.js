'use strict';

const frest = {
    getAll: function (urls) {
        let allPromises = [];
        urls.forEach(currentUrl => {
            allPromises.push(fetch(currentUrl.trim()));
        });
        return Promise.all(allPromises).then(responses => Promise.all(responses.map(r => r.json())));
    },

    postAll: function (requests) {
        let allPromises = [];
        for (let index = 0; index < requests.length; index++) {
            const currentRequest = requests[index];
            let currentResult = fetch(currentRequest.url, {
                method: 'POST',
                body: currentRequest.data
            })
            allPromises.push(currentResult);
        }
        return Promise.all(allPromises).then(responses => Promise.all(responses.map(r => r.json())));
    },

    putAll: function (requests) {
        let allPromises = [];
        for (let index = 0; index < requests.length; index++) {
            const currentRequest = requests[index];
            let currentResult = fetch(currentRequest.url, {
                method: 'PUT',
                body: currentRequest.data
            })
            allPromises.push(currentResult);
        }
        return Promise.all(allPromises).then(responses => Promise.all(responses.map(r => r.json())));
    },

    deleteAll: function (requests) {
        let allPromises = [];
        for (let index = 0; index < requests.length; index++) {
            const currentRequest = requests[index];
            let currentResult = fetch(currentRequest, {
                method: 'DELETE'
            })
            allPromises.push(currentResult);
        }
        return Promise.all(allPromises).then(responses => Promise.all(responses.map(r => r.status)));
    },

    getSingle: function (url) {
        return fetch(url).then(response => response.json());
    },
    waterfall: async function (urls) {
        let count = urls.length - 1;
        let index = 0;
        var responses = [];
        while (count >= 0) {
            let response = await this.getSingle(urls[index]);
            responses.push(response);
            count--;
            index++;
        }
        return await responses;
    },
    casecaded: async function (data) {
        let responses = [];
        for (let index = 0; index < data.length; index++) {
            let request = data[index];
            if (request.param) {
                request.url = request.url.replace('{param}', responses[index - 1][request.param]);
            }
            let response = await this.getSingle(request.url);
            responses.push(response);
        }
        return await responses;
    }
}