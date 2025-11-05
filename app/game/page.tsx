"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import GameBoard from "@/components/game/game-board"
import GameUI from "@/components/game/game-ui"
import QuizModal from "@/components/game/quiz-modal"
import GameOverModal from "@/components/game/game-over-modal"
import { useGameStore } from "@/lib/game-store"
import MobileControls from "@/components/game/mobile-controls"

export default function Game() {
  const [gameStarted, setGameStarted] = useState(false)
  const [playerName, setPlayerName] = useState("")
   const { gameState, resetGame, rice, timeLeft } = useGameStore()
  const handleStartGame = (name: string) => {
    setPlayerName(name)
    setGameStarted(true)
    resetGame()
    localStorage.setItem("currentPlayerName", name)
  }

  const handlePlayAgain = () => {
    resetGame()
  }

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="w-full max-w-md animate-fade-in">
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-lg">
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-4 text-center">
                Game
              </h1>
              <p className="text-sm sm:text-base text-foreground/70 text-center mb-8">
                Trải nghiệm cuộc sống thời bao cấp. Bắt đầu với 20kg lúa, giao dịch với các thương nhân, trả lời câu hỏi
                để nhận giảm giá!
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-primary mb-2">Nhập tên của bạn:</label>
                  <input
                    type="text"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    placeholder="Tên người chơi"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    onKeyPress={(e) => e.key === "Enter" && playerName && handleStartGame(playerName)}
                  />
                </div>

                <button
                  onClick={() => playerName && handleStartGame(playerName)}
                  disabled={!playerName}
                  className="w-full bg-primary hover:bg-primary/90 disabled:bg-muted text-primary-foreground font-bold py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base"
                >
                  Bắt Đầu Chơi
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-bold text-primary mb-4 text-sm sm:text-base">Cách Chơi:</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-foreground/70">
                  <li>• Dùng mũi tên hoặc WASD để di chuyển</li>
                  <li>• Gặp thương nhân để giao dịch</li>
                  <li>• Trả lời câu hỏi để được giảm giá 50%</li>
                  <li>• Thu thập 7 loại hàng hóa trong 5 phút</li>
                  <li>• Xem bảng xếp hạng khi kết thúc</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-8 pb-32 sm:pb-8">
        <GameUI playerName={playerName} />
        <GameBoard />
        <QuizModal />
        <GameOverModal
          isOpen={gameState.showResultModal}
          finalScore={gameState.finalScore}
          correctAnswers={gameState.correctAnswers}
          riceLeft={rice}
          timeLeft={timeLeft}
          itemsCollected={Object.values(gameState.inventory).filter((v) => v > 0).length}
          onClose={() => {}}
          onPlayAgain={handlePlayAgain} />
          <MobileControls />
      </main>
      <Footer />
    </div>
  )
}
