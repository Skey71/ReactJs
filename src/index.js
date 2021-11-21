import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { createTheme } from "@mui/material";
import React from "react";
import { ChatPage, ProfilePage } from "./pages";
import { CustomThemeProvider } from "./contexts";

import { store } from "./store/create-store";
import { Provider } from "react-redux";
// import { TestRoute } from "./components/test-route";
import { store } from "./store";

import "./global.css";

const themes = {
    light: createTheme({
        theme: {
            color: "#17212b",
        },
    }),
    dark: createTheme({
        theme: {
            color: "blue",
        },
    }),
};

const App = () => {
    return (
        <BrowserRouter>
            <CustomThemeProvider themes={themes} initialTheme="light">
                <Provider store={store}>
                <Provider store={store}>
                <BrowserRouter>
            {/* header */}
                <CustomThemeProvider themes={themes} initialTheme="light">
                <Switch>
                <Route path="/chat">
                <ChatPage />
                </Route>

                <Route path="/profile">
                <ProfilePage />
                <Link to="/chat">go to Chat</Link>
                </Route>

                <Route path="*">
                <h1>404 page</h1>
                <Link to="/chat">go to Chat</Link>
                </Route>
                </Switch>
                </Provider>
                </CustomThemeProvider>
                </BrowserRouter>
            </CustomThemeProvider>
        </BrowserRouter>
    </Provider >
  );
};

ReactDOM.render(<App />, document.getElementById("root"));