import { useState, useEffect } from 'react'
import { Alert } from 'react-native'

import { supabase } from '../../../supabase/initSupabase'
import { stylesAdapter } from '../../../adapters'

const useStyles = () => {
  const [allStyles, setAllStyles] = useState([])

  /* this function is responsible for getting the data from the "styles" table of the database and 
  assigning it to the setAllStyles variable, but it also handles any errors that may occur during the co-operation */
  async function fetchStyleImage() {
    const { data, error } = await supabase
      .from('styles')
      .select('id, name, image')

    if (error) return Alert.alert(error.message)

    const adaptedStyles = stylesAdapter(data)
    setAllStyles(adaptedStyles)
  }

  useEffect(() => {
    fetchStyleImage()
  }, [])

  return { allStyles }
}

export default useStyles
