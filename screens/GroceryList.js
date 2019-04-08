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
            checked: Boolean,
        }
    }

    handleChecked = (e) => {
        if(e.target.checked === false){
          e.target.checked = true;
        }
        else{ e.target.checked = false};
    }
    render() {
        return (
          <View style={styles.container}>
            <View style={styles.listContainer}>
                <Text style={styles.listTitle}>All Out Of...</Text>
            <SectionList
              renderItem={({item, index}) => 
              <View key={index}>
                <CheckBox 
                  title={item} 
                //   checkedIcon='dot-circle-o'
                //   uncheckedIcon='circle-o' 
                  checked={false}
                  onPress={this.handleChecked}
                  />
              </View>}
              renderSectionHeader={({section: {title}}) => (
              <Text style={{fontWeight: 'bold'}}>{title}</Text>
              )}
            sections={[
                {title: 'Fruits', data: ['Apples','Oranges', 'Bananas', 'Grapes']},
                {title: 'Vegetables', data: ['Broccoli','Carrots', 'Cucumbers', 'Potatoes', 'Peppers', 'Tomatoes']},
                {title: 'Dairy', data: ['Milk', 'Yogurt', 'Cheese','Cream Cheese', 'Eggs', 'Butter']},
            ]}
            keyExtractor={(item, index) => item + index}
            ScrollView={horizontal=true}
            />           
            </View>
          </View>
      
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(210,210,210)',
    width: 595,
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