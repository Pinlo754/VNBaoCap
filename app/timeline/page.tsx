"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { TimelineHeroBanner } from "@/components/timeline/timeline-hero-banner"
import { TimelineBanner } from "@/components/timeline/timeline-banner"

export default function Timeline() {
  // const events = [
  //   {
  //     year: 1975,
  //     title: "Thống Nhất Đất Nước",
  //     description: "Bắt đầu áp dụng mô hình kinh tế kế hoạch hóa tập trung trên toàn quốc.",
  //     significance: "Bước đầu xây dựng chủ nghĩa xã hội",
  //   },
  //   {
  //     year: "1976-1980",
  //     title: "Kế Hoạch 5 Năm Lần Thứ Nhất",
  //     description: "Tập trung vào phát triển công nghiệp nặng, nhưng kết quả không đạt mục tiêu.",
  //     significance: "Hàng hóa khan hiếm, kinh tế trì trệ",
  //   },
  //   {
  //     year: 1981,
  //     title: 'Chính Sách "Khoán 100"',
  //     description: "Áp dụng trong nông nghiệp, cho phép nông dân giữ lại sản phẩm vượt chỉ tiêu.",
  //     significance: "Bước chuyển mở đầu cho đổi mới tư duy kinh tế",
  //   },
  //   {
  //     year: 1985,
  //     title: "Cải Cách Giá - Lương - Tiền",
  //     description: "Đổi tiền, tăng lương, nhưng dẫn đến lạm phát cao.",
  //     significance: "Khủng hoảng kinh tế, dân sinh khó khăn",
  //   },
  //   {
  //     year: 1986,
  //     title: "Đại Hội VI - Khởi Đầu Đổi Mới",
  //     description: "Quyết định chuyển sang kinh tế thị trường định hướng xã hội chủ nghĩa.",
  //     significance: "Kết thúc cơ chế bao cấp, bước ngoặt lịch sử",
  //   },
  // ]
  const events = [
  {
    year: 1975,
    title: "Thống Nhất Đất Nước",
    description: "Bắt đầu áp dụng mô hình kinh tế kế hoạch hóa tập trung trên toàn quốc.",
    significance: "Bước đầu xây dựng chủ nghĩa xã hội",
    image: "/timeLine/1975.png",
  },
  {
    year: 1977,
    title: "Cải tạo công thương nghiệp tư nhân miền Nam",
    description: "Triển khai các chiến dịch cải tạo kinh tế và tập thể hóa, chuyển doanh nghiệp tư nhân sang sở hữu nhà nước hoặc tập thể.",
    significance: "Áp đặt mô hình kinh tế kế hoạch hóa trên toàn quốc, làm giảm hiệu quả sản xuất kinh doanh",
    image: "/timeLine/1977.png",
    subEvents: [
      {
        year: 1977,
        title: "Hoàn Thành Cải Tạo Công Thương Nghiệp Tư Bản Tư Do Miền Nam",
        description: "Hội nghị Bộ Chính trị tháng 3/1977 quyết định hoàn thành cải tạo xã hội chủ nghĩa đối với công thương nghiệp tư bản tư doanh miền Nam trong 2 năm 1977-1978.",
        significance: "Hoàn thiện việc chuyển đổi nền kinh tế miền Nam theo mô hình kế hoạch hóa tập trung, tăng cường kiểm soát nhà nước đối với các ngành kinh doanh, tạo nền tảng cho thời kỳ bao cấp toàn diện."
      },
      {
        year: 1977,
        title: "Khởi Động Kế Hoạch Vùng Kinh Tế Mới",
        description: "Ngày 3/10/1977, Hội đồng Chính phủ ban hành Quyết định số 272-CP về các chính sách đối với hợp tác xã mở rộng diện tích nông-lâm nghiệp, xây dựng vùng kinh tế mới, định canh định cư.",
        significance: "Khởi đầu chương trình xây dựng vùng kinh tế mới nhằm tái phân bố lao động và dân cư, khai hoang đất đai bỏ hoang, mở rộng sản xuất nông nghiệp tập thể, tạo sinh kế mới cho người dân và góp phần giảm áp lực dân cư tại các vùng đông đúc."
      }
    ]
  },
  {
    year: 1978,
    title: "Xóa bỏ tư hữu ruộng đất",
    description: "Nhà nước trưng mua ruộng đất của cá nhân, đẩy mạnh hợp tác hóa nông nghiệp.",
    significance: "Kinh tế nông nghiệp gặp khó khăn, xuất hiện khủng hoảng sản xuất lương thực",
    image: "/timeLine/1978.png",
    subEvents: [
      {
        year: 1978,
        title: "Khủng hoảng viện trợ quốc tế",
        description: "Sau năm 1977, viện trợ từ Liên Xô giảm, viện trợ từ Trung Quốc bị cắt hoàn toàn; các nước phương Tây, Nhật Bản ngừng cung cấp viện trợ do Việt Nam duy trì kinh tế kế hoạch hóa.",
        significance: "Nhà nước không đủ nguồn lực nhập khẩu hàng hóa thiết yếu, gây tình trạng thiếu vật tư, thực phẩm, thuốc men trong toàn xã hội."
      },
      {
        year: 1978,
        title: "Đổi tiền toàn quốc",
        description: "Nhà nước tổ chức một cuộc đổi tiền lớn, thực hiện đồng loạt trên cả nước, đặc biệt ảnh hưởng sâu rộng đến đời sống và hoạt động kinh tế của người dân miền Nam.",
        significance: "Tác động mạnh đến tâm lý xã hội, kinh tế tư nhân gần như bị xóa bỏ, tạo khó khăn trong lưu thông hàng hóa và sản xuất."
      }
    ]
  },
  {
    year: "1976-1980",
    title: "Kế Hoạch 5 Năm Lần Thứ Nhất",
    description: "Tập trung vào phát triển công nghiệp nặng, nhưng kết quả không đạt mục tiêu.",
    significance: "Hàng hóa khan hiếm, kinh tế trì trệ",
    image: "/khucongnghiep.png",
  },
  {
    year: 1979,
    title: "Nghị quyết 20-NQ/TW",
    description: "Cho phép địa phương xuất nhập khẩu và sử dụng lại kinh tế tư nhân có kiểm soát.",
    significance: "Bước thử nghiệm đầu tiên về cởi trói kinh tế địa phương",
    image: "/timeLine/1979.png",
  },
  {
    year: 1981,
    title: "Chính Sách 'Khoán 100'",
    description: "Ban hành Chỉ thị 100, cho phép khoán sản phẩm đến nhóm và người lao động trong hợp tác xã nông nghiệp.",
    significance: "Bước chuyển mở đầu cho đổi mới tư duy kinh tế, nông dân được giữ sản phẩm vượt chỉ tiêu",
    image: "/timeLine/1981.png",
  },
  {
    year: 1982,
    title: "Quyết định 146/HĐBT",
    description: "Bổ sung chính sách khoán sản phẩm trên cơ sở thực tiễn nhằm linh hoạt cơ chế khoán.",
    significance: "Mở đường cho các chính sách đổi mới mạnh hơn sau này",
    image: "/timeLine/1982.png",
  },
  {
    year: "1983-1984",
    title: "Khủng hoảng lương thực và lạm phát",
    description: "Thiên tai và quản lý yếu kém dẫn tới thiếu lương thực, bắt đầu lạm phát nghiêm trọng.",
    significance: "Khủng hoảng kinh tế-xã hội, đời sống nhân dân khó khăn",
    image: "/timeLine/1983.png",
  },
  {
    year: 1985,
    title: "Cải Cách Giá - Lương - Tiền",
    description: "Đổi tiền, tăng lương, điều chỉnh giá cả để kiểm soát kinh tế, nhưng dẫn đến lạm phát phi mã.",
    significance: "Kinh tế lâm vào khủng hoảng sâu sắc",
    image: "/timeLine/1985.png",
  },
  {
    year: 1986,
    title: "Đại Hội VI - Khởi Đầu Đổi Mới",
    description: "Quyết định chuyển sang kinh tế thị trường định hướng xã hội chủ nghĩa, chấm dứt cơ chế bao cấp.",
    significance: "Chính thức kết thúc thời kỳ bao cấp, mở ra thời kỳ đổi mới",
    image: "/timeLine/1986.png",
  }
]
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="w-full">
        {/* Hero Banner */}
        <TimelineHeroBanner />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Các Mốc Thời Gian Quan Trọng</h2>
          <p className="text-lg text-foreground/70 mb-12">
            Khám phá chi tiết các sự kiện kinh tế quan trọng định hình nên đất nước Việt Nam
          </p>

          <div className="relative">
            {/* Timeline Banners */}
            <div className="mb-16">
              {events.map((event, index) => (
                <TimelineBanner key={index} event={event} index={index} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
