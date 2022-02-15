import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'

import Chevron from 'comp/Chevron'
import { removeLeadingZero } from 'utils'
import { customColors } from 'utils/colors'

const Picker = ({
  containerStyle,
  style = {},
  items,
  value,
  children,
  pickerRef,
  testID,
  ...rest
}) => {
  return (
    <View style={[styles.container, containerStyle]} testID={testID}>
      <RNPickerSelect
        style={getPickerStyles(style)}
        useNativeAndroidPickerStyle={false}
        fixAndroidTouchableBug={true}
        Icon={() => (
          <Chevron
            direction="down"
            style={{
              top: -3,
              pointerEvents: 'none',
            }}
          />
        )}
        value={value}
        items={items.map((item) => {
          const label = removeLeadingZero(item.label)
          const color =
            item.value === value ? customColors.black : customColors.gray
          return Platform.OS === 'android'
            ? { ...item, label, color }
            : { ...item, label }
        })}
        ref={pickerRef}
        {...rest}
      >
        {children}
      </RNPickerSelect>
    </View>
  )
}

export const pickerStyles = {
  backgroundColor: customColors.lightGray,
  color: customColors.black,
  fontSize: 14,
  borderRadius: 10,
  height: 50,
  paddingLeft: 15,
  fontFamily: 'Inter',
}

const getPickerStyles = (style) =>
  StyleSheet.create({
    inputIOS: {
      ...pickerStyles,
      ...style,
    },
    inputAndroid: {
      ...pickerStyles,
      ...style,
    },
    iconContainer: {
      top: 22,
      right: 15,
    },
  })

const styles = StyleSheet.create({
  container: {},
})

export default Picker
