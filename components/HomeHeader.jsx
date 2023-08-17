import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { FONTS, assets } from '../constants'

const HomeHeader = ({ onSearch }) => {
    return (
        <View className=" bg-slate-500 shadow-md">
            <View className="flex-row justify-between px-2 pt-2 ">
                <Image source={assets.logo} resizeMode='contain' className="w-28 " />
                <Image source={assets.person01} resizeMode='contain' className="w-11 h-10 " />
                <Image source={assets.badge} resizeMode='contain' className="w-5 h-6 absolute right-2 my-6" />
            </View>
            <View className="space-y-1 px-2  ">
                <Text className="text-white opacity-80 text-xs">Hello, Amir 👋</Text>
                <Text className={`text-white font-bold text-lg`}>Let's find a masterpeice</Text>
            </View>
            <View className="flex-row bg-gray-400 items-center py-1 ">
                <Image source={assets.search} resizeMode='contain' className="w-7 h-6 mx-1" />
                <TextInput className="px-2 py-2" placeholder='Search NFT?' placeholderTextColor={'#fff'} onChangeText={onSearch} />
            </View>
        </View>
    )
}

export default HomeHeader