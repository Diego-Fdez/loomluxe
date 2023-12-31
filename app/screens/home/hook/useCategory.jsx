import { useState, useEffect } from 'react'
import { Alert } from 'react-native'

import { supabase } from '../../../supabase/initSupabase'
import { categoryAdapter } from '../../../adapters'

const useCategory = () => {
  const [categories, setCategories] = useState([])

  /* this function is responsible for getting the data from the "category" table of the database and 
  assigning it to the setCategories variable, but it also handles any errors that may occur during the co-operation */
  async function fetchCategoryImage() {
    const { data, error } = await supabase
      .from('category')
      .select('id, name, image')

    if (error) return Alert.alert(error.message)

    const adaptedCategories = categoryAdapter(data)
    setCategories(adaptedCategories)
  }

  useEffect(() => {
    fetchCategoryImage()
  }, [])

  return { categories }
}

export default useCategory
