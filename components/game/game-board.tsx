"use client"

import { useEffect, useRef, useState } from "react"
import { useGameStore } from "@/lib/game-store"

const MAP_WIDTH = 15
const MAP_HEIGHT = 12

export default function GameBoard() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [tileSize, setTileSize] = useState(40)
  const { playerPos, merchants, gameState } = useGameStore()

  useEffect(() => {
    const updateTileSize = () => {
      if (!containerRef.current) return

      const containerWidth = containerRef.current.clientWidth
      const maxTileSize = Math.floor(containerWidth / MAP_WIDTH)
      const minTileSize = Math.floor((window.innerHeight * 0.4) / MAP_HEIGHT)
      const calculatedTileSize = Math.min(maxTileSize, minTileSize, 40)

      setTileSize(Math.max(calculatedTileSize, 20))
    }

    updateTileSize()
    window.addEventListener("resize", updateTileSize)
    return () => window.removeEventListener("resize", updateTileSize)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size based on calculated tile size
    canvas.width = MAP_WIDTH * tileSize
    canvas.height = MAP_HEIGHT * tileSize

    // Clear canvas
    ctx.fillStyle = "#faf8f3"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw grid
    ctx.strokeStyle = "#e8dcc8"
    ctx.lineWidth = 1
    for (let i = 0; i <= MAP_WIDTH; i++) {
      ctx.beginPath()
      ctx.moveTo(i * tileSize, 0)
      ctx.lineTo(i * tileSize, MAP_HEIGHT * tileSize)
      ctx.stroke()
    }
    for (let i = 0; i <= MAP_HEIGHT; i++) {
      ctx.beginPath()
      ctx.moveTo(0, i * tileSize)
      ctx.lineTo(MAP_WIDTH * tileSize, i * tileSize)
      ctx.stroke()
    }

    // Draw merchants
    merchants.forEach((merchant) => {
      const x = merchant.x * tileSize + tileSize / 2
      const y = merchant.y * tileSize + tileSize / 2

      // Merchant circle
      ctx.fillStyle = merchant.color
      ctx.beginPath()
      ctx.arc(x, y, tileSize / 3, 0, Math.PI * 2)
      ctx.fill()

      // Merchant icon
      ctx.fillStyle = "#fff9f0"
      ctx.font = `bold ${Math.floor(tileSize * 0.5)}px Arial`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(merchant.icon, x, y)
    })

    // Draw player
    const playerX = playerPos.x * tileSize + tileSize / 2
    const playerY = playerPos.y * tileSize + tileSize / 2

    ctx.fillStyle = "#8b4513"
    ctx.beginPath()
    ctx.arc(playerX, playerY, tileSize / 2.5, 0, Math.PI * 2)
    ctx.fill()

    ctx.fillStyle = "#fff9f0"
    ctx.font = `bold ${Math.floor(tileSize * 0.6)}px Arial`
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("👤", playerX, playerY)

    // Draw interaction indicator
    if (gameState.nearbyMerchant) {
      ctx.strokeStyle = "#c85a3a"
      ctx.lineWidth = 2
      ctx.setLineDash([5, 5])
      ctx.strokeRect(gameState.nearbyMerchant.x * tileSize, gameState.nearbyMerchant.y * tileSize, tileSize, tileSize)
      ctx.setLineDash([])
    }
  }, [playerPos, merchants, gameState.nearbyMerchant, tileSize])

  return (
    <div ref={containerRef} className="flex justify-center my-4 sm:my-8 w-full overflow-x-auto">
      <canvas
        ref={canvasRef}
        className="border-2 border-primary rounded-lg shadow-lg bg-card"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  )
}
