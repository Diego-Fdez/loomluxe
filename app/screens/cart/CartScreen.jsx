import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import normalize from 'react-native-normalize'
import { Ionicons } from '@expo/vector-icons'
import { CartItems, EmptyCart } from './components'
import { cartStore } from '../../store'
import { totalAmount } from '../../utils'
import { useCart } from './hooks'
import { styles } from './styles/CartScreen.styles'
import { rooStyles } from '../../constants'

const CartScreen = () => {
  const products = cartStore((state) => state.cart.products)
  const navigation = useNavigation()
  const { height } = Dimensions.get('window')
  const { clearCart } = useCart()

  function handleNavigateNextScreen() {
    if (products.length === 0)
      return Alert.alert('There are no products in the cart!')
    navigation.navigate('PaymentScreen')
  }

  return (
    <SafeAreaView style={styles.container}>
      {products?.length === 0 ? (
        <EmptyCart />
      ) : (
        <View style={styles.wrapper}>
          <View style={styles.navContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="chevron-back"
                size={30}
                color={rooStyles.textPrimary}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => clearCart()}>
              <Text style={styles.deleteButtonText}>Delete cart</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ height: (height / 2.5) * 1.6 }}
          >
            <CartItems />
          </ScrollView>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalAmountText}>${totalAmount(products)}</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={handleNavigateNextScreen}
          >
            <Text style={styles.buttonText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  )
}

export default CartScreen
