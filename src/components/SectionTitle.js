import React from 'react'

import Text from 'comp/Text'

const SectionTitle = ({ children }) => (
  <Text
    style={{
      fontSize: 16,
      lineHeight: 32,
      fontWeight: '500',
      marginBottom: 5,
    }}
  >
    {children}
  </Text>
)

export default SectionTitle
