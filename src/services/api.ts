const baseUrl: string = 'http://localhost:3001'

export const logIn = async (email: string, password: string): Promise<any> => {
    const response: Response = await fetch(baseUrl + '/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    return response.json()
}

// export const logIn = (email: string, password: string): Promise<any> => {
//     return fetch(baseUrl + '/login', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Access-Control-Request-Headers": "X-auth"
//         },
//         body: JSON.stringify({
//             email,
//             password
//         })
//     })
//     .then(resp => {
//         console.log("token:", resp.headers.get('X-auth'))
//         return resp.json()
//     })
// }

export const signUp =  async (email, firstName, lastName, password): Promise<any> => {
    const response: Response = await fetch(baseUrl + '/signup', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            firstName, 
            lastName, 
            password
        })
    })
    return response.json()
}
