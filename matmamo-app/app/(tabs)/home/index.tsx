import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  return (
   <SafeAreaView className='flex-1 p-2'>
    <StatusBar style='dark' />
    <Text>Home Screen</Text>
   </SafeAreaView>
  )
}