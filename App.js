import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import Analytics from './Analytics';
import Test from './Test';


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView>
        <StatusBar />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />
          <Test />
        </ScrollView>
      </SafeAreaView>
    );
  }

}


export default App;
