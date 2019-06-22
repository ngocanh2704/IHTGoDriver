import {
  createDrawerNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import AllOrderComponent from "./src/components/templates/AllOrderComponent";
import PendingComponent from "./src/components/templates/PendingComponent";
import SuccessComponent from "./src/components/templates/SuccessComponent";
import LoginComponent from "./src/components/pages/LoginComponent";
import MainComponent from "./src/components/pages/MainComponent";
import DetailComponent from "./src/components/pages/DetailComponent";

const AppNavigator = createStackNavigator({
  LoginScreen: {
    screen: LoginComponent,
    navigationOptions: {
      header: null
    }
  },
  MainScreen: {
    screen: MainComponent,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  },
  AllOrderScreen: {
    screen: AllOrderComponent,
    navigationOptions: {
      header: null
    }
  },
  PendingScreen: {
    screen: PendingComponent,
    navigationOptions: {
      header: null
    }
  },
  SuccessScreen: {
    screen: SuccessComponent,
    navigationOptions: {
      header: null
    }
  },
  OrderDetailScreen: {
    screen: DetailComponent,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(AppNavigator);
