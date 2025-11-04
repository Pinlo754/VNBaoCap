import { create } from "zustand"

export interface Merchant {
  id: string
  name: string
  x: number
  y: number
  icon: string
  color: string
  item: string
  price: number
}

export interface Quiz {
  question: string
  options: string[]
  correctAnswer: number
}

export interface GameState {
  playerPos: { x: number; y: number }
  merchants: Merchant[]
  inventory: Record<string, number>
  rice: number
  timeLeft: number
  gameOver: boolean
  showQuiz: boolean
  currentQuiz: Quiz | null
  currentMerchant: Merchant | null
  nearbyMerchant: Merchant | null
  message: string
  totalScore: number
}

const QUIZZES: Record<string, Quiz> = {
  wood: {
    question: "Cơ chế phân phối hàng hóa thời bao cấp dựa vào yếu tố nào?",
    options: ["Kế hoạch và chỉ tiêu Nhà nước giao", "Cung cầu thị trường", "Giá cả tự do", "Sức mua của người dân"],
    correctAnswer: 0,
  },
  tools: {
    question: '"Khoán 100" áp dụng trong lĩnh vực nào?',
    options: ["Công nghiệp", "Nông nghiệp", "Dịch vụ", "Thương mại"],
    correctAnswer: 1,
  },
  bicycle: {
    question: "Đại hội VI (1986) có ý nghĩa gì?",
    options: [
      "Tăng cường kinh tế bao cấp",
      "Bắt đầu công cuộc đổi mới kinh tế",
      "Phát triển công nghiệp nặng",
      "Mở rộng hợp tác xã",
    ],
    correctAnswer: 1,
  },
  meat: {
    question: "Tem phiếu được sử dụng để làm gì?",
    options: ["Trang trí nhà cửa", "Phân phối hàng hóa theo định mức", "Thanh toán tiền lương", "Ghi chép kế hoạch"],
    correctAnswer: 1,
  },
  fish: {
    question: "Kế hoạch 5 năm lần thứ nhất (1976-1980) tập trung vào lĩnh vực nào?",
    options: ["Nông nghiệp", "Công nghiệp nhẹ", "Công nghiệp nặng", "Dịch vụ"],
    correctAnswer: 2,
  },
  spice: {
    question: "Cải cách giá-lương-tiền năm 1985 dẫn đến hậu quả gì?",
    options: ["Tăng trưởng kinh tế", "Lạm phát cao, tiền mất giá", "Giảm giá hàng hóa", "Tăng sản xuất"],
    correctAnswer: 1,
  },
  vegetables: {
    question: "Nhà nước quản lý nền kinh tế bao cấp bằng cách nào?",
    options: [
      "Để thị trường tự điều chỉnh",
      "Lập kế hoạch chi tiết và phân bổ vật tư",
      "Khuyến khích kinh tế tư nhân",
      "Hợp tác với các nước ngoài",
    ],
    correctAnswer: 1,
  },
}

interface Score {
  playerName: string
  score: number
  itemsCollected: number
  timestamp: number
}

interface GameStoreState {
  gameState: GameState
  playerPos: { x: number; y: number }
  merchants: Merchant[]
  inventory: Record<string, number>
  rice: number
  timeLeft: number
  keysPressed: Set<string>
  handleKeyDown: (e: KeyboardEvent) => void
  handleKeyUp: (e: KeyboardEvent) => void
  handleQuizAnswer: (answerIndex: number) => void
  resetGame: () => void
  saveScore: (playerName: string, score: number, itemsCollected: number) => void
  getLeaderboard: () => Score[]
}

const MERCHANTS: Merchant[] = [
  { id: "wood", name: "Người Bán Củi", x: 2, y: 2, icon: "🪵", color: "#8b4513", item: "wood", price: 5 },
  { id: "tools", name: "Người Bán Dụng Cụ", x: 12, y: 2, icon: "🔧", color: "#d4a574", item: "tools", price: 8 },
  { id: "bicycle", name: "Người Bán Xe Đạp", x: 2, y: 10, icon: "🚲", color: "#c85a3a", item: "bicycle", price: 15 },
  { id: "meat", name: "Người Bán Thịt", x: 7, y: 5, icon: "🥩", color: "#a0826d", item: "meat", price: 10 },
  { id: "fish", name: "Người Bán Cá", x: 12, y: 10, icon: "🐟", color: "#6b5d4f", item: "fish", price: 8 },
  { id: "spice", name: "Người Bán Gia Vị", x: 7, y: 1, icon: "🌶️", color: "#e8956f", item: "spice", price: 3 },
  { id: "vegetables", name: "Người Bán Rau", x: 1, y: 6, icon: "🥬", color: "#9d8b7e", item: "vegetables", price: 6 },
]

export const useGameStore = create<GameStoreState>((set, get) => ({
  gameState: {
    playerPos: { x: 7, y: 6 },
    merchants: MERCHANTS,
    inventory: { wood: 0, tools: 0, bicycle: 0, meat: 0, fish: 0, spice: 0, vegetables: 0 },
    rice: 20,
    timeLeft: 300,
    gameOver: false,
    showQuiz: false,
    currentQuiz: null,
    currentMerchant: null,
    nearbyMerchant: null,
    message: "",
    totalScore: 0,
  },
  playerPos: { x: 7, y: 6 },
  merchants: MERCHANTS,
  inventory: { wood: 0, tools: 0, bicycle: 0, meat: 0, fish: 0, spice: 0, vegetables: 0 },
  rice: 20,
  timeLeft: 300,
  keysPressed: new Set(),

  handleKeyDown: (e: KeyboardEvent) => {
    const key = e.key.toLowerCase()
    if (["arrowup", "arrowdown", "arrowleft", "arrowright", "w", "a", "s", "d"].includes(key)) {
      e.preventDefault()
      const keysPressed = new Set(get().keysPressed)
      keysPressed.add(key)
      set({ keysPressed })

      const state = get()
      let newX = state.playerPos.x
      let newY = state.playerPos.y

      if (keysPressed.has("arrowup") || keysPressed.has("w")) newY = Math.max(0, newY - 1)
      if (keysPressed.has("arrowdown") || keysPressed.has("s")) newY = Math.min(11, newY + 1)
      if (keysPressed.has("arrowleft") || keysPressed.has("a")) newX = Math.max(0, newX - 1)
      if (keysPressed.has("arrowright") || keysPressed.has("d")) newX = Math.min(14, newX + 1)

      const nearbyMerchant = MERCHANTS.find((m) => Math.abs(m.x - newX) <= 1 && Math.abs(m.y - newY) <= 1)

      set({
        playerPos: { x: newX, y: newY },
        gameState: {
          ...state.gameState,
          playerPos: { x: newX, y: newY },
          nearbyMerchant: nearbyMerchant || null,
        },
      })
    }

    if (key === "enter") {
      const state = get()
      if (state.gameState.nearbyMerchant && !state.gameState.showQuiz) {
        const merchant = state.gameState.nearbyMerchant
        const quiz = QUIZZES[merchant.item]
        set({
          gameState: {
            ...state.gameState,
            showQuiz: true,
            currentQuiz: quiz,
            currentMerchant: merchant,
          },
        })
      }
    }
  },

  handleKeyUp: (e: KeyboardEvent) => {
    const key = e.key.toLowerCase()
    const keysPressed = new Set(get().keysPressed)
    keysPressed.delete(key)
    set({ keysPressed })
  },

  handleQuizAnswer: (answerIndex: number) => {
    const state = get()
    const quiz = state.gameState.currentQuiz
    const merchant = state.gameState.currentMerchant

    if (!quiz || !merchant) return

    const isCorrect = answerIndex === quiz.correctAnswer
    const cost = isCorrect ? Math.ceil(merchant.price * 0.5) : merchant.price

    if (state.rice >= cost) {
      const newInventory = { ...state.gameState.inventory }
      newInventory[merchant.item] = 1
      const newRice = state.rice - cost

      const message = isCorrect ? `Chính xác! Bạn được giảm giá 50% 👏` : `Sai rồi! Bạn phải trả đủ giá trị 😅`

      set({
        rice: newRice,
        inventory: newInventory,
        gameState: {
          ...state.gameState,
          inventory: newInventory,
          rice: newRice,
          showQuiz: false,
          currentQuiz: null,
          currentMerchant: null,
          message: message,
          totalScore: state.gameState.totalScore + (isCorrect ? 10 : 0),
        },
      })

      setTimeout(() => {
        set({
          gameState: {
            ...get().gameState,
            message: "",
          },
        })
      }, 2000)
    }
  },

  resetGame: () => {
    set({
      gameState: {
        playerPos: { x: 7, y: 6 },
        merchants: MERCHANTS,
        inventory: { wood: 0, tools: 0, bicycle: 0, meat: 0, fish: 0, spice: 0, vegetables: 0 },
        rice: 20,
        timeLeft: 300,
        gameOver: false,
        showQuiz: false,
        currentQuiz: null,
        currentMerchant: null,
        nearbyMerchant: null,
        message: "",
        totalScore: 0,
      },
      playerPos: { x: 7, y: 6 },
      inventory: { wood: 0, tools: 0, bicycle: 0, meat: 0, fish: 0, spice: 0, vegetables: 0 },
      rice: 20,
      timeLeft: 300,
    })
  },

  saveScore: (playerName: string, score: number, itemsCollected: number) => {
    const scores = JSON.parse(localStorage.getItem("gameScores") || "[]") as Score[]
    scores.push({
      playerName,
      score,
      itemsCollected,
      timestamp: Date.now(),
    })
    scores.sort((a, b) => b.score - a.score)
    localStorage.setItem("gameScores", JSON.stringify(scores.slice(0, 100)))
  },

  getLeaderboard: () => {
    return JSON.parse(localStorage.getItem("gameScores") || "[]").slice(0, 10)
  },
}))

// Game loop
setInterval(() => {
  const state = useGameStore.getState()
  if (!state.gameState.gameOver && state.timeLeft > 0) {
    const newTimeLeft = state.timeLeft - 1
    useGameStore.setState({
      timeLeft: newTimeLeft,
      gameState: {
        ...state.gameState,
        timeLeft: newTimeLeft,
        gameOver: newTimeLeft === 0,
      },
    })
  }
}, 1000)
