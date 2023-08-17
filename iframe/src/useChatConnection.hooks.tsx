import { useState } from "react"
import {API} from "./services/api";

interface useChatConnection {
    companyId: string,
    clientId: string
}

const useChatConnection = ({companyId, clientId}: useChatConnection) => {
    const [] = useState(``)

    const handleRequest = async () => {
        const response = await API.get(`/chats/${companyId}/${clientId}`)
        return response
    };

    return {
        handleRequest
    }

}

export default useChatConnection;