import { useState } from "react"
import {API} from "./services/api";

interface useChatConnection {
    companyId?: string,
    clientId?: string
}

const useChatConnection = ({companyId, clientId}: useChatConnection) => {
    const [messages, setMessages] = useState(``)

    const handleRequest = async () => {
        try{
            await API.get(`/chats/${companyId}/${clientId}`).then((response) => {
                setMessages(response.data)
            })
        }catch(e){
            console.log(e)
        }
        
    };

    return {
        handleRequest,
        messages
    }

}

export default useChatConnection;