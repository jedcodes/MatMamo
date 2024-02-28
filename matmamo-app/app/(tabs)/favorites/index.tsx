import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

export default function FavoritesScreen() {


  return (
    <SafeAreaView className='flex-1 bg-white'>
      <StatusBar style='dark' />
      <ScrollView className='p-2'>
       <Text>Favorites Screen</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

