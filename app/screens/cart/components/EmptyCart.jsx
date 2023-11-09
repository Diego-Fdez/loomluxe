import { View, Text, Image } from 'react-native'
import { HeadTitle } from '../../../components'
import { styles } from '../styles/EmptyCart.styles'

const EmptyCart = () => {
  return (
    <View style={styles.container}>
      <HeadTitle title="" />
      <View style={styles.wrapper}>
        <Image
          source={require('../../../../assets/empty-cart.png')}
          style={styles.image}
        />
        <Text style={styles.text}>Your cart awaits for you!</Text>
      </View>
    </View>
  )
}

export default EmptyCart
