import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { Html, useProgress } from "@react-three/drei";
import { useGLTF, useAnimations } from "@react-three/drei";
import fallguyScene from "../../public/assets/3d/fallguy.glb";

const CanvasLoader = () => {
    const { progress, active } = useProgress();
    
    if (!active) {
      return null; 
    }
  
    return (
      <Html
        as="div"
        center
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <span className="canvas-loader"></span>
        <p
          style={{
            fontSize: 14,
            color: "#F1F1F1",
            fontWeight: 800,
            marginTop: 40,
          }}
        >
          {progress.toFixed(2)}%
        </p>
      </Html>
    );
  };
  

const Fallguy = ({ scale, position, onLoad }) => {
  const fallguyRef = useRef();
  const { scene, animations } = useGLTF(fallguyScene);
  const { actions } = useAnimations(animations, fallguyRef);

  useEffect(() => {
    if (scene && actions) {
      onLoad(); 
      const action = actions["FG_Loading_Falling_A"];
      if (action) {
        action.timeScale = 0.05;
        action.play();
      }
    }
  }, [scene, actions, onLoad]);

  return (
    <mesh ref={fallguyRef} position={position} scale={scale} rotation={[0.2, -0.2, 0]}>
      <primitive object={scene} />
    </mesh>
  );
};

const FallguyCanvas = ({ scrollContainer, onLoad }) => {
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [scale, setScale] = useState([1, 1, 1]);
  const [position, setPosition] = useState([0, 2.5, 0]);

  useEffect(() => {
    const initialY = 2.5;

    const handleScroll = () => {
      const scrollTop = scrollContainer?.current?.scrollTop || 0;

      const yPosition = initialY - scrollTop * 0.004;
      setPosition([0, yPosition, 0]);

      const rotationXValue = scrollTop * -0.0006;
      const rotationYValue = scrollTop * -0.00075;
      setRotationX(rotationXValue);
      setRotationY(rotationYValue);
    };

    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScale([0.4, 0.4, 0.4]);
      } else if (width < 1024) {
        setScale([0.5, 0.5, 0.5]);
      } else if (width < 1280) {
        setScale([0.6, 0.6, 0.6]);
      } else if (width < 1536) {
        setScale([0.7, 0.7, 0.7]);
      } else {
        setScale([0.8, 0.8, 0.8]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    scrollContainer?.current?.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      scrollContainer?.current?.removeEventListener("scroll", handleScroll);
    };
  }, [scrollContainer]);

  return (
    <Canvas
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        zIndex: 8,
      }}
      camera={{ near: 0.1, far: 1000 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={2} />
        <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

        <Fallguy
          rotationX={rotationX}
          rotationY={rotationY}
          scale={scale}
          position={position}
          onLoad={onLoad}
        />
      </Suspense>
    </Canvas>
  );
};

export default FallguyCanvas;
