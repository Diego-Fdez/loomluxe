import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { styles } from '../styles/RoomsCards.styles'
import { rooStyles } from '../../../constants'

const ROOMS = [
  {
    id: 1,
    name: 'Kitchen',
    image:
      'https://bcggaudtahrsimkejfie.supabase.co/storage/v1/object/public/images/rooms/Rectangle%2028.png?t=2023-10-19T00%3A21%3A42.561Z',
  },
  {
    id: 2,
    name: 'Bathroom',
    image:
      'https://bcggaudtahrsimkejfie.supabase.co/storage/v1/object/public/images/rooms/Rectangle%2028%20(1).png?t=2023-10-19T00%3A22%3A39.111Z',
  },
  {
    id: 3,
    name: 'Living room',
    image:
      'https://bcggaudtahrsimkejfie.supabase.co/storage/v1/object/public/images/rooms/Rectangle%2028%20(2).png?t=2023-10-19T00%3A21%3A53.334Z',
  },
  {
    id: 4,
    name: 'Bedroom',
    image:
      'https://bcggaudtahrsimkejfie.supabase.co/storage/v1/object/public/images/rooms/Rectangle%2028%20(3).png?t=2023-10-19T00%3A22%3A14.772Z',
  },
]

const RoomsCards = () => {
  return (
    <View style={styles.container}>
      {ROOMS?.map((item) => (
        <TouchableOpacity
          onPress={() => console.log('from room')}
          key={item?.id}
          style={styles.wrapper}
        >
          <Image
            source={{
              uri: item?.image,
            }}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>{item?.name}</Text>
            <TouchableOpacity style={styles.icon}>
              <Ionicons
                name="chevron-forward"
                size={20}
                color={rooStyles.textPrimary}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default RoomsCards
