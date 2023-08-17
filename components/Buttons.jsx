import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { SHADOWS } from '../constants'

export const CircleButton = ({ imgUrl, handlePress, right }) => {
    return (
        <TouchableOpacity className={` justify-center bg-white absolute rounded-2xl items-center 
        ${right} mx-1 my-1 shadow-sm shadow-gray-500`} style={{ width: 35.3, height: 35 }} onPress={handlePress}>
            <Image source={imgUrl} className="w-7" resizeMode='contain' />
        </TouchableOpacity>
    )
}

export const RectButton = ({ handlePress }) => {
    return (
        <TouchableOpacity className=' justify-center bg-pink-500 rounded-2xl items-center 
        shadow-sm shadow-gray-500' onPress={handlePress}>
            <Text className="p-3 text-white font-semibold">Place a bid</Text>
        </TouchableOpacity>
    )
}

