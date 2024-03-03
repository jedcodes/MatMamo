import { View, Text, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import TextInputBar from '@/components/global/TextInputBar'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { fetchAllProducts } from '@/services/api/apiService'

export default function SerachScreen() {
    const [searchedResults, setSearchedResults] = useState<IProduct[]>([])
  const searchRef:React.MutableRefObject<string> = useRef('')

   const handleInputChange = async () => {
    const data = await fetchAllProducts(searchRef.current)

    setSearchedResults(data)
  }
  return (
    <SafeAreaView className='p-2'>
        <StatusBar style='dark' />
         <View className='flex-row justify-between items-center'>
          <TextInputBar searchRef={searchRef} handleInputChange={handleInputChange} />
          <TouchableOpacity>
            <MaterialCommunityIcons name="barcode-scan" size={24} color="#00b96d" />
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}