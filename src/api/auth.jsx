import { fetchFuntion } from "./help";

export function authLogin(user) {
    let formData = new FormData();
    formData.append("email", user.email);
    formData.append("password", user.password);
    return fetchFuntion(`login`,'POST',formData,false)
}
export function authRegister(data) {
    let formData = new FormData();
    for (const property in data) {
        formData.append(`${property}`, `${data[property]}`);
      }
    return fetchFuntion(`register`,'POST',formData,false)
}
export function authLogout() {
    return fetchFuntion('logout','POST',null)
}