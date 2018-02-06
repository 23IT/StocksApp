import { StackNavigator } from 'react-navigation'
import CompanyListScreen from '../Containers/CompanyListScreen'
import CompanyStocksScreen from '../Containers/CompanyStocksScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  CompanyStocksScreen: { screen: CompanyStocksScreen },
  CompanyListScreen: { screen: CompanyListScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
