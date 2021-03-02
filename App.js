import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';
import Axios from 'axios';
import {Button, Spinner} from 'native-base';
import User from './components/User';

const App = () => {
  const [details, setDetails] = useState(null);

  // const key = 'here is somekey123'

  // const URL = `https://randomuser.me/api/${key}/params`

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    try {
      const {data} = await Axios.get('https://randomuser.me/api/');
      // console.warn(data);
      const details = data.results[0];
      // console.log(details);

      setDetails(details);
    } catch (error) {
      console.log(error);
    }
  };

  if (!details) {
    return (
      <View styles={styles.container}>
        <Spinner color="red" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View>
          <User details={details} />
          <Button style={styles.buttonStyle} onPress={() => fetchDetails()}>
            <Text style={styles.text}>New User</Text>
          </Button>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    marginTop: 30,
    paddingHorizontal: 30,
  },
  text: {
    color: '#fff',
  },
});
export default App;
