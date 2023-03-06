import axios from "axios"
import { notification } from "antd"


//example url https://www.biblioshare.org/BNCServices/BNCServices.asmx/ONIX?Token=he7ke8hocc4tds1b&EAN=9781550819113


export const api = axios.create({
    baseURL: "https://www.biblioshare.ca/BNCServices/BNCServices.asmx/ONIX",
})

// defining a custom error handler for all APIs
const errorHandler = (error) => {
    const statusCode = error.response?.status

    if (error.code === "ERR_CANCELED") {
        notification.error({
            placement: "bottomRight",
            description: "API canceled!",
        })
        return Promise.resolve()
    }

    // logging only errors that are not 401
    if (statusCode && statusCode !== 401) {
        console.error(error)
    }

    return Promise.reject(error)
}

// registering the custom error handler to the
// "api" axios instance
api.interceptors.response.use(undefined, (error) => {
    return errorHandler(error)
})
