import { getRequests } from "./dataAccess.js"


const convertRequestToListElement = (request) => {
    return `<li>
    Request #${request.id}
    </li>`
}


export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map(convertRequestToListElement)
            }
        </ul>
    `

    return html
}
