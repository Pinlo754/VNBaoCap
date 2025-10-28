"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useGameStore } from "@/lib/game-store"

interface Score {
  playerName: string
  score: number
  itemsCollected: number
  timestamp: number
}

export default function Leaderboard() {
  const [scores, setScores] = useState<Score[]>([])
  const { getLeaderboard } = useGameStore()

  useEffect(() => {
    const leaderboard = getLeaderboard()
    setScores(leaderboard)
  }, [getLeaderboard])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Bảng Xếp Hạng</h1>
          <p className="text-lg text-foreground/70 mb-12">Top 10 người chơi có điểm số cao nhất</p>

          {scores.length === 0 ? (
            <Card className="bg-card border-border">
              <CardContent className="pt-12 pb-12 text-center">
                <p className="text-foreground/70 text-lg">Chưa có ai chơi game. Hãy là người đầu tiên!</p>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-card border-border overflow-hidden">
              <CardHeader>
                <CardTitle className="text-primary font-serif">Top 10 Người Chơi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-4 px-4 font-bold text-primary">Xếp Hạng</th>
                        <th className="text-left py-4 px-4 font-bold text-primary">Tên Người Chơi</th>
                        <th className="text-center py-4 px-4 font-bold text-primary">Hàng Thu</th>
                        <th className="text-right py-4 px-4 font-bold text-primary">Điểm Số</th>
                      </tr>
                    </thead>
                    <tbody>
                      {scores.map((score, index) => (
                        <tr
                          key={index}
                          className={`border-b border-border hover:bg-muted/30 transition-colors ${
                            index === 0 ? "bg-accent/10" : ""
                          }`}
                        >
                          <td className="py-4 px-4">
                            <span className="font-bold text-lg">
                              {index === 0 && "🥇"}
                              {index === 1 && "🥈"}
                              {index === 2 && "🥉"}
                              {index > 2 && `#${index + 1}`}
                            </span>
                          </td>
                          <td className="py-4 px-4 font-bold text-foreground">{score.playerName}</td>
                          <td className="py-4 px-4 text-center text-accent font-bold">{score.itemsCollected}/7</td>
                          <td className="py-4 px-4 text-right text-primary font-bold text-lg">{score.score}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
