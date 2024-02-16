import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  return (
   <SafeAreaView className='flex-1 p-2 bg-primaryBg'>
    <StatusBar style='dark' />
    <Text className='text-primary text-3xl font-extrabold'>Home Screen</Text>
   </SafeAreaView>
  )
}