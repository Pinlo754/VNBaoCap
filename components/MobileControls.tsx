import React from "react"
import { useGameStore } from "../lib/game-store"

const MobileControls: React.FC = () => {
  const { handleKeyDown } = useGameStore()

  const simulateKey = (key: string) => {
    // Giả lập sự kiện bàn phím
    const event = { key } as KeyboardEvent
    handleKeyDown(event)
  }

  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center items-center gap-6 z-50">
      {/* Nút di chuyển */}
      <div className="grid grid-cols-3 gap-2">
        <div></div>
        <button
          className="bg-gray-700 text-white rounded-full p-4 active:bg-gray-500"
          onClick={() => simulateKey("ArrowUp")}
        >
          ⬆️
        </button>
        <div></div>

        <button
          className="bg-gray-700 text-white rounded-full p-4 active:bg-gray-500"
          onClick={() => simulateKey("ArrowLeft")}
        >
          ⬅️
        </button>
        <div></div>
        <button
          className="bg-gray-700 text-white rounded-full p-4 active:bg-gray-500"
          onClick={() => simulateKey("ArrowRight")}
        >
          ➡️
        </button>

        <div></div>
        <button
          className="bg-gray-700 text-white rounded-full p-4 active:bg-gray-500"
          onClick={() => simulateKey("ArrowDown")}
        >
          ⬇️
        </button>
        <div></div>
      </div>

      {/* Nút Enter (Tương tác) */}
      <button
        className="bg-green-600 text-white rounded-full p-6 active:bg-green-500 shadow-lg ml-6"
        onClick={() => simulateKey("Enter")}
      >
        🎯
      </button>
    </div>
  )
}

export default MobileControls
