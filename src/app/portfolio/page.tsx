"use client";
import Image from "next/image";
import RoundButton from "../components/roundButton";


export default function Home() {
  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">

      {/* <p className="text-4xl font-reklame">Hello World</p> */}
      <div className="absolute  top-0 right-0 w-4/6 h-full opacity-50">
        <Image
          src="/bgImg.png"
          alt="Background Image"
          priority={true}
          layout="fill"
          objectFit="cover"
          className="grayscale"
          style={{
            maskImage: "linear-gradient(to right, transparent, black)", // Fade effect on the image
            WebkitMaskImage: "linear-gradient(to right, transparent, black)" // For cross-browser compatibility
          }}
        />
      </div>

      {/* Text Overlay */}
      <div className="relative z-20 flex flex-col justify-center h-full px-8">

        <h1 className="text-[10vw] font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-aqua-500 to-green-500 leading-none uppercase">
          lucas
        </h1>
        <div className="max-w-md mt-8 space-y-4">
          <p className="text-lg font-iceland">
            I'm a <span className="font-bold">developpement student</span> from Switzerland living in Lausanne,
            I am currently in the ETML.
          </p>
        </div>
      </div>
      <button 
      className="fixed bottom-4 left-1/2 w-14 h-14 hover:z-50 bg-gray-200 hover:bg-gray-700 text-white font-bold rounded-full shadow-lg transition duration-300"
      onClick={() => console.log('Button clicked!')}>
      ↓
    </button>
    </div>
  );
}
