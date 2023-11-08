import { View, TouchableOpacity, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { cartStore } from '../../store'
import { totalQuantity } from '../../utils'
import { styles } from './CartIcon.styles'
import { rooStyles } from '../../constants'

const CartIcon = ({ size, handlePress, showQuantity }) => {
  const products = cartStore((state) => state.cart.products)

  return (
    <TouchableOpacity onPress={handlePress}>
      {products?.length > 0 && showQuantity && (
        <View style={styles.ballon}>
          <Text style={styles.text}>{totalQuantity(products)}</Text>
        </View>
      )}
      <Ionicons
        name="ios-cart-outline"
        size={size}
        color={rooStyles.textPrimary}
      />
    </TouchableOpacity>
  )
}

export default CartIcon
