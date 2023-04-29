import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { Physics, RigidBody, Debug, CuboidCollider } from "@react-three/rapier";
import { useRef, useState } from "react";
import * as THREE from "three";

function Agent() {
  const [Boxs, setBoxs] = useState([
    1.6, 1.8, 2, 2.3, 2.5, 2.7, 2.9, 3.3, 3.5, 3.7, 3.9, 4.5, 4.8,
  ]);

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
        {Boxs.map((item, index) => {
          return (
            <RigidBody key={index}>
              <mesh
                ref={cubemesh}
                onClick={HnadelClick}
                castShadow
                position={[item, 2, 0]}
              >
                <boxGeometry />
                <meshStandardMaterial color={"red"} />
              </mesh>
            </RigidBody>
          );
        })}

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

export default function AppPhasic() {
  return (
    <Canvas
      id="canvas"
      camera={{ fov: 75, near: 0.1, far: 1000, position: [10, 2, 5] }}
      style={{ height: "100vh" }}
    >
      <Agent />
    </Canvas>
  );
}
