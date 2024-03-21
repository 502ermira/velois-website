import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';

const Carousel = () => {
const carouselRef = useRef();
const [rotationSpeed, setRotationSpeed] = useState(0.01);

useFrame(() => {
carouselRef.current.rotation.y += rotationSpeed;
});

const handleMouseEnter = () => {
setRotationSpeed(0.005);
};

const handleMouseLeave = () => {
setRotationSpeed(0.01);
};

return (
<group ref={carouselRef}>
<Box position={[-1, 0, 0]} onClick={handleMouseEnter} onPointerOver={handleMouseEnter} onPointerOut={handleMouseLeave}>
<meshBasicMaterial color="#0e0c4f"/> 
</Box>
<Box position={[0, 0, 0]} onClick={handleMouseEnter} onPointerOver={handleMouseEnter} onPointerOut={handleMouseLeave}>
<meshBasicMaterial color='#590059' />
</Box>
<Box position={[1, 0, 0]} onClick={handleMouseEnter} onPointerOver={handleMouseEnter} onPointerOut={handleMouseLeave}>
<meshBasicMaterial color="#490960" />
</Box>
</group>
);
};

const CarouselCanvas = () => {
return (
<div className="w-full h-auto absolute inset-0 z-[-1]">
<Canvas camera={{ position: [0, 0, 1] }}>
<ambientLight intensity={0.5} />
<directionalLight position={[0, 0, 5]} intensity={0.5} />
<Carousel />
</Canvas>
</div>
);
};

export default CarouselCanvas;