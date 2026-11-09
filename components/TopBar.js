import React from 'react'
import {View, Text} from 'react-native'

export default function TopBar(){
    return (
      <View className="flex-row items-center justify-between bg-emerald-500 px-5 py-4">
        <Text className="text-xl font-bold">Ze Application</Text>

        <Text className="text-2xl">☰</Text>
      </View>
    );
}
