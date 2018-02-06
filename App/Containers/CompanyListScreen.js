import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import CompanyReduxActions from '../Redux/CompanyRedux'
import { Images } from '../../ignite/DevScreens/DevTheme'

// More info here: https://facebook.github.io/react-native/docs/flatlist.html

// Styles
import styles from './Styles/CompanyListScreenStyle'

class CompanyList extends React.Component {

  openCompanyStocks = (item) => {
    console.log(item);
    //alert('HI!');
    this.props.navigation.navigate('CompanyStocksScreen')
  }

  componentDidMount () {
    console.log(this.props);
    this.props.getCompanies();
  }

  /* ***********************************************************
  * STEP 1
  * This is an array of objects with the properties you desire
  * Usually this should come from Redux mapStateToProps
  *************************************************************/
  state = {
    dataObjects: [
      {title: 'WIG20'},
      {title: 'MWIG40'},
      {title: 'SWIG80'},
      {title: 'WIG'},
      {title: 'WIG-BANKI'},
      {title: 'WIG-BUDOW'},
      {title: 'WIG-CEE'},
      {title: 'WIG-CHEMIA'},
      {title: 'WIG-DEWEL'},
      {title: 'WIG-ENERG'},
      {title: 'WIG-GORNIC'},
      {title: 'WIG-INFO'},
      {title: 'WIG-LEKI'},
      {title: 'WIG-MEDIA'},
      {title: 'WIG-MOTO'},
      {title: 'WIG-NRCHOM'},
      {title: 'WIG-ODZIEZ'},
      {title: 'WIG-POLAND'},
      {title: 'WIG-SPOZYW'},
      {title: 'WIG-SUROWC'},
      {title: 'WIG-TELKOM'},
      {title: 'WIG-UKRAIN'},
      {title: '11BIT'},
      {title: '4FUNMEDIA'},
      {title: 'AATHOLD'},
      {title: 'ABADONRE'},
      {title: 'ABCDATA'},
      {title: 'ABMSOLID'},
      {title: 'ABPL'},
      {title: 'ACAUTOGAZ'},
      {title: 'ACTION'},
      {title: 'ADIUVO'},
      {title: 'AGORA'},
      {title: 'AGROTON'},
      {title: 'AGROWILL'},
      {title: 'AILLERON'},
      {title: 'AIRWAY'},
      {title: 'ALCHEMIA'},
      {title: 'ALIOR'},
      {title: 'ALMA'},
      {title: 'ALTA'},
      {title: 'ALTUSTFI'},
      {title: 'ALUMETAL'},
      {title: 'AMBRA'},
      {title: 'AMICA'},
      {title: 'AMREST'},
      {title: 'APATOR'},
      {title: 'APLISENS'},
      {title: 'APSENERGY'},
      {title: 'ARCHICOM'},
      {title: 'ARCTIC'},
      {title: 'ARCUS'},
      {title: 'ARTERIA'},
      {title: 'ARTIFEX'},
      {title: 'ASBIS'},
      {title: 'ASMGROUP'},
      {title: 'ASSECOBS'},
      {title: 'ASSECOPOL'},
      {title: 'ASSECOSEE'},
      {title: 'ASTARTA'},
      {title: 'ATAL'},
      {title: 'ATENDE'},
      {title: 'ATLANTAPL'},
      {title: 'ATLANTIS'},
      {title: 'ATLASEST'},
      {title: 'ATM'},
      {title: 'ATMGRUPA'},
      {title: 'ATREM'},
      {title: 'AUGA'},
      {title: 'AUTOPARTN'},
      {title: 'AVIAAML'},
      {title: 'AVIASG'},
      {title: 'AWBUD'},
      {title: 'B3SYSTEM'},
      {title: 'BAHOLDING'},
      {title: 'BALTONA'},
      {title: 'BBIDEV'},
      {title: 'BEDZIN'},
      {title: 'BENEFIT'},
      {title: 'BEST'},
      {title: 'BETACOM'},
      {title: 'BGZBNPP'},
      {title: 'BIK'},
      {title: 'BIOMEDLUB'},
      {title: 'BIOTON'},
      {title: 'BMPAG'},
      {title: 'BOGDANKA'},
      {title: 'BORYSZEW'},
      {title: 'BOS'},
      {title: 'BOWIM'},
      {title: 'BRASTER'},
      {title: 'BSCDRUK'},
      {title: 'BUDIMEX'},
      {title: 'BUDOPOL'},
      {title: 'BUMECH'},
      {title: 'BUWOG'},
      {title: 'BYTOM'},
      {title: 'BZWBK'},
      {title: 'CAPITAL'},
      {title: 'CCC'}
    ]
  }

  /* ***********************************************************
  * STEP 2
  * `renderRow` function. How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={item.title} description={item.description} />
  *************************************************************/
  renderRow ({item}) {
    return (
      <View style={styles.row}>
        <TouchableHighlight onPress={() => {this.openCompanyStocks(item)}} style={styles.button}>
          <Text style={styles.boldLabel}>{item.title}</Text>
        </TouchableHighlight>
      </View>
    )
  }

  /* ***********************************************************
  * STEP 3
  * Consider the configurations we've set below.  Customize them
  * to your liking!  Each with some friendly advice.
  *************************************************************/
  // Render a header?
  renderHeader = () =>
    <Text style={[styles.label, styles.sectionHeader]}> - Header - </Text>

  // Render a footer?
  renderFooter = () =>
    <Text style={[styles.label, styles.sectionHeader]}> - Footer - </Text>

  // Show this when data is empty
  renderEmpty = () =>
    <Text style={styles.label}> - Nothing to See Here - </Text>

  renderSeparator = () =>
    <Text style={styles.lineStyle}></Text>

  // The default function if no Key is provided is index
  // an identifiable key is important if you plan on
  // item reordering.  Otherwise index is fine
  keyExtractor = (item, index) => index

  // How many items should be kept im memory as we scroll?
  oneScreensWorth = 20

  // extraData is for anything that is not indicated in data
  // for instance, if you kept "favorites" in `this.state.favs`
  // pass that in, so changes in favorites will cause a re-render
  // and your renderItem will have access to change depending on state
  // e.g. `extraData`={this.state.favs}

  // Optimize your list if the height of each item can be calculated
  // by supplying a constant height, there is no need to measure each
  // item after it renders.  This can save significant time for lists
  // of a size 100+
  // e.g. itemLayout={(data, index) => (
  //   {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
  // )}

  goBack = () => {
    this.props.navigation.goBack();
  }

  render () {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={this.goBack} style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 10,
          zIndex: 10
        }}>
          <Image source={Images.closeButton} />
        </TouchableOpacity>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={this.state.dataObjects}
          renderItem={this.renderRow.bind(this)}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
    //records: state.records.data
    companies: state.companies.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCompanies: () => dispatch(CompanyReduxActions.companyReduxRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList)
