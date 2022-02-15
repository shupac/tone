import React from 'react'
import {
  View,
  StyleSheet,
  Platform,
  Modal,
  ActivityIndicator,
} from 'react-native'

const Loader = ({ visible, containerStyle, ...rest }) => (
  <Modal
    style={Platform.OS === 'web' && styles.modal}
    transparent={true}
    visible={visible}
  >
    <View style={[styles.container, containerStyle]}>
      <ActivityIndicator size="large" color="#FFF" {...rest} />
    </View>
  </Modal>
)

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    zIndex: 1000,
    width: '100vw',
    height: '100vh',
    borderWidth: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
})

export default Loader
