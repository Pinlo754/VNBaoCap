"use client"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Về Dự Án</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Một nền tảng giáo dục tương tác về kinh tế thời bao cấp Việt Nam, kết hợp game và nội dung lịch sử.
            </p>
          </div>
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Liên Kết</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:underline">
                  Giới Thiệu
                </a>
              </li>
              <li>
                <a href="/timeline" className="hover:underline">
                  Dòng Thời Gian
                </a>
              </li>
              <li>
                <a href="/game" className="hover:underline">
                  Game
                </a>
              </li>
              <li>
                <a href="/leaderboard" className="hover:underline">
                  Bảng Xếp Hạng
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Tài Liệu Tham Khảo</h3>
            <p className="text-primary-foreground/80 text-sm">
              Dựa trên giáo trình Chủ nghĩa Mác-Lênin và các tài liệu lịch sử chính thức.
            </p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p>© 2025 Việt Nam Thời Bao Cấp. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
