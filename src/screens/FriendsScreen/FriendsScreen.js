import React from 'react'
import { View, StyleSheet } from 'react-native'

import Text from 'comp/Text'

const FriendsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>FriendsScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default FriendsScreen
