import axios from "axios";

const instance = axios.create();

const get = ({ url, params }: { url: string; params: any }) => {
    return instance.get(url, { params: params, })
}

const post = ({ url, params }: { url: string; params: any }) => {
    return instance.post(url, params)
}