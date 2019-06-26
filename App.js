import React from "react";
import { StatusBar } from "react-native";
import rootReducer from "./src/reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Navigation from "./routes";

const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar hidden={true} />
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Navigation />
          </ThemeProvider>
        </Provider>
      </>
    );
  }
}
