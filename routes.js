import { createAppContainer, createStackNavigator } from "react-navigation";
import { OrderList } from "./src/components/templates";
import { Main, Login, Detail, Profile, AppInfo } from "./src/components/pages";
import QrScan from "./src/components/pages/QrScan";

const Screens = createStackNavigator({
  LoginScreen: {
    screen: Login,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  },
  MainScreen: {
    screen: Main,
    navigationOptions: {
      header: null
    }
  },
  ProfileScreen: {
    screen: Profile,
    navigationOptions: {
      header: null
    }
  },
  AppInfoScreen: {
    screen: AppInfo,
    navigationOptions: {
      header: null
    }
  },
  OrderListScreen: {
    screen: OrderList,
    navigationOptions: {
      header: null
    }
  },
  OrderDetailScreen: {
    screen: Detail,
    navigationOptions: {
      header: null
    }
  },
  QrScreen: {
    screen: QrScan,
    navigationOptions:{
      header: null
    }
  }
});

export default createAppContainer(Screens);
