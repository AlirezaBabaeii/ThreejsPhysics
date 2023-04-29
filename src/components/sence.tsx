/* eslint-disable @typescript-eslint/no-unused-vars */

// effect and pperformance with  EffectComposer
// import { OrbitControls } from '@react-three/drei'
// import { Canvas } from '@react-three/fiber'
// import { EffectComposer } from '@react-three/postprocessing'
// import { Perf } from 'r3f-perf'

// export default function App() {
//   return (
//     <Canvas id='canvas' camera={{ fov: 75, near: 0.1, far: 1000, position: [20, -20, 20] }} style={{ height: '100%' }}>
//       <Perf position='top-right' />
//       <color args={['#000000']} attach='background' />
//       <EffectComposer>
//         {/* <Noise /> */}
//         {/* <Glitch delay={[0.5, 1]} duration={[0.1, 0.3]} strength={[0.2, 0.4]} /> */}
//         {/* <Bloom mipmapBlur /> */}
//         {/* <DepthOfField focusDistance={0.025} focalLength={0.025} bokehScale={6} /> */}
//         {/* <SSR /> */}
//       </EffectComposer>
//       <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
//       <ambientLight intensity={0.7} />

//       <spotLight position={[120, 200, 150]} angle={1.5} penumbra={1} />

//       <mesh castShadow position-x={-2}>
//         <sphereGeometry />
//         <meshStandardMaterial color={'orange'} />
//       </mesh>

//       <mesh castShadow position-x={2} scale={1.5}>
//         <boxGeometry />
//         <meshStandardMaterial color={'red'} toneMapped={false} />
//       </mesh>

//       <mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
//         <planeGeometry />
//         <meshStandardMaterial color={'greenyellow'} />
//       </mesh>

//       {/* <Gltf
//         src='/Model/Shuttle.glb'
//         position={[-6.3, 2.04, 12]}
//         matrixWorldAutoUpdate={undefined}
//         getObjectsByProperty={undefined}
//       ></Gltf>
//       <Gltf
//         src='/Model/Shuttle.glb'
//         position={[-6.3, 3.64, 12]}
//         matrixWorldAutoUpdate={undefined}
//         getObjectsByProperty={undefined}
//       ></Gltf>

//       <Gltf
//         src='/Model/Rack-Blue.glb'
//         position={[0, 0, 0]}
//         matrixWorldAutoUpdate={undefined}
//         getObjectsByProperty={undefined}
//       ></Gltf> */}

//       <OrbitControls />
//     </Canvas>
//   )
// }

// import { OrbitControls } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { Perf } from "r3f-perf";
// import { Physics, RigidBody, Debug, CuboidCollider } from "@react-three/rapier";
// import { useRef } from "react";

// export default function Seance() {
//   const cube = useRef<any>();

//   const RandomNumber = () => Math.random() - 0.5;

//   const HnadelClick = () => {
//     // console.log("click", cube.current.applyImpulse);

//     // cube.current.applyImpulse({ x: Math.random() * 20 - 10, y: 5, z: 0 });
//     cube.current.applyImpulse({ x: 0, y: 10, z: 0 });
//     cube.current.applyTorqueImpulse({
//       x: RandomNumber(),
//       y: RandomNumber(),
//       z: RandomNumber(),
//     });
//   };

//   return (
//     <Canvas
//       id="canvas"
//       camera={{ fov: 75, near: 0.1, far: 1000, position: [10, 2, 5] }}
//       style={{ height: "100%" }}
//     >
//       <Perf position="top-right" />
//       <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
//       <ambientLight intensity={0.7} />

//       <spotLight position={[120, 200, 150]} angle={1.5} penumbra={1} />

//       <Physics>
//         <Debug />
//         {/* <RigidBody>
//           <mesh castShadow position={[0, 1, 0]} scale={1.5}>
//             <boxGeometry args={[1, 0.5, 16, 32]} />
//             <meshStandardMaterial color={"red"} toneMapped={false} />
//           </mesh>
//         </RigidBody> */}

//         {/* <RigidBody colliders="ball">
//           <mesh castShadow position={[2, 2, 0]} scale={1.5}>
//             <boxGeometry args={[3, 2, 1]} />
//             <meshStandardMaterial color={"red"} toneMapped={false} />
//           </mesh>

//           <mesh castShadow position={[2, 2, 3]} scale={1.5}>
//             <boxGeometry args={[1, 1, 1]} />
//             <meshStandardMaterial color={"yellow"} toneMapped={false} />
//           </mesh>
//         </RigidBody> */}

//         <RigidBody colliders="ball">
//           <mesh castShadow position={[-2.5, 2, 0]}>
//             <sphereGeometry />
//             <meshStandardMaterial color={"orange"} />
//           </mesh>
//         </RigidBody>

//         <RigidBody ref={cube}>
//           <mesh onClick={HnadelClick} castShadow position={[1.5, 2, 0]}>
//             <boxGeometry />
//             <meshStandardMaterial color={"#30336b"} />
//           </mesh>
//         </RigidBody>

//         {/* <RigidBody ref={cube} friction={1}>
//           <mesh onClick={HnadelClick} castShadow position={[1.5, 2, 0]}>
//             <boxGeometry />
//             <meshStandardMaterial color={"#30336b"} />
//           </mesh>
//         </RigidBody> */}

//         <RigidBody type="kinematicVelocity">
//           <mesh
//             receiveShadow
//             position-y={-1}
//             rotation-x={-Math.PI * 0.5}
//             scale={10}
//           >
//             <planeGeometry />
//             <meshStandardMaterial color={"greenyellow"} />
//           </mesh>
//         </RigidBody>

//         {/* <RigidBody type="kinematicVelocity" restitution={1}>
//           <mesh
//             receiveShadow
//             position-y={-1}
//             rotation-x={-Math.PI * 0.5}
//             scale={10}
//           >
//             <planeGeometry />
//             <meshStandardMaterial color={"greenyellow"} />
//           </mesh>
//         </RigidBody> */}
//       </Physics>

//       <OrbitControls />
//     </Canvas>
//   );
// }

import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import {
  Physics,
  RigidBody,
  Debug,
  CuboidCollider,
  CylinderCollider,
} from "@react-three/rapier";
import { useRef, useState } from "react";
import * as THREE from "three";
function Agent() {
  const [sound] = useState(() => new Audio("/sound/mix.wav"));

  const cube = useRef<any>();
  const twister = useRef<any>();
  const cubemesh = useRef<any>();

  const HnadelClick = () => {
    cube.current.applyImpulse({ x: -3, y: 0, z: 0 });
  };

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    const eulerPosition = new THREE.Euler(0, time * 3, 0);

    const quaternioRotation = new THREE.Quaternion();

    quaternioRotation.setFromEuler(eulerPosition);

    twister.current.setNextKinematicRotation(quaternioRotation);

    const angel = time * 0.5;

    const x = Math.cos(angel) * 2;

    const z = Math.sin(angel) * 2;

    twister.current.setNextKinematicTranslation({ x: x, y: -0.8, z: z });
  });

  const Collision = () => {
    cubemesh.current.material.color.set("red");
    // sound.currentTime = 0;
    // sound.volume = Math.random();
    // sound.play();
    // setTimeout(() => {
    //   cubemesh.current.material.color.set("#30336b");
    // }, 300);
  };

  const Exitcollision = () => {
    cubemesh.current.material.color.set("#30336b");
  };

  const Pullet = useGLTF("/model/Pullet.glb");

  return (
    <>
      <Perf position="top-right" />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.7} />

      <spotLight position={[120, 200, 150]} angle={1.5} penumbra={1} />

      <Physics>
        <Debug />

        <RigidBody colliders="ball">
          <mesh castShadow position={[-2.5, 2, 0]}>
            <sphereGeometry />
            <meshStandardMaterial color={"orange"} />
          </mesh>
        </RigidBody>

        <RigidBody
          ref={cube}
          onCollisionEnter={Collision}
          onCollisionExit={Exitcollision}
        >
          <mesh
            ref={cubemesh}
            onClick={HnadelClick}
            castShadow
            position={[1.5, 2, 0]}
          >
            <boxGeometry />
            <meshStandardMaterial color={"#30336b"} />
          </mesh>
        </RigidBody>

        <RigidBody type="kinematicVelocity">
          <mesh
            receiveShadow
            position-y={-1}
            rotation-x={-Math.PI * 0.5}
            scale={10}
          >
            <planeGeometry />
            <meshStandardMaterial color={"greenyellow"} />
          </mesh>
        </RigidBody>

        <RigidBody
          ref={twister}
          type="kinematicPosition"
          friction={0}
          position={[0, -0.8, 0]}
        >
          <mesh castShadow scale={[0.4, 0.4, 3]}>
            <boxGeometry />
            <meshStandardMaterial color={"#e056fd"} />
          </mesh>
        </RigidBody>

        <RigidBody position={[0, 4, 0]} colliders={"hull"}>
          <primitive object={Pullet.scene} />
          {/* <CylinderCollider args={[0.01, 0.8]} /> */}
        </RigidBody>

        <RigidBody type="fixed" position={[5.8, 2, 0]}>
          <CuboidCollider args={[1, 3, 5]} />
        </RigidBody>

        <RigidBody type="fixed" position={[-5.8, 2, 0]}>
          <CuboidCollider args={[1, 3, 5]} />
        </RigidBody>

        <RigidBody rotation={[0, 4.7, 0]} type="fixed" position={[0, 2, -6]}>
          <CuboidCollider args={[1, 3, 5]} />
        </RigidBody>

        <RigidBody rotation={[0, 4.7, 0]} type="fixed" position={[0, 2, 6]}>
          <CuboidCollider args={[1, 3, 5]} />
        </RigidBody>
      </Physics>

      <OrbitControls />
    </>
  );
}

export default function App() {
  return (
    <Canvas
      id="canvas"
      camera={{ fov: 75, near: 0.1, far: 1000, position: [10, 2, 5] }}
      style={{ height: "100%" }}
    >
      <Agent />
    </Canvas>
  );
}

const RandomPos = () => {
  const x = Math.random() * 5;
  const y = Math.random() * 5;
  const z = Math.random() * 3;

  return { x, y, z };
};
