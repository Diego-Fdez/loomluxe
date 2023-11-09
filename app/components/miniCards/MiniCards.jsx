import {
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
  Text,
} from 'react-native'
import { styles } from './MiniCards.styles'

const MiniCards = ({ data }) => {
  const { width } = Dimensions.get('window')
  const SPACING = (width * 0.12) / 2

  return (
    <FlatList
      data={data}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ index, item }) => (
        <TouchableOpacity
          style={[
            styles.cardContainer,
            {
              marginLeft: index === 0 ? SPACING : 0,
            },
          ]}
        >
          <Image source={{ uri: item?.image }} style={styles.image} />
          <Text style={styles.categoryName}>{item?.name}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item?.id}
    />
  )
}

export default MiniCards
