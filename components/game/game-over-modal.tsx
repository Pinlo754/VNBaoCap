"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface GameResultModalProps {
  isOpen: boolean
  finalScore: number
  correctAnswers: number
  riceLeft: number
  timeLeft: number
  itemsCollected: number
  onClose: () => void
  onPlayAgain: () => void
}

const GameOverModal = ({
  isOpen,
  finalScore,
  correctAnswers,
  riceLeft,
  timeLeft,
  itemsCollected,
  onClose,
  onPlayAgain,
}: GameResultModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <div className="flex flex-col items-center justify-center py-8">
          <div className="text-5xl mb-4">🏆</div>
          <h2 className="text-2xl font-bold text-center mb-6">Trò chơi kết thúc!</h2>

          <div className="w-full space-y-4 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Điểm cuối cùng</p>
              <p className="text-3xl font-bold text-blue-600">{finalScore}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-xs text-gray-600">Số lần được giảm giá</p>
                <p className="text-2xl font-bold text-green-600">{correctAnswers}</p>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="text-xs text-gray-600">Hàng hóa</p>
                <p className="text-2xl font-bold text-purple-600">{itemsCollected}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-50 p-3 rounded-lg">
                <p className="text-xs text-gray-600">Gạo còn lại</p>
                <p className="text-2xl font-bold text-orange-600">{riceLeft}</p>
              </div>
              <div className="bg-indigo-50 p-3 rounded-lg">
                <p className="text-xs text-gray-600">Thời gian còn lại(s)</p>
                <p className="text-2xl font-bold text-indigo-600">{timeLeft}</p>
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-600 mb-6 text-center">
            <p>Công thức tính điểm:</p>
            <p className="font-mono text-xs">
              ({correctAnswers} × 10) + ({riceLeft} / 2) + ({timeLeft} / 10) = {finalScore}
            </p>
          </div>

          <div className="flex gap-3 w-full">
            <Button variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Thoát
            </Button>
            <Button onClick={onPlayAgain} className="flex-1">
              Chơi lại
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default GameOverModal;