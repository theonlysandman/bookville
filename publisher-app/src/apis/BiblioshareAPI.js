// JavaScript source code
import { api } from "./configs/biblioshareConfig"
import { defineCancelApiObject } from "./configs/biblioshareUtils"

export const BiblioshareAPI = {
    getBookDetails: async function (token, isbm, cancel=false) {
        const response = await api.request({
            "Content-Type": "application/xml; charset=utf-8",
            url: '',
            method: "GET",
            params: {
                token: "he7ke8hocc4tds1b",
                ean: isbm,
            },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
        })

        return response.data
    },
    /*
    getPaginated: async function ({ limit, offset }, cancel = false) {
        const response = await api.request({
            url: "/pokemon/",
            method: "GET",
            params: {
                limit: limit,
                offset: offset,
            },
            signal: cancel ? cancelApiObject[this.getPaginated.name].handleRequestCancellation().signal : undefined,
        })

        return response.data.results
    },
    */
}

// defining the cancel API object for ProductAPI
const cancelApiObject = defineCancelApiObject(BiblioshareAPI)

