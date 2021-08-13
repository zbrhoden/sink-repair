import { getRequests } from "./dataAccess.js"


const convertRequestToListElement = () => {
    return `<li>
    Request #${requests.id}
    </li>`
}


export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map(convertRequestToListElement())
            }
        </ul>
    `

    return html
}
