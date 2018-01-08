import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import ButtonBox from '../../ignite/DevScreens/ButtonBox'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {

  openCompanyList = () => {
    this.props.navigation.navigate('CompanyListScreen')
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Text style={styles.sectionText}>
              Main App Screen. Choose an option below:
            </Text>
          </View>

          <ButtonBox onPress={this.openCompanyList} style={styles.componentButton} image={Images.components} text='Company Indexes' />
        </ScrollView>
      </View>
    )
  }
}
