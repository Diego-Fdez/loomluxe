import { useGLTF } from '@react-three/drei/native'

export default function Box(props) {
  const { nodes, materials } = useGLTF(
    require('../../../../assets/models/Model.glb'),
  )

  return (
    <group {...props} dispose={null} scale={6} position={[0, -2.4, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pasted__model1.geometry}
        material={materials.koltuk}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pasted__model2.geometry}
        material={materials.siyah}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pasted__model3.geometry}
        material={materials.metal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pasted__model4.geometry}
        material={materials.siyah}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pasted__model5.geometry}
        material={materials.siyah}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pasted__model6.geometry}
        material={materials.altin}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pasted__model7.geometry}
        material={materials.koltuk}
      />
    </group>
  )
}

useGLTF.preload(require('../../../../assets/models/Model.glb'))
