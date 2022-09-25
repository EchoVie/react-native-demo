import React from 'react';
import { View, Text } from 'react-native';

export default function Home({ route, navigation }) {
  const { title } = route.params;
  return <View>
    <Text>{title}</Text>
    <Text>这是登录页面</Text>
  </View>
}