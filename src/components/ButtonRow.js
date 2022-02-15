import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import Text from 'comp/Text'

import { customColors } from 'utils/colors'

const ButtonRow = ({ style, options, selected, onSelect, testID }) => {
  return (
    <View style={[styles.container, style]}>
      {options.map(({ key, label }, index) => {
        return (
          <TouchableOpacity
            style={[
              styles.option,
              { marginLeft: !index ? 0 : 10 },
              selected === key && styles.optionActive,
            ]}
            activeOpacity={0.8}
            onPress={() => onSelect(key)}
            key={key}
            testID={`${testID}-${key}`}
          >
            <Text
              style={[
                styles.label,
                selected && styles.labelInActive,
                selected === key && styles.labelActive,
              ]}
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
  },
  option: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: customColors.lightGray,
    backgroundColor: customColors.lightGray,
  },
  optionActive: {
    backgroundColor: 'white',
    borderColor: customColors.primary,
  },
  label: {
    fontSize: 14,
    color: customColors.black,
  },
  labelInActive: {
    color: customColors.gray,
  },
  labelActive: {
    color: customColors.black,
  },
})

export default ButtonRow
