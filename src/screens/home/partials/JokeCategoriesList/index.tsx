import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, FlatList, Pressable } from 'react-native'
import CategoryDropdown from './CategoryDropdown';

export default function JokeCategoriesList({ categories, reorderJokeCategories }: { categories: string[], reorderJokeCategories: (selectedIndex: number) => void }) {

    return (
        <FlatList
            data={categories}
            renderItem={({ item, index }) => {
                const number = index + 1
                return (
                    // <Pressable
                    // className='bg-yellow-300 mb-2 py-2'
                    // onPress={() => {
                    //     console.log("test")
                    //     reorderJokeCategories(index)
                    // }}
                    // >
                        <CategoryDropdown
                        categoryName={item}
                        number={number}
                        isTop={number === 1}
                        reorderJokeCategories={reorderJokeCategories}
                        />
                    // </Pressable>
                )
            }}
        />
    )
}