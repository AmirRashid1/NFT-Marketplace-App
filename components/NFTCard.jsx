import { useNavigation } from '@react-navigation/native'
import { View, Text, Image } from 'react-native'
import { COLORS, SIZES, SHADOWS, assets } from '../constants'
import { CircleButton, RectButton } from './Buttons';
import { SubInfo, EthPrice, NFTTitle } from './SubInfo';

const NFTCard = ({ data }) => {
    const navigation = useNavigation();
    return (
        <View className="my-4 rounded-md mx-2" >
            <View className="bg-white  rounded-l-xl rounded-r-xl">
                <Image source={data.image} resizeMode='cover' className="w-full h-60 rounded-tl-xl rounded-tr-xl" />
                <CircleButton imgUrl={assets.heart} right="right-2 top-3 " />
                <SubInfo />
                <View className="pt-5 mx-2 my-2">
                    <NFTTitle title={data.name} subTitle={data.creator} />
                    <View className="flex-row justify-between mt-2">
                        <EthPrice price={data.price} />
                        <RectButton handlePress={() => navigation.navigate('Details', { data })} />
                    </View>
                </View>
            </View>
            {/* <Text className="text-white bg-slate-400">{data.name}</Text> */}
        </View>
    )
}

export default NFTCard