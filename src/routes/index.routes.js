import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WelcomePage from "../pages/welcome.page";
import SignUpPage from "../pages/signup.page";
import LoginPage from "../pages/login.page";


const navigator = createStackNavigator({
    welcome : {screen : WelcomePage,navigationOptions : {header : null}},
    login : {screen : LoginPage,navigationOptions:{header : null}},
    signup : {screen : SignUpPage,navigationOptions : {header:null}}
},{
    initialRouteKey : 'welcome'
});

const AppContainer = createAppContainer(navigator);

export default AppContainer;