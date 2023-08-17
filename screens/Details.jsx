import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native'
import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsBid, DetailsDisc } from '../components'
import DetailsHeader from '../components/DetailsHeader';
function Details({ route, navigation }) {
    const { data } = route.params;
    const [isLoading, setIsLoading] = useState(true); // Default state is true to show the loading indicator
    // Replace this with your actual data fetching logic
    useEffect(() => {
        // Simulating data fetching delay with setTimeout (Replace this with actual data fetching)
        setTimeout(() => {
            setIsLoading(false); // Set isLoading to false when data fetching is complete
        }, 400); // Replace this with the actual data fetching time
    }, []);

    return (
        <SafeAreaView className="flex-1 bg-white">
            {isLoading ? ( // Show ActivityIndicator while isLoading is true
                <ActivityIndicator size="large" color="#0000ff" className="items-center justify-center m-auto " />
            ) :  // Show page content when isLoading is false
                <>
                    <FocusedStatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
                    <View className="bottom-2 absolute w-full items-center justify-center mx-auto my-3 z-10">
                        <RectButton />
                    </View>
                    <FlatList renderItem={({ item }) => <DetailsBid bid={item} />} data={data.bids} keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={() => (
                            <React.Fragment >

                                <DetailsHeader data={data} navigation={navigation} />
                                <View className="mt-40 mb-3">
                                    <SubInfo />
                                </View>
                                <View className=" mx-3 space-y-4">
                                    <DetailsDisc data={data} />
                                    {data.bids.length > 0 && (
                                        <Text className="font-bold">Current Bids</Text>
                                    )}
                                </View>
                            </React.Fragment>
                        )}
                    />
                </>}
            {/* <FocusedStatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
            <View className="bottom-2 absolute w-full items-center justify-center mx-auto my-3 z-10">
                <RectButton />
            </View>
            <FlatList renderItem={({ item }) => <DetailsBid bid={item} />} data={data.bids} keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                    <React.Fragment >

                        <DetailsHeader data={data} navigation={navigation} />
                        <View className="mt-40 mb-3">
                            <SubInfo />
                        </View>
                        <View className=" mx-3 space-y-4">
                            <DetailsDisc data={data} />
                            {data.bids.length > 0 && (
                                <Text className="font-bold">Current Bids</Text>
                            )}
                        </View>
                    </React.Fragment>
                )}
            /> */}
        </SafeAreaView>
    )
}

export default Details