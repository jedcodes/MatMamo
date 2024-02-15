import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useRouter } from 'expo-router';

const {width, height} = Dimensions.get('window')

export default function OnboardingScreen() {
  const router = useRouter()

  const handleDone = () => {
    router.replace('/(tabs)/home/')
  }

  return (
    <View className='flex-1 bg-white'>
      <Onboarding
      onDone={handleDone}
      containerStyles={{paddingHorizontal: 15}}
      pages={[
        {
          backgroundColor: '#023220',
          image: (
            <View style={style.lottie}>
              <LottieView style={{flex: 1}} source={require('../assets/animations/Animation1.json')} autoPlay loop />
            </View>
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#237c6c',
          image: (
           <View style={style.lottie}>
              <LottieView style={{flex: 1}} source={require('../assets/animations/Animation2.json')} autoPlay loop />
            </View>
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#5ebaa6',
          image: (
           <View style={style.lottie}>
              <LottieView style={{flex: 1}} source={require('../assets/animations/Animation3.json')} autoPlay loop />
            </View>
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
/>
    </View>
  )
}


const style = StyleSheet.create({
  lottie: {
    width: width * 0.9,
    height: width,
  }
})