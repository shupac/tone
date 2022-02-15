import React from 'react'
import { View } from 'react-native'

import { customColors } from 'utils/colors'

const Chevron = ({
  color = customColors.gray,
  rotate = 0,
  size = 1,
  style = {},
  thickness = 1.5,
  direction = 'left', // ['left', 'right', 'up', 'down']
}) => {
  const rotation = {
    left: -45,
    right: 135,
    up: 45,
    down: -135,
  }

  const margins = {
    left: 'marginLeft',
    right: 'marginRight',
    up: 'marginTop',
    down: 'marginBottom',
  }

  return (
    <View
      style={[
        {
          backgroundColor: 'transparent',
          borderColor: color,
          borderTopWidth: thickness * size,
          borderLeftWidth: thickness * size,
          width: 7 * size,
          height: 7 * size,
          transform: [{ rotate: `${rotation[direction]}deg` }],
          margin: 2,
          [margins[direction]]: 5,
        },
        style,
      ]}
    />
  )
}

export default Chevron
