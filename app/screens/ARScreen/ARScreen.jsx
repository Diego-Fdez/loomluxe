import { Suspense } from 'react'
import { View, SafeAreaView } from 'react-native'
import { Canvas } from '@react-three/fiber/native'
import { Camera, CameraType } from 'expo-camera'
import useControls from 'r3f-native-orbitcontrols'
import { styles } from './styles/ARScreen.styles'
import { Box } from './components'

const ARScreen = () => {
  const [OrbitControls, events] = useControls()
  const [permission, requestPermission] = Camera.useCameraPermissions()

  if (!permission) {
    requestPermission()
  }

  if (!permission?.granted) {
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={{ flex: 1 }} type={CameraType.back}>
        <View style={{ flex: 2 }} {...events}>
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
