"use client"

import { useEffect, useRef } from "react"
import { useGameStore } from "@/lib/game-store"

const TILE_SIZE = 40
const MAP_WIDTH = 15
const MAP_HEIGHT = 12

export default function GameBoard() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { playerPos, merchants, gameState } = useGameStore()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.fillStyle = "#faf8f3"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw grid
    ctx.strokeStyle = "#e8dcc8"
    ctx.lineWidth = 1
    for (let i = 0; i <= MAP_WIDTH; i++) {
      ctx.beginPath()
      ctx.moveTo(i * TILE_SIZE, 0)
      ctx.lineTo(i * TILE_SIZE, MAP_HEIGHT * TILE_SIZE)
      ctx.stroke()
    }
    for (let i = 0; i <= MAP_HEIGHT; i++) {
      ctx.beginPath()
      ctx.moveTo(0, i * TILE_SIZE)
      ctx.lineTo(MAP_WIDTH * TILE_SIZE, i * TILE_SIZE)
      ctx.stroke()
    }

    // Draw merchants
    merchants.forEach((merchant) => {
      const x = merchant.x * TILE_SIZE + TILE_SIZE / 2
      const y = merchant.y * TILE_SIZE + TILE_SIZE / 2

      // Merchant circle
      ctx.fillStyle = merchant.color
      ctx.beginPath()
      ctx.arc(x, y, TILE_SIZE / 3, 0, Math.PI * 2)
      ctx.fill()

      // Merchant icon
      ctx.fillStyle = "#fff9f0"
      ctx.font = "bold 20px Arial"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(merchant.icon, x, y)
    })

    // Draw player
    const playerX = playerPos.x * TILE_SIZE + TILE_SIZE / 2
    const playerY = playerPos.y * TILE_SIZE + TILE_SIZE / 2

    ctx.fillStyle = "#8b4513"
    ctx.beginPath()
    ctx.arc(playerX, playerY, TILE_SIZE / 2.5, 0, Math.PI * 2)
    ctx.fill()

    ctx.fillStyle = "#fff9f0"
    ctx.font = "bold 24px Arial"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("👤", playerX, playerY)

    // Draw interaction indicator
    if (gameState.nearbyMerchant) {
      ctx.strokeStyle = "#c85a3a"
      ctx.lineWidth = 2
      ctx.setLineDash([5, 5])
      ctx.strokeRect(
        gameState.nearbyMerchant.x * TILE_SIZE,
        gameState.nearbyMerchant.y * TILE_SIZE,
        TILE_SIZE,
        TILE_SIZE,
      )
      ctx.setLineDash([])
    }
  }, [playerPos, merchants, gameState.nearbyMerchant])

  return (
    <div className="flex justify-center my-8">
      <canvas
        ref={canvasRef}
        width={MAP_WIDTH * TILE_SIZE}
        height={MAP_HEIGHT * TILE_SIZE}
        className="border-2 border-primary rounded-lg shadow-lg bg-card"
      />
    </div>
  )
}
