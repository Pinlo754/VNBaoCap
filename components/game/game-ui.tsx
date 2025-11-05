"use client"

import { useEffect } from "react"
import { useGameStore } from "@/lib/game-store"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface GameUIProps {
  playerName: string
}

export default function GameUI({ playerName }: GameUIProps) {
  const { gameState, timeLeft, inventory, rice, handleKeyDown, handleKeyUp } = useGameStore()

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keyup", handleKeyUp)
    }
  }, [handleKeyDown, handleKeyUp])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const itemsCollected = Object.values(inventory).filter((count) => count > 0).length

  return (
    <div className="space-y-4 mb-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
        <Card className="bg-card border-border animate-scale-up" style={{ animationDelay: "0s" }}>
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-xs sm:text-sm text-primary">Người Chơi</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg sm:text-2xl font-bold text-foreground truncate">{playerName}</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border animate-scale-up" style={{ animationDelay: "0.05s" }}>
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-xs sm:text-sm text-primary">Thời Gian</CardTitle>
          </CardHeader>
          <CardContent>
            <p
              className={`text-lg sm:text-2xl font-bold transition-all duration-300 ease-out ${timeLeft < 60 ? "text-destructive animate-pulse-soft" : "text-foreground"}`}
            >
              {formatTime(timeLeft)}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border animate-scale-up" style={{ animationDelay: "0.1s" }}>
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-xs sm:text-sm text-primary">Lúa</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg sm:text-2xl font-bold text-foreground">{rice}kg</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border animate-scale-up" style={{ animationDelay: "0.15s" }}>
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-xs sm:text-sm text-primary">Hàng</CardTitle>
          </CardHeader>
          <CardContent>
            <p
              className={`text-lg sm:text-2xl font-bold transition-all duration-300 ease-out ${itemsCollected === 7 ? "text-accent animate-glow" : "text-accent"}`}
            >
              {itemsCollected}/7
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card border-border animate-scale-up" style={{ animationDelay: "0.2s" }}>
        <CardHeader className="pb-3 sm:pb-4">
          <CardTitle className="text-sm sm:text-base text-primary">Kho Hàng</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-7 gap-1 sm:gap-2">
            {Object.entries(inventory).map(([item, count], index) => (
              <div
                key={item}
                className="bg-muted/50 p-2 sm:p-3 rounded-lg text-center transition-all duration-300 ease-out hover:bg-muted hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${0.25 + index * 0.05}s` }}
              >
                <div className="text-xl sm:text-2xl mb-1">
                  {item === "wood" && "🪵"}
                  {item === "tools" && "🔧"}
                  {item === "bicycle" && "🚲"}
                  {item === "meat" && "🥩"}
                  {item === "fish" && "🐟"}
                  {item === "spice" && "🌶️"}
                  {item === "vegetables" && "🥬"}
                </div>
                <p
                  className={`text-xs font-bold transition-all duration-300 ease-out ${count > 0 ? "text-accent animate-glow" : "text-foreground/50"}`}
                >
                  {count > 0 ? "✓" : "-"}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {gameState.message && (
        <Card className="bg-accent/10 border-accent animate-scale-up">
          <CardContent className="pt-4 sm:pt-6">
            <p className="text-sm sm:text-base text-foreground text-center font-medium">{gameState.message}</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
