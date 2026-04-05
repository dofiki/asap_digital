import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import RotatingModel from "../Model/RotatingModel";
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import { FiPhoneCall } from "react-icons/fi";
import { LuCircleArrowDown } from "react-icons/lu";

gsap.registerPlugin(useGSAP, SplitText);

const Hero = () => {
  const mainText = useRef(null);
  const modelContainer = useRef(null);

  useGSAP(() => {
    if (!mainText.current) return;

    const split = SplitText.create(mainText.current, { type: "words, chars" });
    gsap.from(split.words, {
      duration: 1,
      y: 100,
      autoAlpha: 0,
      stagger: {
        amount: 0.5,
        from: "random",
      },
    });
    gsap.from(modelContainer.current, {
      duration: 1.5,
      autoAlpha: 0,
      scale: 1,
      ease: "power2.out",
      delay: 0.5,
    });
    return () => split.revert();
  });

  const waveSvg = `<svg viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
    <svg id="visual" viewBox="0 -60 1920 1080" width="1920" height="1080" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="1920" height="1080" fill="#ffffff"></rect><path d="M0 874L64 858.8C128 843.7 256 813.3 384 799.5C512 785.7 640 788.3 768 806.5C896 824.7 1024 858.3 1152 875.2C1280 892 1408 892 1536 868.5C1664 845 1792 798 1856 774.5L1920 751L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z" fill="#282462"></path><path d="M0 892L64 898.5C128 905 256 918 384 903C512 888 640 845 768 827.7C896 810.3 1024 818.7 1152 830.8C1280 843 1408 859 1536 849.2C1664 839.3 1792 803.7 1856 785.8L1920 768L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z" fill="#2a3570"></path><path d="M0 812L64 814.5C128 817 256 822 384 826.5C512 831 640 835 768 839.5C896 844 1024 849 1152 858.7C1280 868.3 1408 882.7 1536 879.3C1664 876 1792 855 1856 844.5L1920 834L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z" fill="#2e457e"></path><path d="M0 856L64 873.3C128 890.7 256 925.3 384 921.2C512 917 640 874 768 857.3C896 840.7 1024 850.3 1152 862C1280 873.7 1408 887.3 1536 902.5C1664 917.7 1792 934.3 1856 942.7L1920 951L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z" fill="#35558a"></path><path d="M0 995L64 980.5C128 966 256 937 384 922.8C512 908.7 640 909.3 768 905.5C896 901.7 1024 893.3 1152 905.2C1280 917 1408 949 1536 941.8C1664 934.7 1792 888.3 1856 865.2L1920 842L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z" fill="#3e6696"></path><path d="M0 1008L64 997.8C128 987.7 256 967.3 384 964.2C512 961 640 975 768 974.7C896 974.3 1024 959.7 1152 955.5C1280 951.3 1408 957.7 1536 958.8C1664 960 1792 956 1856 954L1920 952L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z" fill="#4a76a1"></path><path d="M0 906L64 916.7C128 927.3 256 948.7 384 952.7C512 956.7 640 943.3 768 947.2C896 951 1024 972 1152 966.5C1280 961 1408 929 1536 924.2C1664 919.3 1792 941.7 1856 952.8L1920 964L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z" fill="#5886ab"></path><path d="M0 967L64 977C128 987 256 1007 384 1004.7C512 1002.3 640 977.7 768 971.2C896 964.7 1024 976.3 1152 981.7C1280 987 1408 986 1536 976.7C1664 967.3 1792 949.7 1856 940.8L1920 932L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z" fill="#6996b5"></path><path d="M0 991L64 987.8C128 984.7 256 978.3 384 983.5C512 988.7 640 1005.3 768 1004.5C896 1003.7 1024 985.3 1152 986.3C1280 987.3 1408 1007.7 1536 1013.2C1664 1018.7 1792 1009.3 1856 1004.7L1920 1000L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z" fill="#7ba7bf"></path><path d="M0 1045L64 1041C128 1037 256 1029 384 1028.2C512 1027.3 640 1033.7 768 1033.8C896 1034 1024 1028 1152 1028C1280 1028 1408 1034 1536 1035.3C1664 1036.7 1792 1033.3 1856 1031.7L1920 1030L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z" fill="#8fb7c9"></path><path d="M0 1024L64 1021C128 1018 256 1012 384 1008C512 1004 640 1002 768 1001.7C896 1001.3 1024 1002.7 1152 1003.3C1280 1004 1408 1004 1536 1006.7C1664 1009.3 1792 1014.7 1856 1017.3L1920 1020L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z" fill="#a4c7d4"></path><path d="M0 1065L64 1064.3C128 1063.7 256 1062.3 384 1061.3C512 1060.3 640 1059.7 768 1058.5C896 1057.3 1024 1055.7 1152 1051.8C1280 1048 1408 1042 1536 1037.7C1664 1033.3 1792 1030.7 1856 1029.3L1920 1028L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z" fill="#bad7df"></path></svg>
  </svg>`;

  const encodedSvg = `url("data:image/svg+xml,${encodeURIComponent(waveSvg)}")`;

  return (
    <div
      className="bg-white  h-screen flex flex-col justify-center gap-8 md:flex-row
     md:justify-around items-center p-5 mt-5 md:mt-0 overflow-hidden"
      style={{
        backgroundImage: encodedSvg,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
      id="Home"
    >
      <div
        className="text-2xl max-w-500 md:max-w-200 text-text-secondary 
        md:text-[2.8rem] transition-all flex flex-col h-90  md:h-110 
        items-center md:items-start text-center md:text-left justify-around "
      >
        <p className=" text-sm md:text-[1.1rem]">
          Results-Driven Digital Marketing & Branding Agency
        </p>
        <h1
          ref={mainText}
          className="leading-6.5 md:leading-12 text-3xl md:text-5xl font-bold"
        >
          Strategic Digital Growth Partner for Branding, Marketing, and
          Performance Solutions
        </h1>
        <p className="text-sm md:text-2xl opacity-70">
          <span className="font-bold text-text-tertiary">
            ASAP Digital by Easy Sewa Pvt. Ltd.
          </span>{" "}
          is a Nepal-based agency delivering data-driven, creative, and
          performance-focused digital solutions.
        </p>

        <a href="tel:+9779843777976">
          <button
            className="flex items-center justify-center gap-3 bg-primary w-35 md:w-50 text-sm md:text-[1.1rem] font-bold
              p-2 text-text-primary rounded-xl h-10 md:h-15 cursor-pointer hover:scale-110 transition-all ease-in"
          >
            <FiPhoneCall /> Let’s Talk
          </button>
        </a>
      </div>
      <img
        src="/assets/hero.svg"
        className="hidden md:block absolute w-95 md:w-200 bottom-5 md:top-15 md:right-0"
      />
      <div
        ref={modelContainer}
        className="text-text-secondary border-0 md:border border-primary w-60 h-50
       md:w-120 md:h-120 rounded-full pt-0 md:pt-20  overflow-visible 
       pl-5 md:pl-5 relative pointer-events-none"
      >
        <Canvas camera={{ position: [5, 5, 10], fov: 50 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={1.2} />
            <directionalLight
              position={[5, 5, 10]}
              intensity={8}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />
            <hemisphereLight groundColor="brown" intensity={0.4} />
            <gridHelper args={[8, 8, "#000000"]} position={[0, -0.01, 0]} />
            <RotatingModel />
            <OrbitControls target={[0, 0, 0]} enablePan={false} />
          </Suspense>
        </Canvas>
      </div>

      {/* scroll down indicator */}
      <div className="hidden absolute text-[#1d1a3b] bottom-5">
        <LuCircleArrowDown size={40} />
      </div>
    </div>
  );
};

export default Hero;
