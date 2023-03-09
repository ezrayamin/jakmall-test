import { Text, SafeAreaView, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from './partials/Header'
import JokeCategoriesList from './partials/JokeCategoriesList'
import JokesCategories from '../../models/joke-categories'
import { fetchJokesCategories } from './utils/LoadJokesCategories'
import { moveToTop } from '../../helpers'

const HomeScreen = () => {
  const [isLoading, setisLoading] = useState(true)
  const [jokeCategories, setJokeCategories] = useState<JokesCategories>({
    error: false,
    categories: [],
    categoryAliases: [],
    timestamp: Date.now()
  })

  useEffect(() => {
    getJokeCategories()
  }, [])

  async function getJokeCategories() {
    const categories = await fetchJokesCategories()
    setJokeCategories({
      error: categories.error,
      categories: categories.categories,
      categoryAliases: categories.categoryAliases,
      timestamp: categories.timestamp,
    })

    setisLoading(false)
  }
  
  function reorderJokeCategories(selectedIndex: number) {
    setisLoading(true)
    const orderedJokeCategories = moveToTop(jokeCategories.categories, selectedIndex)
    setJokeCategories(previous => {
      return {
        ...previous,
        categories: orderedJokeCategories
      }
    })
    setisLoading(false)
  }

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Header />
      {
        isLoading ?
          <ActivityIndicator />
          :
          jokeCategories.error ? <Text>something went wrong</Text> :
            <JokeCategoriesList
              categories={jokeCategories.categories}
              reorderJokeCategories={reorderJokeCategories}
            />
      }
    </SafeAreaView>
  )
}

export default HomeScreen