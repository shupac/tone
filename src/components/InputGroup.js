import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

import Text from 'comp/Text'

import { customColors } from 'utils/colors'

const InputGroup = ({ style, label, inputRef, ...rest }) => (
  <View style={[styles.container, style]}>
    {label && <Text style={styles.label}>{label}</Text>}
    <TextInput
      style={[
        styles.input,
        // { fontFamily: 'Inter' }
      ]}
      ref={inputRef}
      {...rest}
    />
  </View>
)

const styles = StyleSheet.create({
  label: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 32,
    marginBottom: 5,
  },
  input: {
    height: 50,
    backgroundColor: customColors.lightGray,
    color: customColors.black,
    fontSize: 14,
    paddingLeft: 15,
    borderRadius: 10,
  },
})

export default InputGroup
