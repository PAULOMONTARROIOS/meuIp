import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import ip from './assets/ip.png';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }

    this.descobrirIP = this.descobrirIP.bind(this);
  }

  async descobrirIP() {
    this.setState({ data: 'Descobrindo IP...' })

    const ip = await fetch('http://httpbin.org/ip')
    const data = await ip.json();

    this.setState({ data: data.origin })
  }

  render() {
    const { body, container, texto, footer, foto } = styles;

    return (
      <View style={container}>

        <View style={body}>
          <Image style={foto} source={ip} ></Image>
          <Text style={texto}> IP: {this.state.data} </Text>
          <Button title="Descobrir IP" onPress={this.descobrirIP}></Button>
        </View>

        <View sytle={footer}>
          <Text style={texto}> Feito por Paulo Montarroios. </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F2336',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 15,
    margin: 20,
    color: 'white'
  },
  footer: {
    textAlign: 'center'
  },
  foto: {
    width: 200,
    height: 100
  }

});
