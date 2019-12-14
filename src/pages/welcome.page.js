import React, { Component } from 'react';
import { View, Text } from 'react-native';

class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
      setTimeout(()=>{
          this.props.navigation.navigate('login');
      },3000)
  }

  render() {
    return (
      <View>
        <Text> Welcome to OnPoint </Text>
      </View>
    );
  }
}

export default WelcomePage;
