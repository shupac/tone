import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useTheme } from '@react-navigation/native'

import Text from 'comp/Text'

const Button = ({ label, inputRef, style, ...rest }) => {
  const { colors } = useTheme()

  return (
    <TouchableOpacity activeOpacity={0.8} ref={inputRef} {...rest}>
      <View
        style={[
          {
            backgroundColor: colors.primary,
            height: 60,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          },
          style,
        ]}
      >
        <Text
          style={{
            fontWeight: '500',
            fontSize: 18,
            color: '#FFFFFF',
          }}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button
