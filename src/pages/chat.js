import { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import {
    Header,
    MessageList,
    MainTemplate,
    ChatList,
    MessageProvider,
} from "../components";
import { Header, MessageList, MainTemplate, ChatList } from "../components";

export function ChatPage() {
    const { push } = useHistory();
    useEffect(() => {
        const listenExistChat = ({ code }) => {
            if (code === "Escape") {
                push("/chat");
            }
        };
        document.addEventListener("keydown", listenExistChat);
        return () => {
            document.removeEventListener("keydown", listenExistChat);
        };
    }, [push]);
    return (
        <Switch>
            <Route path={["/chat/:roomId", "/chat"]}>
                <MessageProvider>
                    {([state, actions]) => (
                        <MainTemplate
                            header={<Header test="test" />}
                            chats={
                                <ChatList
                                    {...state}
                                    createConversation={actions.createConversation}
                                />
                            }
                        >
                            <Route path="/chat/:roomId">
                                <MessageList
                                    {...state}
                                    sendMessage={actions.sendMessage}
                                    handleChangeValue={actions.handleChangeValue}
                                />
                            </Route>

                            <Route exact path="/chat">
                                <h1>Выберите диалог</h1>
                            </Route>
                        </MainTemplate>
                    )}
                </MessageProvider>
                <MainTemplate chats={<ChatList />} header={<Header />}>
                    <Route path="/chat/:roomId">
                        <MessageList />
                    </Route>
                    <Route exact={true} path="/chat">
                        <h1>выберите сообщение</h1>
                    </Route>
                </MainTemplate>
            </Route>
            <Route path="*">
                <h1>такого чата нет</h1>
            </Route>
        </Switch>
    );
}