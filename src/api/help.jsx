import Constants from "../../constants";


export function fetchFuntion(url, type = null, formData = null, token = true) {

    const login = JSON.parse(localStorage.getItem('login'))

    return fetch(`${Constants.API}${url}`, {
        method: type ? type : 'GET',
        headers: { "Authorization": `Bearer ${token ? login.api_token : ''}`, },
        body: formData,
    }).then(resp => resp.json()).then(data => {
        return data
    }).catch(() => { return false });
}