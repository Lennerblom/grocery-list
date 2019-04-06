import React, { Component } from 'react';
import {
    Image,
    Platform,
    ScrollView,
    SectionList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Form,
  } from 'react-native';


export default class  GroceryList extends Component {
    render() {
        return (
            <View style={styles.listContainer}>
                <Text style={styles.listTitle}>All Out Of...</Text>
            <SectionList
              renderItem={({item, index, section}) => 
              <Text key={index}>{item}</Text>}
              renderSectionHeader={({section: {title}}) => (
              <Text style={{fontWeight: 'bold'}}>{title}</Text>
              )}
            sections={[
                {title: 'Fruits', data: ['Apples', 'Oranges', 'Bananas']},
                {title: 'Vegetables', data: ['Carrots', 'Cucumbers', 'Potatoes']},
                {title: 'Dairy', data: ['Milk', 'Yogurt', 'Cheese']},
            ]}
            keyExtractor={(item, index) => item + index}
            />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(210,210,210)',
      },
  listTitle: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  listContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    paddingTop: 30,
  },
})