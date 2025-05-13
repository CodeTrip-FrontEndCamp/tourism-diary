import axios from "axios";

const instance = axios.create();

export const get = (url: string, params: any) => {
    return instance.get(url, { params: params, })
}

const post = (url: string, params: any) => {
    return instance.post(url, params)
}