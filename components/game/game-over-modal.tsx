"use client"

import { useGameStore } from "@/lib/game-store"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect } from "react"

interface GameOverModalProps {
  playerName: string
  onRestart: () => void
}

export default function GameOverModal({ playerName, onRestart }: GameOverModalProps) {
  const { gameState, inventory, saveScore } = useGameStore()

  useEffect(() => {
    if (gameState.gameOver) {
      const itemsCollected = Object.values(inventory).filter((count) => count > 0).length
      const score = itemsCollected * 10 + (gameState.totalScore || 0)
      saveScore(playerName, score, itemsCollected)
    }
  }, [gameState.gameOver])

  if (!gameState.gameOver) return null

  const itemsCollected = Object.values(inventory).filter((count) => count > 0).length
  const score = itemsCollected * 10 + (gameState.totalScore || 0)

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
      <Card className="w-full max-w-md bg-card border-border shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-serif text-primary">Trò Chơi Kết Thúc!</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-muted/50 p-6 rounded-lg space-y-3">
              <div className="flex justify-between">
                <span className="text-foreground/70">Người Chơi:</span>
                <span className="font-bold text-foreground">{playerName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/70">Hàng Đã Thu:</span>
                <span className="font-bold text-accent">{itemsCollected}/7</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/70">Điểm Số:</span>
                <span className="font-bold text-primary text-lg">{score}</span>
              </div>
            </div>

            <div className="space-y-2">
              <Button
                onClick={onRestart}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
              >
                Chơi Lại
              </Button>
              <Link href="/leaderboard" className="block">
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10 bg-transparent"
                >
                  Xem Bảng Xếp Hạng
                </Button>
              </Link>
              <Link href="/" className="block">
                <Button variant="ghost" className="w-full text-foreground hover:bg-muted">
                  Về Trang Chủ
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
