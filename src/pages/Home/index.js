import React from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import CommonSwiper from '@/components/CommonSwiper';
import CommonImage from '@/components/CommonImage';
import Card from './components/Card';

const bannerPics = [
  "https://tva1.sinaimg.cn/large/006y8mN6ly1g9bk8d7e7ej30ku09q77w.jpg",
  "https://tva1.sinaimg.cn/large/006y8mN6ly1g9bk851wr6j30ku09qq74.jpg",
  "https://tva1.sinaimg.cn/large/006y8mN6ly1g9bk87v2x8j30ku09qq46.jpg"
];

const cardList = [
  {
    title: '体检预约',
    description: '实时预约',
    iconName: '59652',
    id: 1
  },
  {
    title: '报告查询',
    description: '一键查询',
    iconName: '59700',
    id: 2
  },
  {
    title: '健康评估',
    description: '了解自身健康',
    iconName: '59660',
    id: 3
  },
  {
    title: '健康干预',
    description: '采集状况',
    iconName: '59661',
    id: 4
  },
  {
    title: '健康档案',
    description: '掌上查询',
    iconName: '59655',
    id: 5
  },
  {
    title: '健康资讯',
    description: '资讯一览',
    iconName: '59663',
    id: 6
  }
]

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-around',
    alignContent: 'space-around'
  },
  item: {
    width: '46%',
    marginBottom: 8,
  }
});

function onCardPress(item) { 
  console.log('item,id', item.id)
}

export default function Home({navigation}) { 
  return <ScrollView>
    <CommonSwiper
      pics={bannerPics}
      config={{
        autoplay: true,
      }}
    />
    <View
      style={styles.wrapper}
    >
      {
        cardList.map(v => (
          <TouchableOpacity
            key={v.id}
            style={styles.item}
            delayLongPress={0.1}
            delayPressOut={0.1}
            pressDuration={0.1}
            onPress={() => { 
              onCardPress(v)
            }}
          >
            <Card
              title={v.title}
              description={v.description}
              iconName={v.iconName}
            />
          </TouchableOpacity>
        ))
      }
    </View>
    <View>
      <CommonImage
        width={750}
        height={255}
        uri="https://tva1.sinaimg.cn/large/006y8mN6ly1g9bjwmyya5j30ku07377e.jpg"
      />
    </View>
  </ScrollView>
}