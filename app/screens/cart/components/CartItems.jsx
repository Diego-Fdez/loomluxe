import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { cartStore } from '../../../store'
import { useCart } from '../hooks'
import { styles } from '../styles/CartItems.styles'
import { rooStyles } from '../../../constants/rootStyles'

const CartItems = () => {
  const products = cartStore((state) => state.cart.products)
  const addToCart = cartStore((state) => state.addToCart)
  const removeProduct = cartStore((state) => state.removeProductFromCart)
  const { removeProductFromCart } = useCart()

  return (
    <View style={styles.container}>
      {products?.map((item) => (
        <View style={styles.cardItem} key={item?.id}>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => removeProductFromCart(item?.id)}
          >
            <Ionicons
              name="trash-outline"
              size={24}
              color={rooStyles.textPrimary}
            />
          </TouchableOpacity>
          <Image source={{ uri: item?.images[0] }} style={styles.image} />
          <View style={styles.wrapper}>
            <View>
              <Text style={styles.textName}>{item?.name}</Text>
              <Text style={styles.textSmall}>Color: white {/*ToDo*/}</Text>
              <Text style={styles.textSmall}>
                Size: 78.7 x 29.5 inches {/*ToDo*/}
              </Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>${item?.price}</Text>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => removeProduct(item?.id)}>
                  <Ionicons
                    name="remove-outline"
                    size={24}
                    color={rooStyles.textPrimary}
                  />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item?.productQuantity}</Text>
                <TouchableOpacity onPress={() => addToCart(item)}>
                  <Ionicons
                    name="md-add-outline"
                    size={24}
                    color={rooStyles.textPrimary}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  )
}

export default CartItems
