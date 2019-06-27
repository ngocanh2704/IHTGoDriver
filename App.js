import React from "react";
import { StatusBar } from "react-native";
import rootReducer from "./src/reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Navigation from "./routes";
import { SET_LOCATION } from "./src/actions/types";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

function tracking(geolocation) {
  return function(dispatch) {
    setInterval(function() {
      return geolocation.getCurrentPosition(
        position => {
          dispatch({
            type: SET_LOCATION,
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        error => {
          console.log(error);
        },
        { enableHighAccuracy: false, timeout: 20000 }
      );
    }, 1000);
  };
}

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      intervalId: null
    };
  }

  // getLocation = () => {
  //   navigator.geolocation.getCurrentPosition(
  //     position => {
  //       this.props.dispatch({
  //         type: SET_LOCATION,
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude
  //       });
  //     },
  //     error => {
  //       console.log(error);
  //     },
  //     { enableHighAccuracy: false, timeout: 20000 }
  //   );
  // };

  componentDidMount() {
    store.dispatch(tracking(navigator.geolocation));
  }

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

export default App;
