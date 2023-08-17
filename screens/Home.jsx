import { ActivityIndicator, FlatList, SafeAreaView, Text, View } from "react-native";
import { COLORS, NFTData } from '../constants'
import { HomeHeader, NFTCard, FocusedStatusBar } from '../components'
import { useEffect, useState } from "react";

function Home() {
    const [nftdata, setNftdata] = useState(NFTData);
    const [isLoading, setIsLoading] = useState(true); // Default state is true to show the loading indicator

    const handleSearch = (value) => {
        if (!value.length) return setNftdata(NFTData);
        const filterData = NFTData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
        if (filterData.length) {
            setNftdata(filterData);
        } else {
            setNftdata(NFTData);
        }
    }

    // Replace this with your actual data fetching logic
    useEffect(() => {
        // Simulating data fetching delay with setTimeout (Replace this with actual data fetching)
        setTimeout(() => {
            setIsLoading(false); // Set isLoading to false when data fetching is complete
        }, 400); // Replace this with the actual data fetching time
    }, []);
    return (
        <SafeAreaView className="flex-1">
            {isLoading ? ( // Show ActivityIndicator while isLoading is true
                <ActivityIndicator size="large" color="#0000ff" className="items-center justify-center m-auto " />
            ) : <>

                <FocusedStatusBar background={COLORS.primary} />
                <View className="flex-1">
                    <View className="z-0">
                        <HomeHeader onSearch={handleSearch} />
                        <FlatList data={nftdata} renderItem={({ item }) =>
                            <NFTCard data={item} />
                        } keyExtractor={(item) => item.id} showsVerticalScrollIndicator={false}
                        />
                    </View>
                    <View className="absolute top-0 left-0 right-0 bottom-0 -z-10">
                        <View className="h-80 bg-gray-600" />
                        <View className="flex-1 bg-white" />
                    </View>
                </View>
            </>}

        </SafeAreaView>
    )
}

export default Home