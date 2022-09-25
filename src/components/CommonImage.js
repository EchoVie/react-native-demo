import React from 'react';
import { Image, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function CommonImage(props) {
  const imageHeight = (screenWidth * (props.height || 255)) / (props.width || 750);

  return (
    <Image
      source={{ uri: props.uri }}
      style={{
        width: screenWidth,
        height: imageHeight
      }}
    />
  )
}