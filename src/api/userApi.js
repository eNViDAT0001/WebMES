
const base = "http://localhost:8082/api/v1"
export const AuthApi = {
    LoginUser:(body) =>{
        return fetch(`${base}/app/login`, {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: body.username,
                password: body.password
            }),
       
          });
    },
    RegisterUser:(body) =>{
        return fetch(`${base}/app/register`, {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: body.username,
                password: body.password,
                name: body.name,
                birthday: body.birthday,
                phone: body.phone,
                type: body.type,
                gender: body.gender,
                email: body.email
            }),
          });
    }
}