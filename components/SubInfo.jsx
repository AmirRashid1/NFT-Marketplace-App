import { View, Text, Image } from 'react-native'
import React from 'react'
import { assets } from '../constants'

export const NFTTitle = ({ title, subTitle }) => {
    return (
        <View>
            <Text className="font-bold text-lg">{title}</Text>
            <Text className="text-xs">{subTitle}</Text>
        </View>
    )
}

export const EthPrice = ({ price }) => {
    return (
        <View className="flex-row">
            <Image source={assets.eth} resizeMode='contain' className="w-6 h-6" />
            <Text>${price}</Text>
        </View>
    )
}

export const ImageCmp = ({ imgUrl, index }) => {
    return (
        <Image source={imgUrl} resizeMode='contain' className="w-10 h-8 -mx-2 " />
    )
}

export const People = () => {
    return (
        <View className={`flex-row`}>
            {[assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
                <ImageCmp imgUrl={imgUrl} index={index} key={`People ${index}`} />
            ))}
        </View>
    )
}

export const EndDate = () => {
    return (
        <View className="bg-white px-2 ">
            <Text className="text-xs">Ending In</Text>
            <Text className="text-md font-bold">12hr 31m</Text>
        </View>
    )
}

export const SubInfo = () => {
    return (
        <View className="-my-6 mx-2 items-center flex-row justify-between space-x-10">
            <People />
            <EndDate />
            {/* <Text>SubInfo</Text> */}
        </View>
    )
}