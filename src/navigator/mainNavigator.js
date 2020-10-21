import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps152968Navigator from '../features/Maps152968/navigator';
import Settings152946Navigator from '../features/Settings152946/navigator';
import Settings152931Navigator from '../features/Settings152931/navigator';
import NotificationList152930Navigator from '../features/NotificationList152930/navigator';
import Maps152929Navigator from '../features/Maps152929/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps152968: { screen: Maps152968Navigator },
Settings152946: { screen: Settings152946Navigator },
Settings152931: { screen: Settings152931Navigator },
NotificationList152930: { screen: NotificationList152930Navigator },
Maps152929: { screen: Maps152929Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
