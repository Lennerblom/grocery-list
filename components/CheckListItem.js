import React, { Component } from 'react';
import Checkbox from 'react-native-elements';

export default class CheckListItem extends Component {
    render() {
        return (
            <CheckBox
              title='Click Here'
              checked={this.state.checked}
/>
        );
    }
}