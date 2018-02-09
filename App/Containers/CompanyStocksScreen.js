import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../../ignite/DevScreens/DevTheme'
import Table from 'react-native-simple-table'


// More info here: https://facebook.github.io/react-native/docs/flatlist.html

// Styles
import styles from './Styles/CompanyStocksScreenStyle'

class CompanyStocks extends React.Component {
  /* ***********************************************************
  * STEP 1
  * This is an array of objects with the properties you desire
  * Usually this should come from Redux mapStateToProps
  *************************************************************/
  state = {
    dataObjects: [
      { date: "2017-07-03", open: "2305.25", high: "2323.74", low: "2301.55", close: "2323.74", volumes: 335260 },
      { date: "2017-07-04", open: "2317.64", high: "2317.64", low: "2293.08", close: "2294.27", volumes: 372406 },
      { date: "2017-07-05", open: "2298.75", high: "2307.87", low: "2294.14", close: "2307.49", volumes: 487164 },
      { date: "2017-07-06", open: "2309.29", high: "2323.94", low: "2288.76", close: "2300.74", volumes: 415301 },
      { date: "2017-07-07", open: "2299.26", high: "2306.23", low: "2290.98", close: "2295.82", volumes: 392343 },
      { date: "2017-07-10", open: "2305.52", high: "2316.01", low: "2290.47", close: "2300.66", volumes: 458777 },
      { date: "2017-07-11", open: "2303.48", high: "2312.57", low: "2294.20", close: "2297.73", volumes: 581171 },
      { date: "2017-07-12", open: "2297.08", high: "2343.27", low: "2297.08", close: "2341.54", volumes: 820866 },
      { date: "2017-07-13", open: "2335.49", high: "2350.83", low: "2333.08", close: "2350.83", volumes: 704379 },
      { date: "2017-07-14", open: "2349.47", high: "2351.05", low: "2333.11", close: "2350.43", volumes: 499207 },
      { date: "2017-07-17", open: "2353.46", high: "2379.20", low: "2353.46", close: "2372.17", volumes: 627881 },
      { date: "2017-07-18", open: "2367.99", high: "2381.08", low: "2355.40", close: "2360.75", volumes: 623660 },
      { date: "2017-07-19", open: "2364.00", high: "2378.42", low: "2362.34", close: "2374.31", volumes: 702625 },
      { date: "2017-07-20", open: "2375.73", high: "2387.10", low: "2357.35", close: "2358.50", volumes: 738050 },
      { date: "2017-07-21", open: "2356.90", high: "2370.28", low: "2342.42", close: "2343.10", volumes: 607409 },
      { date: "2017-07-24", open: "2344.63", high: "2345.94", low: "2329.49", close: "2334.69", volumes: 566451 },
      { date: "2017-07-25", open: "2337.80", high: "2346.12", low: "2328.87", close: "2341.36", volumes: 845693 },
      { date: "2017-07-26", open: "2344.28", high: "2363.74", low: "2344.28", close: "2360.26", volumes: 614891 },
      { date: "2017-07-27", open: "2361.54", high: "2363.85", low: "2343.57", close: "2350.91", volumes: 507701 }
    ]
  }

  columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      width: 100
    },
    {
      title: 'Open',
      dataIndex: 'open'
    },
    {
      title: 'High',
      dataIndex: 'high'
    },
    {
      title: 'Low',
      dataIndex: 'low'
    },
    {
      title: 'Close',
      dataIndex: 'close'
    }
  ];

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
        <Text style={styles.label}>{item.date}</Text>
        <Text style={styles.label}>{item.open}</Text>
        <Text style={styles.label}>{item.high}</Text>
        <Text style={styles.label}>{item.low}</Text>
        <Text style={styles.label}>{item.close}</Text>
        <Text style={styles.label}>{item.volumes}</Text>
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
    <Text style={styles.label}>  </Text>

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
          <Image source={Images.backButton} />
        </TouchableOpacity>
        <Table height={480} columnWidth={60} columns={this.columns} dataSource={this.state.dataObjects} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyStocks)

/**
 * 
<FlatList
          contentContainerStyle={styles.listContent}
          data={this.state.dataObjects}
          renderItem={this.renderRow}
          numColumns={1}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter} 
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.renderSeparator}
        />
 */