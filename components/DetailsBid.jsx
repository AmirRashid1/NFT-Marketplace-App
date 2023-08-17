import { View, Text, Image } from 'react-native'
import React from 'react'
import { EthPrice } from './SubInfo'
const DetailsBid = ({ bid }) => {

    return (
        <View className="mx-2 mt-3 mb-7 flex-row justify-between items-center">
            <Image source={bid.image} resizeMode='contain' className="w-16 h-14 " />
            <View >
                <Text className="font-semibold">Bid placed by {bid.name}</Text>
                <Text className="text-xs">{bid.date}</Text>
            </View>
            <EthPrice price={bid.price} />
        </View>
    )
}

export default DetailsBid