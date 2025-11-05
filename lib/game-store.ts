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
  correctAnswers: number
  showResultModal: boolean
  finalScore: number
}

const QUIZZES: Record<string, Quiz[]> = {
  wood: [
    {
      question: "Cơ chế phân phối hàng hóa thời bao cấp dựa vào yếu tố nào?",
      options: ["Kế hoạch và chỉ tiêu Nhà nước giao", "Cung cầu thị trường", "Giá cả tự do", "Sức mua của người dân"],
      correctAnswer: 0,
    },
    {
      question: "Trong thời bao cấp, người dân chủ yếu mua hàng bằng gì?",
      options: ["Tiền mặt", "Tem phiếu", "Vàng", "Đổi hàng hóa"],
      correctAnswer: 1,
    },
    {
      question: "Điểm yếu lớn nhất của nền kinh tế bao cấp là gì?",
      options: ["Lạm phát", "Thiếu động lực sản xuất", "Tăng trưởng nóng", "Thiếu lao động"],
      correctAnswer: 1,
    },
    {
      question: "Hàng hóa thời bao cấp thường được gọi là gì?",
      options: ["Hàng liên doanh", "Hàng tem phiếu", "Hàng ngoại", "Hàng đặc sản"],
      correctAnswer: 1,
    },
    {
      question: "Ai là người quyết định việc phân phối hàng hóa trong thời bao cấp?",
      options: ["Tư nhân", "Thị trường", "Nhà nước", "Hợp tác xã"],
      correctAnswer: 2,
    },
  ],

  tools: [
    {
      question: '"Khoán 100" được áp dụng trong lĩnh vực nào?',
      options: ["Công nghiệp", "Nông nghiệp", "Dịch vụ", "Thương mại"],
      correctAnswer: 1,
    },
    {
      question: "Mục tiêu chính của Khoán 100 là gì?",
      options: ["Tăng thuế", "Tự chủ sản xuất", "Xuất khẩu nông sản", "Cắt giảm nhân công"],
      correctAnswer: 1,
    },
    {
      question: "Khoán 100 được ban hành vào năm nào?",
      options: ["1978", "1981", "1985", "1988"],
      correctAnswer: 1,
    },
    {
      question: "Khoán 100 giúp nông dân điều gì?",
      options: ["Tăng quyền chủ động sản xuất", "Giảm sản lượng", "Mất đất sản xuất", "Tăng thuế nông nghiệp"],
      correctAnswer: 0,
    },
    {
      question: "Khoán 100 là bước tiền đề của chính sách nào sau này?",
      options: ["Đổi mới 1986", "Khoán 10", "Cải cách hành chính", "Tư nhân hóa doanh nghiệp"],
      correctAnswer: 1,
    },
  ],

  bicycle: [
    {
      question: "Trong thời bao cấp, phương tiện đi lại phổ biến nhất là gì?",
      options: ["Xe máy", "Xe đạp", "Xe lam", "Xe buýt"],
      correctAnswer: 1,
    },
    {
      question: "Xe đạp thời bao cấp thường có xuất xứ từ đâu?",
      options: ["Pháp", "Liên Xô và Tiệp Khắc", "Mỹ", "Nhật Bản"],
      correctAnswer: 1,
    },
    {
      question: "Để mua được xe đạp thời đó, người dân thường phải làm gì?",
      options: [
        "Ra cửa hàng mua ngay",
        "Xếp hàng và có giấy giới thiệu",
        "Đặt hàng qua bưu điện",
        "Trao đổi bằng hàng hóa",
      ],
      correctAnswer: 1,
    },
    {
      question: "Tại sao xe đạp được coi là tài sản lớn thời bao cấp?",
      options: ["Hiếm và đắt đỏ", "Là phương tiện duy nhất", "Không có xăng", "Cả 3 đáp án trên"],
      correctAnswer: 3,
    },
    {
      question: "Xe đạp 'Phượng Hoàng' nổi tiếng có nguồn gốc từ nước nào?",
      options: ["Trung Quốc", "Nga", "Ba Lan", "Nhật Bản"],
      correctAnswer: 0,
    },
  ],

  meat: [
    {
      question: "Đại hội Đảng VI (1986) có ý nghĩa như thế nào với nền kinh tế Việt Nam?",
      options: ["Bắt đầu thời kỳ Đổi mới", "Tăng cường bao cấp", "Cải cách hành chính", "Xây dựng khu công nghiệp"],
      correctAnswer: 0,
    },
    {
      question: "Sau Đổi mới, Việt Nam chuyển từ nền kinh tế nào sang nền kinh tế nào?",
      options: ["Bao cấp → Thị trường", "Tự do → Bao cấp", "Nông nghiệp → Công nghiệp", "Kế hoạch → Xuất khẩu"],
      correctAnswer: 0,
    },
    {
      question: "Mục tiêu chính của công cuộc Đổi mới là gì?",
      options: ["Ổn định và phát triển kinh tế", "Tập trung quyền lực", "Đóng cửa kinh tế", "Giảm xuất khẩu"],
      correctAnswer: 0,
    },
    {
      question: "Sau Đổi mới, hình thức sở hữu nào được thừa nhận?",
      options: ["Chỉ sở hữu Nhà nước", "Nhiều thành phần kinh tế", "Chỉ tập thể", "Chỉ tư nhân"],
      correctAnswer: 1,
    },
    {
      question: "Kết quả nổi bật của Đổi mới là gì?",
      options: [
        "Đời sống người dân cải thiện",
        "Tăng trưởng kinh tế mạnh",
        "Thu hút đầu tư nước ngoài",
        "Tất cả các đáp án trên",
      ],
      correctAnswer: 3,
    },
  ],

  fish: [
    {
      question: "Trước Đổi mới, hoạt động xuất nhập khẩu của Việt Nam chủ yếu với ai?",
      options: ["Các nước XHCN", "Mỹ", "ASEAN", "Nhật Bản"],
      correctAnswer: 0,
    },
    {
      question: "Sau Đổi mới, Việt Nam bắt đầu mở rộng hợp tác với khu vực nào?",
      options: ["ASEAN và quốc tế", "Chỉ Liên Xô", "Chỉ Trung Quốc", "Chỉ châu Phi"],
      correctAnswer: 0,
    },
    {
      question: "Ngành xuất khẩu nào được xem là mũi nhọn của Việt Nam giai đoạn đầu Đổi mới?",
      options: ["Thủy sản", "Dệt may", "Gỗ", "Giày dép"],
      correctAnswer: 0,
    },
    {
      question: "Việt Nam gia nhập ASEAN vào năm nào?",
      options: ["1986", "1991", "1995", "2000"],
      correctAnswer: 2,
    },
    {
      question: "Chính sách mở cửa kinh tế giúp Việt Nam điều gì?",
      options: [
        "Thu hút đầu tư và hội nhập quốc tế",
        "Đóng cửa thị trường",
        "Phụ thuộc Liên Xô",
        "Giảm sản lượng nông nghiệp",
      ],
      correctAnswer: 0,
    },
  ],

  spice: [
    {
      question: "Trong thời bao cấp, người dân mua hàng chủ yếu ở đâu?",
      options: ["Siêu thị", "Cửa hàng mậu dịch quốc doanh", "Chợ tự do", "Cửa hàng tiện lợi"],
      correctAnswer: 1,
    },
    {
      question: "Hàng hóa ở cửa hàng mậu dịch được bán theo hình thức nào?",
      options: ["Ai đến trước mua trước", "Bốc thăm", "Phát theo tem phiếu", "Đấu giá"],
      correctAnswer: 2,
    },
    {
      question: "Khẩu phần tem phiếu thường được cấp theo tiêu chí nào?",
      options: ["Thu nhập cá nhân", "Nghề nghiệp và hộ khẩu", "Tự đăng ký", "Tùy chọn cá nhân"],
      correctAnswer: 1,
    },
    {
      question: "Vì sao thời đó người dân gọi cửa hàng mậu dịch là 'cửa hàng không người bán'?",
      options: ["Ít hàng hóa, bán theo chỉ tiêu", "Tự chọn sản phẩm", "Không cần nhân viên", "Tự thanh toán"],
      correctAnswer: 0,
    },
    {
      question: "Gia vị như nước mắm, muối, đường... thường được phân phối như thế nào?",
      options: ["Bán tự do", "Phát định kỳ bằng tem phiếu", "Do hợp tác xã bán", "Nhập khẩu toàn bộ"],
      correctAnswer: 1,
    },
  ],

  vegetables: [
    {
      question: "Mô hình sản xuất chủ yếu của nông dân Việt Nam thời bao cấp là gì?",
      options: ["Kinh tế tư nhân", "Hợp tác xã nông nghiệp", "Doanh nghiệp Nhà nước", "Tập đoàn cổ phần"],
      correctAnswer: 1,
    },
    {
      question: "Trong hợp tác xã nông nghiệp, nông dân làm việc theo nguyên tắc nào?",
      options: ["Khoán sản phẩm theo lao động", "Làm việc tự do", "Không có quy định", "Làm việc theo ca"],
      correctAnswer: 0,
    },
    {
      question: "Cải cách ruộng đất nhằm mục tiêu gì?",
      options: [
        "Chia lại đất cho nông dân",
        "Tăng thuế nông nghiệp",
        "Tập trung đất cho Nhà nước",
        "Mở rộng công nghiệp",
      ],
      correctAnswer: 0,
    },
    {
      question: "Khó khăn lớn của hợp tác xã nông nghiệp thời bao cấp là gì?",
      options: ["Thiếu lao động", "Thiếu động lực cá nhân", "Thiếu ruộng đất", "Thiếu vốn đầu tư"],
      correctAnswer: 1,
    },
    {
      question: "Sau Khoán 10, người nông dân được quyền gì?",
      options: [
        "Tự chủ trong sản xuất và tiêu thụ",
        "Phải bán hết cho Nhà nước",
        "Bị quản lý chặt chẽ hơn",
        "Không được sở hữu đất",
      ],
      correctAnswer: 0,
    },
  ],
}

interface Score {
  playerName: string
  score: number
  itemsCollected: number
  timestamp: number
  correctAnswers: number
  riceLeft: number
  timeLeft: number
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
  saveScore: (playerName: string) => Promise<void>
  getLeaderboard: () => Score[]
}

const MERCHANTS: Merchant[] = [
  {
    id: "wood",
    name: "Người Bán Củi",
    x: 2,
    y: 2,
    icon: "🪵",
    color: "#8b4513",
    item: "wood",
    price: 7,
  },
  {
    id: "tools",
    name: "Người Bán Dụng Cụ",
    x: 12,
    y: 2,
    icon: "🔧",
    color: "#d4a574",
    item: "tools",
    price: 13,
  },
  {
    id: "bicycle",
    name: "Người Bán Xe Đạp",
    x: 2,
    y: 10,
    icon: "🚲",
    color: "#c85a3a",
    item: "bicycle",
    price: 49,
  },
  {
    id: "meat",
    name: "Người Bán Thịt",
    x: 7,
    y: 5,
    icon: "🥩",
    color: "#a0826d",
    item: "meat",
    price: 11,
  },
  {
    id: "fish",
    name: "Người Bán Cá",
    x: 12,
    y: 10,
    icon: "🐟",
    color: "#6b5d4f",
    item: "fish",
    price: 9,
  },
  {
    id: "spice",
    name: "Người Bán Gia Vị",
    x: 7,
    y: 1,
    icon: "🌶️",
    color: "#e8956f",
    item: "spice",
    price: 5,
  },
  {
    id: "vegetables",
    name: "Người Bán Rau",
    x: 1,
    y: 6,
    icon: "🥬",
    color: "#9d8b7e",
    item: "vegetables",
    price: 6,
  },
]

export const useGameStore = create<GameStoreState>((set, get) => ({
  gameState: {
    playerPos: { x: 7, y: 6 },
    merchants: MERCHANTS,
    inventory: {
      wood: 0,
      tools: 0,
      bicycle: 0,
      meat: 0,
      fish: 0,
      spice: 0,
      vegetables: 0,
    },
    rice: 100,
    timeLeft: 300,
    gameOver: false,
    showQuiz: false,
    currentQuiz: null,
    currentMerchant: null,
    nearbyMerchant: null,
    message: "",
    totalScore: 0,
    correctAnswers: 0,
    showResultModal: false,
    finalScore: 0,
  },
  playerPos: { x: 7, y: 6 },
  merchants: MERCHANTS,
  inventory: {
    wood: 0,
    tools: 0,
    bicycle: 0,
    meat: 0,
    fish: 0,
    spice: 0,
    vegetables: 0,
  },
  rice: 100,
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
        const quizList = QUIZZES[merchant.item]
        if (!quizList) return

        const randomQuiz = quizList[Math.floor(Math.random() * quizList.length)]
        set({
          gameState: {
            ...state.gameState,
            showQuiz: true,
            currentQuiz: randomQuiz,
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
      const newCorrectAnswers = state.gameState.correctAnswers + (isCorrect ? 1 : 0)

      const message = isCorrect ? `Chính xác! Bạn được giảm giá 50% 👏` : `Sai rồi! Bạn phải trả đủ giá trị 😅`

      const allCollected = Object.values(newInventory).every((v) => v > 0)

      if (allCollected) {
        const finalScore = Math.floor(newCorrectAnswers * 10 + newRice / 2 + state.timeLeft / 10)

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
            message: "🎉 Bạn đã thu thập đủ 7 loại hàng hóa! Trò chơi kết thúc! 🏆",
            correctAnswers: newCorrectAnswers,
            totalScore: newCorrectAnswers * 10,
            gameOver: true,
            showResultModal: true,
            finalScore: finalScore,
          },
        })

        const PlayerName = localStorage.getItem("currentPlayerName") || "Người Chơi"
        get().saveScore(PlayerName)
      } else {
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
            correctAnswers: newCorrectAnswers,
            totalScore: newCorrectAnswers * 10,
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
    }
  },

  resetGame: () => {
    set({
      gameState: {
        playerPos: { x: 7, y: 6 },
        merchants: MERCHANTS,
        inventory: {
          wood: 0,
          tools: 0,
          bicycle: 0,
          meat: 0,
          fish: 0,
          spice: 0,
          vegetables: 0,
        },
        rice: 100,
        timeLeft: 300,
        gameOver: false,
        showQuiz: false,
        currentQuiz: null,
        currentMerchant: null,
        nearbyMerchant: null,
        message: "",
        totalScore: 0,
        correctAnswers: 0,
        showResultModal: false,
        finalScore: 0,
      },
      playerPos: { x: 7, y: 6 },
      inventory: {
        wood: 0,
        tools: 0,
        bicycle: 0,
        meat: 0,
        fish: 0,
        spice: 0,
        vegetables: 0,
      },
      rice: 100,
      timeLeft: 300,
    })
  },

  saveScore: async (playerName: string) => {
  const state = get()
  const correctAnswers = state.gameState.correctAnswers || 0
  const riceLeft = state.rice
  const timeLeft = state.timeLeft

  // ✅ Áp dụng công thức tính điểm
  const finalScore = Math.floor(correctAnswers * 10 + riceLeft / 2 + timeLeft / 10)

  const itemsCollected = Object.values(state.inventory).filter((v) => v > 0).length

  // ✅ Dữ liệu chi tiết (chỉ lưu trong localStorage)
  const scoreData = {
    playerName,
    score: finalScore,
    itemsCollected,
    correctAnswers,
    riceLeft,
    timeLeft,
    timestamp: Date.now(),
  }

  try {
    // ✅ Chỉ gửi tên + điểm cuối cùng lên API
    const response = await fetch("https://690abdba1a446bb9cc23a727.mockapi.io/score", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        playerName,
        score: finalScore, // chỉ gửi hai trường này
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to save score")
    }

    // ✅ Lưu toàn bộ dữ liệu chi tiết trong localStorage
    const scores = JSON.parse(localStorage.getItem("gameScores") || "[]") as typeof scoreData[]
    scores.push(scoreData)
    scores.sort((a, b) => b.score - a.score)
    localStorage.setItem("gameScores", JSON.stringify(scores.slice(0, 100)))
  } catch (error) {
    console.error("Error saving score:", error)

    // vẫn lưu localStorage khi API lỗi
    const scores = JSON.parse(localStorage.getItem("gameScores") || "[]") as typeof scoreData[]
    scores.push(scoreData)
    scores.sort((a, b) => b.score - a.score)
    localStorage.setItem("gameScores", JSON.stringify(scores.slice(0, 100)))
  }
},


  getLeaderboard: () => {
    return JSON.parse(localStorage.getItem("gameScores") || "[]").slice(0, 10)
  },
}))

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
