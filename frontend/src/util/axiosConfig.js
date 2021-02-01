import axios from "axios"
import Keys from "@/util/keys"

// constants
const CONTENT_TYPE = 'application/json'
const ACCEPTS = 'application/json'

const axiosInstance = axios.create({
    baseURL: `${Keys.BASE_URL}/${Keys.CONTEXT_PATH}/`,
})

axiosInstance.defaults.headers.post['Content-Type'] = CONTENT_TYPE;
axiosInstance.defaults.headers.post['Accepts'] = ACCEPTS;


export default axios;

export const URL = {
    TODO_CREATE: '/api/todo',
    TODO_INDEX: '/api/todo'
}