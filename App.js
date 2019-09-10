import React, {Component} from 'react';
import {Text, View} from 'react-native';
import NfcManager from 'react-native-nfc-manager';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      supported: false,
    };
  }

  componentDidMount() {
    NfcManager.isSupported()
      .then(supported => {
        console.log('done');
        this.setState({supported});
      })
      .catch(supported => {
        console.log('done');
        this.setState({supported});
      });
  }

  componentWillUnmount() {
    if (this._stateChangedSubscription) {
      this._stateChangedSubscription.remove();
    }
  }

  render() {
    let {supported} = this.state;
    return (
      <View style={{flex: 1}}>
        <Text>{`Is NFC supported ? ${supported}`}</Text>
      </View>
    );
  }
}

export default App;
