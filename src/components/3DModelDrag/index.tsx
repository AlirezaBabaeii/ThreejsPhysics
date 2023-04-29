import React, { useState, useRef, createContext, useContext } from "react";

import {
  OrbitControls,
  useHelper,
  PerspectiveCamera,
  Gltf,
} from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import TestModel from "./Test";

function CanvasMain() {
  return (
    <Canvas
      camera={{ fov: 30, near: 6, far: 2000, position: [0.5, 50, 60] }}
      style={{
        background: "black",
        height: "100vh",
        width: "100%",
      }}
    >
      <CameraHelper />
      <ambientLight intensity={0.5} />

      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />

      <Gltf
        src="/model/room.glb"
        position={[1, 1, 1]}
        matrixWorldAutoUpdate={undefined}
        getObjectsByProperty={undefined}
      />

      {/* <Box /> */}
      <TestModel />
      <OrbitControls />
    </Canvas>
  );
}

const CameraHelper = () => {
  const camera = useRef<any>();
  useHelper(camera, THREE.CameraHelper);
  return (
    <>
      <ambientLight intensity={1} />
      <PerspectiveCamera
        ref={camera}
        near={1}
        far={4}
        position={[0, 0, 0]}
        matrixWorldAutoUpdate={undefined}
        getObjectsByProperty={undefined}
      ></PerspectiveCamera>
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="red" />
      </mesh>
    </>
  );
};

function Box() {
  const [BoxY] = useContext(PositionContext);

  return (
    <Gltf
      src="/model/gas.glb"
      position={[BoxY.x, BoxY.y, BoxY.z]}
      scale={[0.1, 0.1, 0.1]}
      matrixWorldAutoUpdate={undefined}
      getObjectsByProperty={undefined}
    />
  );
}

const PositionContext = createContext<any>(null);

enum HandlerKeyPosition {
  X = "x",
  Y = "y",
  Z = "z",
}

enum HandlerTypeEnum {
  Decrement = "Decrement",
  Increment = "Increment",
}

type PositionType = {
  x: number;
  y: number;
  z: number;
};

type HandlerType = {
  mode: `${HandlerKeyPosition}` | HandlerKeyPosition;
  type: `${HandlerTypeEnum}` | HandlerTypeEnum;
};

export default function Main() {
  const [BoxY, SetBoxY] = useState<PositionType>({ x: 1, y: 1, z: 1 });

  const PositionHndler = ({ mode, type }: HandlerType) => {
    SetBoxY((prev: PositionType) => {
      return {
        ...prev,
        [mode]: type === "Increment" ? prev[mode] + 0.5 : prev[mode] - 0.5,
      };
    });
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "20%",
        }}
      >
        <div>
          <button
            onClick={() => PositionHndler({ mode: "x", type: "Increment" })}
          >
            X
          </button>
          <button
            onClick={() => PositionHndler({ mode: "y", type: "Increment" })}
          >
            Y
          </button>
          <button
            onClick={() => PositionHndler({ mode: "z", type: "Increment" })}
          >
            z
          </button>
        </div>

        <div>
          <button
            onClick={() => PositionHndler({ mode: "x", type: "Decrement" })}
          >
            {" "}
            - X
          </button>
          <button
            onClick={() => PositionHndler({ mode: "y", type: "Decrement" })}
          >
            {" "}
            - Y
          </button>
          <button
            onClick={() => PositionHndler({ mode: "z", type: "Decrement" })}
          >
            {" "}
            - z
          </button>
        </div>
      </div>
      <PositionContext.Provider value={[BoxY]}>
        <div
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <CanvasMain />
        </div>
      </PositionContext.Provider>
    </div>
  );
}
