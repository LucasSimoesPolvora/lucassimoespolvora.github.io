import Image from "next/image";

export default function Home() {
  return (
      <div className="relative w-full h-screen bg-black text-white overflow-hidden">
      <p className="text-4xl font-reklame">Hello World</p>
      {/* Background Image with Overlay */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 z-10">
        <Image
          src="/image.jpg" 
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="grayscale"
        />
      </div>

      {/* Text Overlay */}
      <div className="relative z-20 flex flex-col justify-center h-full px-8">
      <h1 className="text-[10vw] font-iceland text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-aqua-500 to-green-500 leading-none uppercase">
          lucas
        </h1>
        <div className="max-w-md mt-8 space-y-4">
          <p className="text-lg font-iceland">
            I'm a <span className="font-bold">Developper</span> from Switzerland living in Lausanne, 
            I am currently a student in the ETML. 
          </p>
        </div>
      </div>
    </div>
  );
}
