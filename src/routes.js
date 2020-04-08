import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Main from './pages/Main';

const Routes = createAppContainer(
    createStackNavigator({
        Home,
        Main
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