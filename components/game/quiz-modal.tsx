"use client"

import { useGameStore } from "@/lib/game-store"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function QuizModal() {
  const { gameState, handleQuizAnswer } = useGameStore()

  if (!gameState.showQuiz || !gameState.currentQuiz) return null

  const quiz = gameState.currentQuiz

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
      <Card className="w-full max-w-md bg-card border-border shadow-2xl">
        <CardHeader>
          <CardTitle className="text-primary font-serif">{gameState.currentMerchant?.name}</CardTitle>
          <p className="text-sm text-foreground/70 mt-2">Trả lời đúng để được giảm giá 50%!</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="font-bold text-foreground">{quiz.question}</p>
            <div className="space-y-2">
              {quiz.options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleQuizAnswer(index)}
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-3 px-4 border-border hover:bg-primary/10 hover:border-primary"
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
