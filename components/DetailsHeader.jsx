import { View, Text, Image } from 'react-native'
import React from 'react'
import { CircleButton } from './Buttons'
import { assets } from '../constants'

const DetailsHeader = ({ data, navigation }) => {
    return (
        <View className="w-full h-24 ">
            <Image source={data.image} resizeMode='cover' className="h-64 w-full" />
            <CircleButton imgUrl={assets.left} handlePress={() => navigation.goBack()} />
            <CircleButton imgUrl={assets.heart} right="right-2 top-3" />
        </View>
    )
}

export default DetailsHeader