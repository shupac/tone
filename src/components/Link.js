import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native'

import Text from 'comp/Text'

const Link = ({ title, textStyle, ...rest }) => {
  const { colors } = useTheme()

  return (
    <TouchableOpacity
      hitSlop={{ top: 10, bottom: 10, left: 0, right: 0 }}
      activeOpacity={0.8}
      {...rest}
    >
      <Text
        style={{
          fontWeight: '700',
          fontSize: 13,
          lineHeight: 18,
          color: colors.primary,
          ...textStyle,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default Link
