import React from 'react'
import { View, StyleSheet } from 'react-native'

import Text from 'comp/Text'

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default ProfileScreen
