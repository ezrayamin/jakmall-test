import { View, Text } from 'react-native'
import React from 'react'

export default function GoTopButton({ isTop }: { isTop: boolean }) {
    if (isTop) {
        return (
        <View className='p-4 bg-blue-300 rounded-lg'>
            <Text className='text-center'>Top</Text>
        </View>
        )
    }
    return (
        <View className='p-4 bg-red-300 rounded-lg'>
            <Text className='text-center'>Go Top</Text>
        </View>
    )
}