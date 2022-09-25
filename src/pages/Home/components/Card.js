import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CommonIcon from '@/components/CommonIcon';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: '5px',
    padding: 10,
  },
  title: {
    fontSize: 16
  },
  description: {
    color: '#999',
    fontSize: 12,
    marginTop: 5
  }
});

function Card(props) {
  const { title, description, iconName} = props;
  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View>
        <CommonIcon
          iconName={iconName}
          config={{
            size: 26,
            color: "#2CDED4"
          }}
        />
      </View>
    </View>
  )
}

export default Card;
