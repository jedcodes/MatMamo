import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import TextInputBar from '@/components/global/TextInputBar'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useShoppingListStore from '@/services/stores/shoppingListStore'

export default function shoppingListScreen() {
  const shoppingList: IProduct[] = useShoppingListStore((state: IShoppingListState) => state.shoppingList)

  let shoppingListContent;

  if(shoppingList.length > 0) {
    shoppingListContent = shoppingList.map((product: IProduct) => {
      return (
        <View key={product.id} className='flex-row items-center justify-between p-2 border-b border-gray-200'>
          <View>
            <Text className='text-lg'>{product.name}</Text>
            <Text className='text-gray-500'>{product.price} kr</Text>
          </View>
          <View className='flex-row items-center'>
            <TouchableOpacity>
              <MaterialCommunityIcons name="minus-circle" size={24} color="#00b96d" />
            </TouchableOpacity>
            <Text className='text-lg'>{product.quantity}</Text>
            <TouchableOpacity>
              <MaterialCommunityIcons name="plus-circle" size={24} color="#00b96d" />
            </TouchableOpacity>
          </View>
        </View>
      )
    })
  } else {
    shoppingListContent =
    <View className='flex-1 justify-center items-center'>
       <Text className='text-gray-500 font-semibold text-3xl'>Handlelisten er tom</Text>
    </View>
  }

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <StatusBar style='dark' />
      <ScrollView className='p-2'>
        <View className='flex-row justify-between items-center'>
          <TextInputBar />
          <TouchableOpacity>
            <MaterialCommunityIcons name="barcode-scan" size={24} color="#00b96d" />
          </TouchableOpacity>
        </View>
          {shoppingListContent}
      </ScrollView>
    </SafeAreaView>
  )
}

