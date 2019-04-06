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
   import {CheckBox} from 'react-native-elements';


export default class  GroceryList extends Component {
    constructor(props){
        super(props);
        this.state = {
            checked: false,
        }
    }
    render() {
        return (
          <View style={styles.container}>
            <View style={styles.listContainer}>
                <Text style={styles.listTitle}>All Out Of...</Text>
            <SectionList
              renderItem={({item, index, section, separators}) => 
              <View key={index}><CheckBox title={item} checked={this.state.checked}/></View>}
              renderSectionHeader={({section: {title}}) => (
              <Text style={{fontWeight: 'bold'}}>{title}</Text>
              )}
            sections={[
                {title: 'Fruits', data: ['Oranges', 'Bananas']},
                {title: 'Vegetables', data: ['Carrots', 'Cucumbers', 'Potatoes']},
                {title: 'Dairy', data: ['Milk', 'Yogurt', 'Cheese']},
            ]}
            keyExtractor={(item, index) => item + index}
            />
            
            </View>

            <CheckBox
              title='Apples2'
              checked={this.state.checked}
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
    textAlign: 'left',
  },
  listContainer: {
    alignItems: 'flex-start',
    marginHorizontal: 50,
    paddingTop: 30,
  },
})