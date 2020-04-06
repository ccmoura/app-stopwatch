import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class Stopwatch extends Component {
  constructor(props){
    super(props);
    this.state = { timer: 0, goButton: 'Go' };
    this.time = null;
    this.go = this.go.bind(this);
    this.clear = this.clear.bind(this);
  }

  go(){
    let s = this.state;
    if(this.time != null){
      clearInterval(this.time);
      this.time = null;
      s.goButton = 'Go';
    } else{
      this.time = setInterval(() => {
        let s = this.state;
        s.timer += 0.1;
        this.setState(s);
      }, 100);
      s.goButton = 'Pause';
    }
    this.setState(s);
  }

  clear(){
    if(this.time != null){
      clearInterval(this.time);
      this.time = null;
    }
    let s = this.state;
    s.timer = 0;
    s.goButton = 'Go';
    this.setState(s);
  }

  render(){
    return (
      <View style={styles.body}>
        <Image source={require('./images/relogio.png')}/>
        <Text style={styles.timer}>{this.state.timer.toFixed(1)}</Text>
        <View style={styles.ButtonArea}>
          <TouchableOpacity style={styles.button} onPress={this.go}>
            <Text style={styles.buttonText}>{this.state.goButton}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.clear}>
            <Text style={styles.buttonText} >Clear</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c1f30'
  },
  timer: {
    color: '#baa07a',
    fontSize: 80,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: -159
  },
  ButtonArea: {
    flexDirection: 'row',
    height: 40,
    marginTop: 80
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#886532',
    height: 40,
    borderRadius: 5,
    margin: 10
  },
  buttonText: {
    fontSize: 17,
    color: 'white'
  }
});

