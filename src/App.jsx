import { useState, useEffect, useRef } from "react";
import { Contact, Experience, Hero, Portfolio, Navbar } from "./components";
import Loading from "./components/Loading";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const App = () => {
  const wrapperRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const images = [
      "/assets/parallax/sun.svg",
      "/assets/parallax/backclouds.svg",
      "/assets/parallax/city.svg",
      "/assets/parallax/middleclouds.svg",
      "/assets/parallax/frontcloudstest.svg",
      "/assets/parallax/mountain.svg",
    ];

    const checkImagesLoaded = () =>
      Promise.all(
        images.map(
          (src) =>
            new Promise((resolve) => {
              const img = new Image();
              img.src = src;
              img.onload = resolve;
              img.onerror = resolve; 
            })
        )
      );

    const checkModelsLoaded = async () => {
      const loader = new GLTFLoader();
      
      const loadModel = (path) =>
        new Promise((resolve, reject) => {
          loader.load(
            path,
            (gltf) => resolve(gltf),
            undefined,
            (error) => reject(error)
          );
        });

      const modelPaths = [
         import.meta.env.BASE_URL + "/assets/3d/fallguy.glb",
         import.meta.env.BASE_URL + "/assets/3d/plane.glb",
      ];

      await Promise.all(modelPaths.map((path) => loadModel(path)));
    };

    const loadAllAssets = async () => {
      try {
        await Promise.all([checkImagesLoaded(), checkModelsLoaded()]);

        setTimeout(() => {
          setIsLoaded(true);
        }, 1000); 
      } catch (error) {
        console.error("Error loading assets:", error);
      }
    };

    loadAllAssets();
  }, []);

  if (!isLoaded) return <Loading />; 

  return (
    <div className="relative z-0 h-full">
      <Navbar />
      <div className="wrapper" ref={wrapperRef}>
        <div id="hero-marker" style={{ height: "1px", position: "absolute", top: 0 }}></div>
        <section id="hero" className="z-10">
          <Hero scrollContainer={wrapperRef} />
        </section>
        <section id="projects" className="relative z-30 bg-cloud-blue min-h-screen py-16">
          <Portfolio />
        </section>
        <section id="experience" className="relative z-30 bg-cloud-blue min-h-screen py-16">
          <Experience />
        </section>
        <section id="contact" className="relative z-30 bg-cloud-blue min-h-screen py-16">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
