import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import Text from 'comp/Text'

import { customColors } from 'utils/colors'

const ButtonToggle = ({ style, options, selected, onSelect }) => {
  return (
    <View style={[styles.container, style]}>
      {options.map(({ key, label }) => {
        return (
          <TouchableOpacity
            style={[styles.option, selected === key && styles.optionActive]}
            activeOpacity={0.8}
            onPress={() => onSelect(key)}
            key={key}
          >
            <Text
              style={[styles.label, selected === key && styles.labelActive]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 44,
    borderRadius: 10,
    backgroundColor: customColors.lightGray,
  },
  option: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: customColors.lightGray,
  },
  optionActive: {
    backgroundColor: 'white',
    borderColor: customColors.primary,
  },
  label: {
    fontSize: 14,
    color: customColors.gray,
  },
  labelActive: {
    color: customColors.black,
  },
})

export default ButtonToggle
