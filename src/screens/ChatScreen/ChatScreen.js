import { useState, useEffect, useRef } from 'react'
import { View, StyleSheet, ScrollView, TextInput } from 'react-native'

import Text from 'comp/Text'
import InputGroup from 'comp/InputGroup'

import { customColors } from 'utils/colors'

const ChatScreen = () => {
  const [message, set_message] = useState('')

  return (
    <View style={styles.container}>
      <ScrollView></ScrollView>
      <TextInput
        style={styles.messageInput}
        value={message}
        onChangeText={set_message}
        placeholder="New Message"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  messageInput: {
    height: 30,
    backgroundColor: customColors.lightGray,
    color: customColors.black,
    fontSize: 12,
    paddingLeft: 10,
    borderRadius: 15,
  },
})

export default ChatScreen
