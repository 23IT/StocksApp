import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";

class SymbolList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            page: 1,
            seed: 1,
            sword: '',
            error: null,
            refreshing: false
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const { page, seed, sword } = this.state;
        let url = 'http://discovery.local:8000/daily/' + page + (sword.length > 0 ? '?sword=' + sword : '');
        this.setState({ loading: true });

        let req = fetch((url), {
            method: 'GET'
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: page === 1 ? res.results : [...this.state.data, ...res.results],
                    error: res.error || null,
                    loading: false,
                    refreshing: false
                });
            })
            .catch(error => {
                this.setState({ error, loading: false });
                alert(error);
            });
    };

    handleRefresh = () => {
        this.setState(
            {
                page: 1,
                seed: this.state.seed + 1,
                refreshing: true
            },
            () => {
                this.makeRemoteRequest();
            }
        );
    };

    handleLoadMore = () => {
        this.setState(
            {
                page: this.state.page + 1
            },
            () => {
                this.makeRemoteRequest();
            }
        );
    };
    handleReset = () => {
        this.setState(
            {
                page: 1,
                seed: 1,
                sword: '',
                refreshing: true,
                data: [],
            },
            () => {
                this.makeRemoteRequest();
            }
        );
    };

    handleFilter = (text) => {
        this.setState(
            {
                page: 1,
                seed: 1,
                sword: text,
                data: [],
                refreshing: true
            },
            () => {
                this.makeRemoteRequest();
            }
        );
    };

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "14%"
                }}
            />
        );
    };

    renderHeader = () => {
    return (
            <SearchBar placeholder="Type Here..."
             lightTheme round
             onClearText={this.handleReset}
             onChangeText={(text) => this.handleFilter(text)}
             clearIcon={{name: 'clear'}}
             />
        );
    };

    renderFooter = () => {
        if (!this.state.loading) return null;

        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: "#CED0CE"
                }}
            >
                <ActivityIndicator animating size="large" />
            </View>
        );
    };

    render() {
        return (
            <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
                <FlatList
                data={this.state.data}
                renderItem={({ item }) => (
                    <ListItem
                    title={`${item.symbol}`}
                    containerStyle={{ borderBottomWidth: 0 }}
                    />
                )}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={this.renderSeparator}
                ListHeaderComponent={this.renderHeader}
                ListFooterComponent={this.renderFooter}
                onRefresh={this.handleRefresh}
                refreshing={this.state.refreshing}
                onEndReached={this.handleLoadMore}
                onEndReachedThreshold={50}
                />
      </List>
        );
    }
}

export default SymbolList;