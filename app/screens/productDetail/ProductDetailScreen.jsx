import { useEffect } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import normalize from 'react-native-normalize'
import { Ionicons } from '@expo/vector-icons'
import { ProductInfo } from './components'
import { cartStore } from '../../store'
import { CartIcon } from '../../components'
import { useProducts } from '../../hooks'
import { styles } from './styles/ProductDetailScreen.styles'
import { rooStyles } from '../../constants'

const ProductDetailScreen = ({ route, navigation }) => {
  const { height } = Dimensions.get('window')
  const { itemId } = route.params
  const addProduct = cartStore((state) => state.addToCart)
  const { getProductById, product, handleBuyProduct } = useProducts()

  useEffect(() => {
    getProductById(itemId)
  }, [itemId])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.navContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back"
              size={30}
              color={rooStyles.textPrimary}
            />
          </TouchableOpacity>
          <View style={styles.iconsContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SearchScreen')}
            >
              <Ionicons name="search" size={27} color={rooStyles.textPrimary} />
            </TouchableOpacity>
            <CartIcon
              size={30}
              handlePress={() => navigation.navigate('CartScreen')}
              showQuantity={true}
            />
          </View>
        </View>
        <View style={styles.imageContainer(height)}>
          <Image
            source={{
              uri: product[0]?.images[0],
            }}
            style={styles.image}
          />
          <TouchableOpacity
            style={[styles.imageIcon, { top: normalize(10, 'height') }]}
          >
            <Ionicons
              name="md-heart-outline"
              size={22}
              color={rooStyles.textPrimary}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.imageIcon, { bottom: normalize(11, 'height') }]}
          >
            <Ionicons
              name="md-share-social-outline"
              size={20}
              color={rooStyles.textPrimary}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.productInfoContainer}>
          <ProductInfo product={product[0]} />
          <TouchableOpacity style={styles.buyButton} onPress={handleBuyProduct}>
            <Text style={[styles.buttonText, { color: '#fff' }]}>Buy now</Text>
          </TouchableOpacity>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={[styles.buttonOption, styles.arButton]}>
              <Text style={[styles.buttonText, { color: rooStyles.bgButton }]}>
                Use AR
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.buttonOption,
                { backgroundColor: rooStyles.bgSecondary },
              ]}
              onPress={() => addProduct(product[0])}
            >
              <Text style={[styles.buttonText, { color: '#607750' }]}>
                Add to cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ProductDetailScreen
