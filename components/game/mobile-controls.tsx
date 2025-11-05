"use client"

import { useGameStore } from "@/lib/game-store"
import { useState } from "react"

export default function MobileControls() {
  const { gameState, movePlayer, tryInteract } = useGameStore()
  const [pressedButton, setPressedButton] = useState<string | null>(null)

  const handleDirectionPress = (direction: "up" | "down" | "left" | "right") => {
    setPressedButton(direction)
    movePlayer(direction)
  }

  const handleDirectionRelease = () => {
    setPressedButton(null)
  }

  const handleInteract = () => {
    tryInteract()
  }

  return (
    <div className="md:hidden w-full space-y-4 mt-4">
      {/* D-Pad Controls */}
      <div className="flex justify-center gap-2 bg-card border-2 border-primary rounded-2xl p-4 shadow-lg">
        <div className="grid grid-cols-3 gap-1">
          {/* Up Button */}
          <div />
          <button
            onMouseDown={() => handleDirectionPress("up")}
            onMouseUp={handleDirectionRelease}
            onMouseLeave={handleDirectionRelease}
            onTouchStart={(e) => {
              e.preventDefault()
              handleDirectionPress("up")
            }}
            onTouchEnd={handleDirectionRelease}
            className={`${
              pressedButton === "up" ? "bg-primary/60 scale-95" : "bg-primary hover:bg-primary/80"
            } text-primary-foreground w-12 h-12 rounded-lg font-bold text-xl transition-all duration-100 flex items-center justify-center active:scale-95 select-none`}
          >
            ▲
          </button>
          <div />

          {/* Left, Center, Right Buttons */}
          <button
            onMouseDown={() => handleDirectionPress("left")}
            onMouseUp={handleDirectionRelease}
            onMouseLeave={handleDirectionRelease}
            onTouchStart={(e) => {
              e.preventDefault()
              handleDirectionPress("left")
            }}
            onTouchEnd={handleDirectionRelease}
            className={`${
              pressedButton === "left" ? "bg-primary/60 scale-95" : "bg-primary hover:bg-primary/80"
            } text-primary-foreground w-12 h-12 rounded-lg font-bold text-xl transition-all duration-100 flex items-center justify-center active:scale-95 select-none`}
          >
            ◀
          </button>

          <button
            disabled
            className="bg-muted w-12 h-12 rounded-lg flex items-center justify-center text-muted-foreground"
          >
            ●
          </button>

          <button
            onMouseDown={() => handleDirectionPress("right")}
            onMouseUp={handleDirectionRelease}
            onMouseLeave={handleDirectionRelease}
            onTouchStart={(e) => {
              e.preventDefault()
              handleDirectionPress("right")
            }}
            onTouchEnd={handleDirectionRelease}
            className={`${
              pressedButton === "right" ? "bg-primary/60 scale-95" : "bg-primary hover:bg-primary/80"
            } text-primary-foreground w-12 h-12 rounded-lg font-bold text-xl transition-all duration-100 flex items-center justify-center active:scale-95 select-none`}
          >
            ▶
          </button>

          {/* Down Button */}
          <div />
          <button
            onMouseDown={() => handleDirectionPress("down")}
            onMouseUp={handleDirectionRelease}
            onMouseLeave={handleDirectionRelease}
            onTouchStart={(e) => {
              e.preventDefault()
              handleDirectionPress("down")
            }}
            onTouchEnd={handleDirectionRelease}
            className={`${
              pressedButton === "down" ? "bg-primary/60 scale-95" : "bg-primary hover:bg-primary/80"
            } text-primary-foreground w-12 h-12 rounded-lg font-bold text-xl transition-all duration-100 flex items-center justify-center active:scale-95 select-none`}
          >
            ▼
          </button>
          <div />
        </div>
      </div>

      {/* Interaction Button */}
      {gameState.nearbyMerchant && (
        <button
          onClick={handleInteract}
          className="w-full bg-accent hover:bg-accent/80 active:bg-accent/60 text-accent-foreground font-bold py-3 rounded-xl transition-all duration-150 active:scale-95 shadow-lg flex items-center justify-center gap-2 text-lg animate-pulse-soft select-none"
        >
          <span>🤝</span> Giao Dịch ({gameState.nearbyMerchant.name})
        </button>
      )}

      {/* Help Text */}
      <div className="text-center text-xs text-foreground/60 px-2">
        Nhấn nút mũi tên để di chuyển • Nhấn "Giao Dịch" khi gặp thương nhân
      </div>
    </div>
  )
}
