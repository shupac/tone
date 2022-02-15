import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

import { customColors } from 'utils/colors'

const TextArea = ({ style, inputRef, ...rest }) => (
  <TextInput
    style={[styles.input, { fontFamily: 'Inter' }, style]}
    multiline={true}
    numberOfLines={4}
    textAlignVertical="top"
    ref={inputRef}
    {...rest}
  />
)

const styles = StyleSheet.create({
  input: {
    backgroundColor: customColors.lightGray,
    color: customColors.black,
    fontSize: 14,
    padding: 15,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 10,
    height: 120,
  },
})

export default TextArea
