import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import GoTopButton from './GoTopButton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import JokeList from './JokeList';

export default function CategoryDropdown({ categoryName, number, isTop, reorderJokeCategories }: { categoryName: string, number: number, isTop: boolean, reorderJokeCategories: (selectedIndex: number) => void  }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Pressable
            onPress={() => {
                setIsOpen(currentStatus => {
                    return !currentStatus;
                })
            }}
        >
            <View
                className='flex-row w-screen justify-between items-center my-2 bg-gray-300 p-3'
            >
                {/* left side */}
                <View
                    className='flex-row'
                >
                    <Text className='text-lg mr-3'>{number}. </Text>
                    <Text className='text-left text-lg'>{categoryName}</Text>
                </View>
                {/* right side */}
                <View
                    className='flex-row w-2/4 justify-between items-center'
                >
                    <Pressable
                        className='w-2/3 px-3'
                        onPress={() => {
                            if (isTop) {
                                return;
                            }
                            const index = number - 1
                            reorderJokeCategories(index)
                        }}
                    >

                        <GoTopButton
                            isTop={number == 1}
                        />
                    </Pressable>

                    <FontAwesome5
                        name={`caret-${isOpen ? 'up' : 'down'}`}
                        size={24}
                    />
                </View>
            </View>
            {
                isOpen ? <JokeList
                    categoryName={categoryName}

                /> : <View />
            }
        </Pressable>
    )
}