export async function get(url: string, success: (value: any) => void, failure?: (value: any) => void) {
    await fetch(url)
        .then(response => response.json())
        .then(json => success(json))
        .catch(error => failure ? failure(error) : console.error(error));
}

export async function post(url: string, body: any, success: (value: any) => void, failure?: (value: any) => void) {
    const httpInfo = { 
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify(body) 
    };
    await fetch(url, httpInfo)
        .then(response => response.json())
        .then(json => success(json))
        .catch(error => failure ? failure(error) : console.error(error));
}