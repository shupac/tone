import React from 'react'
import { TouchableOpacity, View, Image } from 'react-native'
import { useTheme } from '@react-navigation/native'

import Text from 'comp/Text'

const icons = {
  plus: require('assets/icon-plus.png'),
}

const DashButton = ({ title, icon, large, ...rest }) => {
  const { colors } = useTheme()

  return (
    <TouchableOpacity activeOpacity={0.8} {...rest}>
      <View
        style={{
          height: large ? 150 : 70,
          borderRadius: 10,
          borderWidth: 2,
          borderStyle: 'dashed',
          borderColor: '#E0E6EB',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon && (
          <Image
            style={{ width: 20, height: 20, marginRight: 5 }}
            source={icons[icon]}
          />
        )}
        <Text
          style={{
            fontWeight: '500',
            fontSize: 14,
            color: colors.primary,
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default DashButton
