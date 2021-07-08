import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const AppWrapper = (props) => {
  const { background, children } = props
  console.log(props)
  return (
    <LinearGradient colors={['#fbfbfb', '#000']} style={styles.container}>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

AppWrapper.propTypes = {}

export default AppWrapper
