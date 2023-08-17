import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { EthPrice, NFTTitle } from './SubInfo'

const DetailsDisc = ({ data }) => {
    const [text, setText] = useState(data.description.slice(0, 100));
    const [readmore, setReadmore] = useState(false)
    return (
        <View className="space-y-4">
            <View className="flex-row justify-between items-center">
                <NFTTitle title={data.name} subTitle={data.creator} />
                <EthPrice price={data.price} />
            </View>

            <View className="mb-9">
                <Text className="font-bold text-lg">Description</Text>
                <View>
                    <Text className="">
                        {text}
                        {!readmore && '...'}
                        <Text className="font-semibold "
                            onPress={() => {
                                if (!readmore) {
                                    setText(data.description);
                                    setReadmore(true)
                                } else {
                                    setText(data.description.slice(0, 100));
                                    setReadmore(false)
                                }

                            }}>
                            {readmore ? 'Show Less' : 'Read more'}
                        </Text>
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default DetailsDisc