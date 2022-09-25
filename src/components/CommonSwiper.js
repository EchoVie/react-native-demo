import React from 'react';
import { Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const screenWidth = Dimensions.get('window').width;

export default function CommonSwiper(props) {
  const bannerHeight = (screenWidth * (props.config?.picHeight || 350)) / (props.config?.picWidth || 750);

  return (
    <Swiper
      {...(props.config || {})}
      style={{
        height: bannerHeight
      }}
    >
    {
      (props.pics || []).map(item => (
        <Image
          key={item}
          source={{ uri: item }}
          style={{
            width: screenWidth,
            height: bannerHeight
          }}
        />
      ))
    }
    </Swiper>
  )
}