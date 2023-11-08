import { Suspense } from 'react'
import {
  View,
  SafeAreaView,
  Alert,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { Canvas } from '@react-three/fiber/native'
import { Camera, CameraType } from 'expo-camera'
import useControls from 'r3f-native-orbitcontrols'
import { styles } from './styles/ARScreen.styles'
import { Box } from './components'

const colors = [
  {
    id: 1,
    color: '#FF0000',
  },
  {
    id: 2,
    color: '#00FF00',
  },
]

const ARScreen = ({ navigation }) => {
  const [OrbitControls, events] = useControls()
  const [permission, requestPermission] = Camera.useCameraPermissions()

  if (!permission) {
    requestPermission()
  }

  if (!permission?.granted) {
    navigation.navigate('HomeScreen')
    return Alert.alert('No se pudo acceder a la cámara')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={styles.container} type={CameraType.back}>
        <View style={styles.container} {...events}>
          <FlatList
            data={colors}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[styles.button, { backgroundColor: item.color }]}
              />
            )}
            keyExtractor={(item) => item.id}
            style={styles.colorsContainer}
          />
          <Canvas>
            <OrbitControls enablePan={false} />
            <directionalLight position={[1, 0, 0]} args={['white', 5]} />
            <directionalLight position={[-1, 0, 0]} args={['white', 5]} />
            <directionalLight position={[0, 0, 1]} args={['white', 5]} />
            <directionalLight position={[0, 0, -1]} args={['white', 5]} />
            <directionalLight position={[0, 1, 0]} args={['white', 5]} />
            <directionalLight position={[0, -1, 0]} args={['white', 5]} />
            <Suspense fallback={null}>
              <Box />
            </Suspense>
          </Canvas>
        </View>
      </Camera>
    </SafeAreaView>
  )
}

export default ARScreen
