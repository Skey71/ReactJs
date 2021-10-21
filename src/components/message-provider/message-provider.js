import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
// @TODO перенести состояние из messageList/ChatList
export function MessageProvider({ children }) {
    const { roomId } = useParams();
    // ChatList передать value в дочерний инпут
    const [conversations] = useState([
  const [conversations, setConversations] = useState([
        { title: "room1", value: "input value 1" },
        { title: "room2", value: "input value 2" },
    ]);
    const [messages, setMessages] = useState({
        room1: [{ value: "Room1", author: "Bot", id: new Date() }],
        room2: [{ value: "Room2", author: "Bot", id: new Date() }],
    });
    const state = useMemo(() => {
        return {
            messages: messages[roomId] ?? [],
            value: "", // придумать как получить значение текущей комнаты
            // value: conversations[roomId][0].value, // придумать как получить значение текущей комнаты
            value: conversations[0].value,
            conversations,
            allMessages: messages,
        };
    }, [roomId, messages, conversations]);

    const actions = useMemo(() => {
        console.log(1)
        return {
            handleChangeValue: () => {
                handleChangeValue: (e) => {
                    const handleInputValue = e

                    setConversations(() => {
                        console.log(handleInputValue)

                        return {

                        };
                    })
                    // придумать как обновлять value на onChange
                },

                    createConversation: () => {
                        // придумать как добавить чат
                    },
                        sendMessage: (message) => {
                            const newMessage = { ...message, id: new Date() };
                            setMessages((messages) => {
                                return {
                                    ...messages,
                                    [roomId]: [...(messages[roomId] ?? []), newMessage],
                                };
                            });
                        },
    };
        }, [roomId]);
    useEffect(() => {
        const messagesByRoomId = messages[roomId] ?? [];
        const lastMessage = messagesByRoomId[messagesByRoomId.length - 1];
        let timerId = null;
        if (lastMessage?.author === "User") {
            timerId = setTimeout(() => {
                actions.sendMessage({ value: "In this you are right: " + lastMessage?.value, author: "Bot" });
            }, 500);
        }
        return () => clearInterval(timerId);
    }, [messages, roomId, actions]);
    return children([state, actions]);
}