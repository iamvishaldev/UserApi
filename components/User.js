import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Container, Header, Card, CardItem, H1} from 'native-base';
import moment from 'moment';

const User = ({details}) => {
  return (
    <Card style={styles.card}>
      <CardItem cardBody style={styles.cardItem}>
        <Image
          style={styles.image}
          source={{
            uri: details.picture?.large,
          }}
        />
      </CardItem>
      <CardItem cardBody style={styles.cardItem}>
        <H1 style={styles.text}>
          {details.name?.title} {details.name?.first} {details.name?.last}
        </H1>
      </CardItem>
      <CardItem bordered style={styles.cardItem}>
        <Text style={styles.text}>{details.cell}</Text>
      </CardItem>
      <CardItem bordered style={styles.cardItem}>
        <Text style={styles.text}>{details.email}</Text>
      </CardItem>
      <CardItem bordered style={styles.cardItem}>
        <Text style={styles.text}>
          {details.location.street?.name} {details.location.country}
        </Text>
      </CardItem>
      <CardItem footer style={styles.cardItem}>
        <Text style={styles.text}>
          <Text style={styles.text2}>Registered at : </Text>{' '}
          {moment(details.registered?.text).format('DD-MM-YY')}
        </Text>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#4f8a8b',
    borderColor: '#4f8a8b',
    borderWidth: 2,
    borderRadius: 10,
  },
  cardItem: {
    backgroundColor: '#4f8a8b',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#fbd46d',
    marginTop: -50,
  },
  text: {
    color: '#eeeeee',
  },
  text2: {
    color: '#fbd46d',
  },
});

export default User;
