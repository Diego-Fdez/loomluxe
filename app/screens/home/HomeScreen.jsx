import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import normalize from 'react-native-normalize'
import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { CarouselScreen } from './components'
import {
  CartIcon,
  MiniCards,
  TitleContent,
  SpinnerScreen,
} from '../../components'
import { useCategory } from './hook'
import { productStore } from '../../store'
import { useProducts } from '../../hooks'
import Cards from '../../components/cards/Cards'
import { styles } from './styles/HomeScreen.styles'
import { rooStyles } from '../../constants'

const HomeScreen = ({ navigation }) => {
  const { categories } = useCategory()
  const isLoading = productStore((state) => state.isLoading)
  const { getProductsByView } = useProducts()

  if (isLoading) return <SpinnerScreen />

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style="light"
        backgroundColor={rooStyles.bgPrimary}
        translucent={true}
      />
      <View style={styles.navContainer}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu-sharp" size={35} color={rooStyles.textPrimary} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => navigation.navigate('SearchScreen')}
        >
          <Ionicons name="search" size={24} color={rooStyles.textPrimary} />
          <Text style={styles.searchText}>Search</Text>
        </TouchableOpacity>
        <CartIcon
          size={38}
          handlePress={() => navigation.navigate('CartScreen')}
          showQuantity={true}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.carouselContainer}>
          <CarouselScreen />
        </View>
        <View style={styles.titleWrapper}>
          <TitleContent
            title="Categories"
            marginTop={normalize(30, 'height')}
          />
        </View>
        <MiniCards data={categories} />
        <View style={styles.cardsContainer}>
          <TitleContent
            title="Most popular"
            marginTop={normalize(22, 'height')}
          />
          <Cards products={getProductsByView('popular')} />
          <TitleContent
            title="Furniture sets"
            marginTop={normalize(12, 'height')}
          />
          <Cards products={getProductsByView('set')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
