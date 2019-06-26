import { createAppContainer, createStackNavigator } from "react-navigation";
import { AllOrder, Pending, Success } from "./src/components/templates";
import { Main, Login, Detail } from "./src/components/pages";

const Screens = createStackNavigator({
  // LoginScreen: {
  //   screen: Login,
  //   navigationOptions: {
  //     header: null,
  //     gesturesEnabled: false
  //   }
  // },
  MainScreen: {
    screen: Main,
    navigationOptions: {
      header: null
    }
  },
  AllOrderScreen: {
    screen: AllOrder,
    navigationOptions: {
      header: null
    }
  },
  PendingScreen: {
    screen: Pending,
    navigationOptions: {
      header: null
    }
  },
  SuccessScreen: {
    screen: Success,
    navigationOptions: {
      header: null
    }
  },
  OrderDetailScreen: {
    screen: Detail,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(Screens);
