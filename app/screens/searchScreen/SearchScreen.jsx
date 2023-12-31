import { View, SafeAreaView, ScrollView } from 'react-native'
import { RoomsCards } from './components'
import { MiniCards, SearchBox, TitleContent } from '../../components'
import { useProducts } from '../../hooks'
import { useStyles } from './hooks'
import Cards from '../../components/cards/Cards'
import { styles } from './styles/SearchScreen.styles'

const SearchScreen = () => {
  const { allStyles } = useStyles()
  const { getProductsByView } = useProducts()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBoxContainer}>
        <SearchBox />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleContentContainer}>
          <TitleContent title="Explore by styles" marginTop={0} />
        </View>
        <MiniCards data={allStyles} />
        <TitleContent title="Trending now" marginTop={22} />
        <Cards products={getProductsByView('popular')} />
        <TitleContent title="Shop by room" marginTop={12} />
        <View style={styles.cardsContainer}>
          <RoomsCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SearchScreen
