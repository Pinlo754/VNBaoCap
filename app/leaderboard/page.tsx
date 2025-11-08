"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Score {
  playerName: string
  score: number
  timestamp: number
}

export default function Leaderboard() {
  const [scores, setScores] = useState<Score[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await fetch("https://690abdba1a446bb9cc23a727.mockapi.io/score")
        if (!response.ok) throw new Error("Không thể tải dữ liệu bảng xếp hạng")
        const data: Score[] = await response.json()

        // Sắp xếp theo điểm giảm dần
        const sorted = data.sort((a, b) => b.score - a.score)
        setScores(sorted)
      } catch (error) {
        console.error("Lỗi khi tải bảng xếp hạng:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchScores()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Bảng Xếp Hạng
          </h1>
          <p className="text-lg text-foreground/70 mb-12">
            Top 10 người chơi có điểm cao nhất
          </p>

          {loading ? (
            <Card className="bg-card border-border">
              <CardContent className="py-12 text-center text-foreground/70 text-lg">
                Đang tải dữ liệu...
              </CardContent>
            </Card>
          ) : scores.length === 0 ? (
            <Card className="bg-card border-border">
              <CardContent className="py-12 text-center text-foreground/70 text-lg">
                Chưa có ai chơi game. Hãy là người đầu tiên!
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-card border-border overflow-hidden">
              <CardHeader>
                <CardTitle className="text-primary font-serif">
                  Top 10 Người Chơi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-4 px-4 font-bold text-primary">Xếp Hạng</th>
                        <th className="text-left py-4 px-4 font-bold text-primary">Tên Người Chơi</th>
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
                          <td className="py-4 px-4 font-bold text-lg">
                            {index === 0 && "🥇"}
                            {index === 1 && "🥈"}
                            {index === 2 && "🥉"}
                            {index > 2 && `#${index + 1}`}
                          </td>
                          <td className="py-4 px-4 font-semibold text-foreground">
                            {score.playerName}
                          </td>
                          <td className="py-4 px-4 text-right font-bold text-primary text-lg">
                            {score.score}
                          </td>
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
