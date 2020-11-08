import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const TabBarIcon = ({ name, focused, color }) => (
  <AntDesign
    name={name}
    size={26}
    style={{ marginBottom: -3 }}
    color={color}
  />
);
export default TabBarIcon;
