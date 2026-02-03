"use client";

import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader, extend, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { shaderMaterial, OrbitControls } from "@react-three/drei";

// Define the custom shader material
const WaveMaterial = shaderMaterial(
    {
        uTime: 0,
        uTexture: new THREE.Texture(),
        uMouse: new THREE.Vector2(0, 0),
        uHover: 0,
    },
    // Vertex Shader
    `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    // Fragment Shader
    `
    uniform float uTime;
    uniform sampler2D uTexture;
    uniform float uHover;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;

      // Dynamic wave effect - Starts at 0, increases with hover
      float waveAmount = uHover * 0.05; 
      
      // "Sloppy" wave - Lower frequency (4.0/5.0) for larger, liquid-like ripples
      float xWave = sin(uv.y * 4.0 + uTime) * waveAmount;
      float yWave = cos(uv.x * 5.0 + uTime * 0.7) * waveAmount * 0.5;
      
      // Apply distortion
      vec2 distortedUv = uv + vec2(xWave, yWave);

      // Chromatic aberration scales with hover for premium focus shift
      float aberration = 0.005 * uHover;
      
      float r = texture2D(uTexture, distortedUv + vec2(aberration, 0.0)).r;
      float g = texture2D(uTexture, distortedUv).g;
      float b = texture2D(uTexture, distortedUv - vec2(aberration, 0.0)).b;
      
      vec4 color = vec4(r, g, b, 1.0);
      gl_FragColor = color;
    }
  `
);

extend({ WaveMaterial });

declare global {
    namespace JSX {
        interface IntrinsicElements {
            waveMaterial: any;
        }
    }
}

interface SceneProps {
    imageUrl: string;
}

const Scene: React.FC<SceneProps> = ({ imageUrl }) => {
    const ref = useRef<any>(null);
    const texture = useLoader(THREE.TextureLoader, imageUrl);
    const { viewport } = useThree();

    // Hover state for interactivity
    const [hovered, setHover] = React.useState(false);

    // Animate uniforms
    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.uTime += delta * 1.0;
            // Fast, snappy transition ("less time") for premium feel
            ref.current.uHover = THREE.MathUtils.lerp(ref.current.uHover, hovered ? 1 : 0, delta * 12);
        }
    });

    return (
        <mesh
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            onPointerDown={() => setHover(true)} // Support touch interaction
            onPointerUp={() => setHover(false)}
            scale={[viewport.width, viewport.height, 1]}
        >
            <planeGeometry args={[1, 1, 32, 32]} />
            {/* @ts-ignore */}
            <waveMaterial ref={ref} uTexture={texture} transparent={true} />
        </mesh>
    );
};

interface WaterWaveProps {
    imageUrl: string;
}

export default function WaterWave({ imageUrl }: WaterWaveProps) {
    return (
        <div className="w-full h-full relative">
            <Canvas style={{ width: '100%', height: '100%' }}>
                <Suspense fallback={null}>
                    <Scene imageUrl={imageUrl} />
                </Suspense>
            </Canvas>
        </div>
    );
}
