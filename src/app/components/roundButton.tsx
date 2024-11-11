"use client";

export default function RoundButton() {
  return (
    <button 
      className="fixed bottom-4 right-4 w-14 h-14 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg transition duration-300"
      onClick={() => console.log('Button clicked!')}
    >
      +
    </button>
  );
}