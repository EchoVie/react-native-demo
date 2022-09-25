import React from 'react';
import { createIconSet } from '@expo/vector-icons';
const healthIcon= require("./../../assets/fonts/health-icon.ttf");

const fontCodeStart = 59648;
const fontCount = 66;

// iconName转成编码
const glyphMap = Array.from(
  { length: fontCount },
  (_item, index) => fontCodeStart + index
).reduce((pre, cur) => {
  pre[cur] = cur;
  return pre;
}, {});

const CustomIcon = createIconSet(glyphMap, 'health-icon', healthIcon);

export default function CommonIcon({ iconName, config }) {
  return <CustomIcon name={iconName} size={config.size} color={config.color} />;
}