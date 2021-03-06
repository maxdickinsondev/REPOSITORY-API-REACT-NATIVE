import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Main from './pages/Main';
import Details from './pages/Details';

const Routes = createAppContainer(
    createStackNavigator({
        Home,
        Main,
        Details
    }, {
        defaultNavigationOptions: {
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#E02041'
            },
            headerTintColor: '#fff'
        }
    })
);

export default Routes;