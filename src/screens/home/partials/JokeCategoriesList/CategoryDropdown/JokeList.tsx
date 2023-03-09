import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, ActivityIndicator, Pressable } from 'react-native'
import Modal from "react-native-modal";
import Category from '../../../../../models/joke'
import { fetchSelectedCategory } from '../../../utils/LoadJokesCategories'

export default function JokeList({ categoryName }: { categoryName: string }) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedJoke, setSelectedJoke] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [category, setCategory] = useState<Category>({
    error: false,
    amount: 0,
    jokes: []
  })

  useEffect(() => {
    getCategory()
  }, [])

  async function getCategory() {
    const seledtedcategory = await fetchSelectedCategory(categoryName)
    setCategory({
      error: seledtedcategory.error,
      amount: seledtedcategory.amount,
      jokes: seledtedcategory.jokes
    })
    setIsLoading(false)
  }

  async function addCategory() {
    setIsLoading(true)
    const seledtedcategory = await fetchSelectedCategory(categoryName)
    setCategory(previous => {
      return {
        error: seledtedcategory.error,
        amount: seledtedcategory.amount,
        jokes: [...previous.jokes, ...seledtedcategory.jokes]
      }
    })
    setIsLoading(false)

  }
  return (
    <View className='width-full'>
      {
        category.error ? <Text>Something went wrong</Text> : isLoading ? <ActivityIndicator /> :
          <>
            <FlatList
              className='bg-gray-200'
              data={category.jokes}
              renderItem={({ item, index }) => {
                return (
                  <Pressable
                    className='p-2 border-b border-gray-600'
                    key={index} // use key to prevent warning when adding new items
                    onPress={() => {
                      setIsModalVisible(true)
                      setSelectedJoke(item.joke)
                    }}
                  >
                    <Text>{item.joke}</Text>
                  </Pressable>
                )
              }}
            />
            <Pressable
              className='bg-blue-200 p-2'
              onPress={() => addCategory()}
            >
              <Text className='text-center'>Add more data</Text>
            </Pressable>
          </>
      }
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => {
          setIsModalVisible(false)
        }}
        onBackButtonPress={() => {
          setIsModalVisible(false)
        }}
      >
        <View className='bg-white p-4 rounded-xl'>
          <Text>{selectedJoke}</Text>
        </View>

      </Modal>
    </View>
  )
}