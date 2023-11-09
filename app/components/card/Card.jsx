import { View, Text, TouchableOpacity, Image } from 'react-native'
import normalize from 'react-native-normalize'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import CartIcon from '../cartIcon/CartIcon'
import { cartStore } from '../../store'
import { styles } from './Card.styles'
import { rooStyles } from '../../constants'

const Card = ({ item, index, marginRight, leftSpace = true }) => {
  const navigation = useNavigation()
  const addToCart = cartStore((state) => state.addToCart)

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductDetailScreen', { itemId: item?.id })
      }
      key={item?.id}
      style={[
        styles.container,
        {
          marginRight: normalize(marginRight, 'width'),
          marginLeft: index === 0 && leftSpace ? normalize(22, 'width') : 0,
        },
      ]}
    >
      <Image
        source={{
          uri: item?.images[0],
        }}
        style={styles.image}
      />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{item?.name}</Text>
        <TouchableOpacity style={styles.heartIcon}>
          <Ionicons
            name="md-heart-outline"
            size={18}
            color={rooStyles.textPrimary}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.textCollection}>{item?.collection} collection</Text>
      <View style={styles.cartContainer}>
        <Text style={styles.textPrice}>${item?.price}</Text>
        <View style={styles.heartIcon}>
          <CartIcon
            size={22}
            handlePress={() => addToCart(item)}
            showQuantity={false}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Card
