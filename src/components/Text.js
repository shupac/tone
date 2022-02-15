import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'

import { customColors } from 'utils/colors'

const MyText = ({ children, style, ...rest }) => (
  <Text
    style={[
      {
        // fontFamily: 'Inter',
        color: customColors.black,
      },
      style,
    ]}
    {...rest}
  >
    {children}
  </Text>
)

export default MyText
