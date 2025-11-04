"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">
            Giới Thiệu Chung
          </h1>

          <div className="prose prose-lg max-w-none mb-12">
            {/* ================= KHÁI NIỆM ================= */}
            <section className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                Khái Niệm Kinh Tế Bao Cấp
              </h2>

              {/* Bố cục chia 2 cột: chữ và hình */}
              <div className="flex flex-col md:flex-row items-start gap-4">
                {/* --- Nội dung chữ --- */}
                <div className="md:w-2/3 text-foreground/80 leading-relaxed">
                  <p className="mb-4">
                    Kinh tế bao cấp là mô hình tổ chức kinh tế trong đó Nhà nước
                    giữ vai trò trung tâm, trực tiếp điều hành và kiểm soát toàn
                    bộ quá trình sản xuất, phân phối, lưu thông và tiêu dùng
                    trong xã hội. Đây là đặc trưng của nền kinh tế kế hoạch hóa
                    tập trung – nơi mọi hoạt động đều được quy định bằng các chỉ
                    tiêu, kế hoạch và mệnh lệnh hành chính từ trung ương.
                  </p>

                  <p className="mb-4">
                    Mô hình này hình thành tại Việt Nam trong bối cảnh đất nước
                    vừa trải qua chiến tranh, cần thống nhất quản lý để khôi
                    phục kinh tế, bảo đảm công bằng xã hội và phục vụ mục tiêu
                    xây dựng chủ nghĩa xã hội. Trong giai đoạn đó, Nhà nước là
                    chủ thể duy nhất nắm giữ tư liệu sản xuất lớn, còn người dân
                    chủ yếu làm việc trong khu vực quốc doanh hoặc hợp tác xã.
                  </p>

                  <p className="mb-2">
                    Trong nền kinh tế bao cấp, các yếu tố thị trường như giá cả,
                    cung – cầu hay cạnh tranh gần như không tồn tại. Thay vào
                    đó, mọi hoạt động sản xuất, phân phối và tiêu dùng được thực
                    hiện thông qua kế hoạch thống nhất và các công cụ quản lý
                    hành chính như chỉ tiêu sản xuất, hệ thống tem phiếu, giá cố
                    định, cùng chế độ cấp phát vật tư.
                  </p>
                </div>

                {/* --- Hình ảnh minh họa --- */}
                <div className="md:w-1/3 flex justify-center">
                  <img
                    src="/baocapintro.png"
                    alt="Biểu tượng kinh tế bao cấp Việt Nam"
                    className="rounded-xl shadow-lg w-full max-w-md object-cover"
                  />
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full mb-8">
                <AccordionItem value="plan">
                  <AccordionTrigger className="text-lg font-semibold text-primary">
                    Kế Hoạch Hóa Tập Trung
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 leading-relaxed">
                    <CardContent className="text-foreground/80">
                      Nhà nước đóng vai trò như “người điều phối duy nhất” của
                      nền kinh tế. Các Bộ, Ngành trung ương lập kế hoạch chi
                      tiết cho từng lĩnh vực sản xuất: từ nông nghiệp, công
                      nghiệp, giao thông vận tải, đến dịch vụ. Mỗi xí nghiệp,
                      nhà máy, hợp tác xã được giao chỉ tiêu sản lượng, nguyên
                      liệu, lao động, và mức tiêu thụ cụ thể, không có quyền tự
                      chủ kinh doanh.
                      <br />
                      <br />
                      Kế hoạch năm sau phải dựa trên kế hoạch năm trước, tạo ra
                      cơ chế “xin – cho”: các đơn vị sản xuất muốn có vật tư,
                      vốn hay chỉ tiêu đều phải “xin” cấp trên, làm giảm tính
                      chủ động và sáng tạo.
                    </CardContent>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ticket">
                  <AccordionTrigger className="text-lg font-semibold text-primary">
                    Hệ Thống Tem Phiếu
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 leading-relaxed">
                    <CardContent className="flex flex-col md:flex-row items-start gap-6 text-foreground/80">
                      {/* Phần chữ */}
                      <div className="md:w-2/3">
                        <p>
                          Hệ thống tem phiếu được coi là “đặc trưng nhất” của
                          thời bao cấp. Thay vì dùng tiền để mua hàng hóa theo
                          nhu cầu, người dân phải dùng tem phiếu do Nhà nước
                          phát, mỗi loại tem tương ứng với một mặt hàng như gạo,
                          thịt, vải, dầu hỏa, xà phòng...
                        </p>
                        <br />
                        <p>
                          Mỗi hộ dân được phân phối một định mức cố định hàng
                          tháng, dù có tiền cũng không thể mua vượt định mức.
                          Điều này giúp kiểm soát phân phối trong điều kiện khan
                          hiếm, nhưng cũng khiến thị trường trở nên kém linh
                          hoạt, và tạo ra “chợ đen” nơi hàng hóa được mua bán
                          ngầm với giá cao hơn nhiều.
                        </p>
                      </div>

                      {/* Hình ảnh */}
                      <div className="md:w-1/3 flex justify-center">
                        <img
                          src="/temphieu.png"
                          alt="Tem phiếu thời bao cấp"
                          className="rounded-lg shadow-md w-full max-w-sm object-cover"
                        />
                      </div>
                    </CardContent>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="price">
                  <AccordionTrigger className="text-lg font-semibold text-primary">
                    Giá Cố Định
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 leading-relaxed">
                    <CardContent className="text-foreground/80">
                      Trong cơ chế bao cấp, Nhà nước quy định giá bán cho mọi
                      loại hàng hóa, dịch vụ và cả mức lương của người lao động.
                      Giá cả không thay đổi dù nguồn cung hay nhu cầu thị trường
                      biến động, dẫn đến tình trạng “thừa cái không ai cần,
                      thiếu cái ai cũng muốn”.
                      <br />
                      <br />
                      Ví dụ: một chiếc xe đạp được định giá chỉ vài trăm đồng,
                      nhưng người dân phải đăng ký mua theo danh sách và chờ đợi
                      nhiều năm mới được nhận.
                    </CardContent>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ownership">
                  <AccordionTrigger className="text-lg font-semibold text-primary">
                    Quốc Doanh & Tập Thể
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 leading-relaxed">
                    <CardContent className="text-foreground/80">
                      Toàn bộ nền kinh tế vận hành dựa trên hai khu vực chính:
                      doanh nghiệp nhà nước (quốc doanh) và hợp tác xã (tập
                      thể). Kinh tế tư nhân bị xem là “tàn dư của chủ nghĩa tư
                      bản” và bị hạn chế nghiêm ngặt.
                      <br />
                      <br />
                      Trong nông nghiệp, các hộ nông dân được tổ chức vào hợp
                      tác xã, cùng nhau canh tác trên ruộng đất tập thể, chia
                      sản phẩm theo công điểm. Trong công nghiệp, các xí nghiệp
                      quốc doanh sản xuất theo chỉ tiêu nhà nước giao, không
                      được phép cạnh tranh hoặc tự định giá sản phẩm.
                    </CardContent>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <p className="text-foreground/80 leading-relaxed mt-6">
                Có thể nói, nền kinh tế bao cấp là sản phẩm của một thời kỳ lịch
                sử đặc biệt, khi đất nước cần khôi phục sau chiến tranh và xây
                dựng nền tảng xã hội chủ nghĩa. Dù cơ chế này bộc lộ nhiều hạn
                chế về hiệu quả, nó vẫn góp phần ổn định xã hội, đảm bảo công
                bằng trong phân phối, và tạo nền tảng cho công cuộc Đổi mới sau
                này.
              </p>
            </section>

            {/* ================= ƯU NHƯỢC ĐIỂM ================= */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6 text-center">
                Ưu Điểm & Nhược Điểm Của Nền Kinh Tế Bao Cấp
              </h2>

              <p className="text-center text-foreground/70 mb-8 max-w-3xl mx-auto">
                Cơ chế bao cấp từng là mô hình phổ biến trong giai đoạn đầu xây
                dựng đất nước, phản ánh nỗ lực của Nhà nước trong việc đảm bảo
                công bằng xã hội và ổn định sau chiến tranh. Tuy nhiên, cùng với
                thời gian, mô hình này cũng bộc lộ nhiều điểm hạn chế trong phát
                triển kinh tế.
              </p>

              <div className="grid md:grid-cols-2 gap-10">
                {/* ====== ƯU ĐIỂM ====== */}
                <Card className="bg-accent/5 border-accent/40 shadow-md hover:shadow-lg transition-all">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif font-bold text-accent text-center">
                      🌿 Ưu Điểm
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-foreground/80 space-y-4 leading-relaxed">
                    <p>
                      <span className="font-semibold text-accent">
                        1️⃣ Đảm bảo nhu cầu cơ bản cho toàn dân:
                      </span>
                      Nhà nước bao cấp toàn bộ lương thực, quần áo, nhà ở và y
                      tế, giúp người dân ổn định cuộc sống trong thời kỳ khan
                      hiếm, không ai bị bỏ lại phía sau.
                    </p>
                    <p>
                      <span className="font-semibold text-accent">
                        2️⃣ Không có thất nghiệp:
                      </span>
                      Mọi người đều được phân công việc làm trong cơ quan, xí
                      nghiệp hoặc hợp tác xã, thể hiện tinh thần “ai cũng có
                      việc, ai cũng có phần”.
                    </p>
                    <p>
                      <span className="font-semibold text-accent">
                        3️⃣ Bình đẳng và đoàn kết xã hội:
                      </span>
                      Khoảng cách giàu – nghèo hầu như không tồn tại. Tinh thần
                      tương trợ, chia sẻ khó khăn trở thành giá trị nổi bật
                      trong đời sống cộng đồng.
                    </p>
                    <p>
                      <span className="font-semibold text-accent">
                        4️⃣ Huy động sức mạnh tập thể:
                      </span>
                      Nhà nước dễ dàng tập trung nguồn lực cho các công trình
                      trọng điểm quốc gia, nhất là trong bối cảnh tái thiết đất
                      nước sau chiến tranh.
                    </p>
                  </CardContent>
                </Card>

                {/* ====== NHƯỢC ĐIỂM ====== */}
                <Card className="bg-destructive/5 border-destructive/40 shadow-md hover:shadow-lg transition-all">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif font-bold text-destructive text-center">
                      ⚙️ Nhược Điểm
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-foreground/80 space-y-4 leading-relaxed">
                    <p>
                      <span className="font-semibold text-destructive">
                        1️⃣ Thiếu hụt hàng hóa và kém hiệu quả:
                      </span>
                      Cơ chế cấp phát cứng nhắc khiến sản xuất không đáp ứng đủ
                      nhu cầu; người dân phải xếp hàng dài để mua hàng thiết
                      yếu, dẫn đến sự hình thành của “chợ đen”.
                    </p>
                    <p>
                      <span className="font-semibold text-destructive">
                        2️⃣ Thiếu động lực cá nhân:
                      </span>
                      Tiền lương và thu nhập được chia đều, không phản ánh năng
                      suất làm việc, khiến người lao động mất động lực sáng tạo
                      và cải tiến kỹ thuật.
                    </p>
                    <p>
                      <span className="font-semibold text-destructive">
                        3️⃣ Quan liêu và cơ chế “xin – cho”:
                      </span>
                      Mọi hoạt động đều phụ thuộc vào cấp trên phê duyệt, tạo ra
                      tình trạng hành chính rườm rà, kém linh hoạt và dễ phát
                      sinh tiêu cực.
                    </p>
                    <p>
                      <span className="font-semibold text-destructive">
                        4️⃣ Lạc hậu và trì trệ:
                      </span>
                      Khi thế giới bước vào thời kỳ công nghiệp hóa và hội nhập,
                      mô hình bao cấp khiến nền kinh tế Việt Nam tụt hậu, sản
                      xuất kém hiệu quả và chậm thích ứng với đổi mới.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <p className="text-foreground/80 leading-relaxed mt-10 text-center max-w-4xl mx-auto italic">
                👉 Có thể nói, nền kinh tế bao cấp mang tính lịch sử — tuy giúp
                đất nước ổn định trong giai đoạn khó khăn, nhưng chính những hạn
                chế nội tại đã thôi thúc Việt Nam tiến hành công cuộc{" "}
                <span className="font-semibold text-primary">
                  Đổi mới năm 1986
                </span>
                , mở ra thời kỳ phát triển năng động hơn.
              </p>
            </section>

            {/* ================= KINH TẾ BAO CẤP Ở VIỆT NAM ================= */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6 text-center">
                Kinh Tế Bao Cấp Ở Việt Nam
              </h2>

              {/* --- Bối cảnh lịch sử --- */}
              <h3 className="text-xl font-serif font-semibold text-accent mb-3">
                🕊️ Bối Cảnh Lịch Sử
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-2">
                Sau khi đất nước thống nhất năm 1975, Việt Nam bước vào giai
                đoạn khôi phục kinh tế trong hoàn cảnh vô cùng khó khăn. Cả nước
                bị tàn phá nặng nề sau chiến tranh, cơ sở hạ tầng hầu như bị phá
                hủy, nguồn lực kiệt quệ, lương thực thiếu thốn, lại chịu thêm
                cấm vận từ các nước phương Tây. Trong bối cảnh đó, Nhà nước lựa
                chọn mô hình{" "}
                <span className="font-semibold text-primary">
                  kế hoạch hóa tập trung
                </span>{" "}
                – một cơ chế quản lý nhằm đảm bảo công bằng xã hội, thống nhất
                phân phối và huy động sức dân cho công cuộc tái thiết đất nước.
              </p>

              <p className="text-foreground/80 leading-relaxed mb-4">
                Trong giai đoạn này, khẩu hiệu “
                <em>Sản xuất là mặt trận hàng đầu</em>” và “
                <em>Ai cũng có việc làm, ai cũng có cơm ăn áo mặc</em>” trở
                thành phương châm hành động của toàn xã hội. Nhà nước là người
                điều phối duy nhất, còn người dân là lực lượng trực tiếp lao
                động và thực hiện chỉ tiêu kế hoạch.
              </p>

              {/* --- Đời sống thời bao cấp --- */}
              <h3 className="text-xl font-serif font-semibold text-accent mb-3">
                🏠 Đời Sống Thời Bao Cấp
              </h3>
              <div className="flex flex-col md:flex-row justify-items-start gap-12 my-8">
                {/* Ảnh bên trái */}
                <div className="md:w-0.1 flex justify-center">
                  <img
                    src="/xephang.png"
                    alt="Người dân xếp hàng mua hàng bằng tem phiếu thời bao cấp"
                    className="rounded-2xl shadow-lg w-full max-w-md object-cover"
                  />
                </div>

                {/* Nội dung bên phải */}
                <div className="md:w-1/2 text-foreground/80 leading-relaxed">
                  <p className="mb-4">
                    Đời sống người dân trong thời kỳ bao cấp giản dị, thiếu thốn
                    nhưng đậm chất nghĩa tình. Hầu hết hàng hóa – từ gạo, thịt,
                    vải vóc đến dầu hỏa – đều được phân phối qua{" "}
                    <span className="font-semibold text-primary">
                      hệ thống tem phiếu
                    </span>
                    . Mỗi hộ gia đình được cấp một sổ mua hàng với định mức cụ
                    thể: mỗi người 13kg gạo, vài lạng thịt, nửa mét vải... Mua
                    hàng không chỉ là nhu cầu, mà còn là “nhiệm vụ” phải đi sớm,
                    xếp hàng dài chờ đến lượt.
                  </p>

                  <p className="mb-4">
                    Những buổi sáng ở các thành phố lớn như Hà Nội hay Hải
                    Phòng, người dân thường xếp hàng dài trước cửa{" "}
                    <span className="font-semibold text-primary">
                      cửa hàng mậu dịch quốc doanh
                    </span>
                    . Tiếng loa phường vang lên đều đặn mỗi sáng, báo tin “hôm
                    nay có hàng về”. Ai nghe được tin sớm sẽ “đặt gạch” giữ chỗ,
                    người đến sau thì chỉ biết chờ. Mỗi khi có mặt hàng hiếm như
                    xà phòng thơm, đường trắng hay thịt lợn, cả khu phố lại xôn
                    xao, rộn ràng.
                  </p>

                  <p className="text-sm text-foreground/70 italic">
                    Người dân xếp hàng mua hàng bằng tem phiếu – hình ảnh tiêu
                    biểu của thời kỳ bao cấp.
                  </p>
                </div>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-4">
                Trong các hộ gia đình, bữa cơm thường chỉ có cơm độn bo bo,
                khoai sắn, chút cá khô hay đậu phụ. Những món “xa xỉ” như thịt
                bò, cà phê hay thuốc lá ngoại hiếm khi xuất hiện, và thường được
                trao đổi trên <span className="italic">“chợ đen”</span> – nơi
                mọi thứ đều có giá cao gấp nhiều lần. Dù vậy, người dân vẫn giữ
                được tinh thần lạc quan, giúp đỡ lẫn nhau, “tối lửa tắt đèn có
                nhau”.
              </p>

              <p className="text-foreground/80 leading-relaxed mb-6">
                Cuộc sống nơi công sở và xí nghiệp cũng có nét rất riêng: giờ
                làm việc được quy định nghiêm ngặt, nhưng năng suất lại phụ
                thuộc nhiều vào “thi đua” và “chỉ tiêu”. Nhiều người đùa rằng
                “đi làm nhiều khi là để có mặt chứ không phải để sản xuất”. Song
                bên cạnh đó, tinh thần tập thể và đoàn kết vẫn là sợi dây gắn
                kết cộng đồng, khiến thời bao cấp trở thành một ký ức vừa khó
                khăn, vừa đầy hoài niệm.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/temphieu2.png"
                    alt="Tem phiếu và sổ mua hàng"
                    className="h-90 object-cover"
                  />
                  <p className="text-sm text-center text-foreground/70 mt-4 italic">
                    Tem phiếu – “tấm vé” để mua hàng thiết yếu, gắn liền với ký
                    ức của hàng triệu người Việt.
                  </p>
                </div>

                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/muahangmaudich.png"
                    alt="Cửa hàng mậu dịch quốc doanh"
                    className="w-full object-cover"
                  />
                  <p className="text-sm text-center text-foreground/70 mt-2 italic">
                    Cửa hàng mậu dịch quốc doanh – nơi mọi giao dịch đều dựa
                    trên kế hoạch và tem phiếu, không theo giá thị trường.
                  </p>
                </div>
              </div>

              {/* --- Hậu quả và động lực đổi mới --- */}
              <h3 className="text-xl font-serif font-semibold text-accent mb-3">
                ⚙️ Hậu Quả & Động Lực Đổi Mới
              </h3>

              <div className="text-foreground/80 leading-relaxed space-y-4">
                <p>
                  Đến đầu thập niên 1980, nền kinh tế Việt Nam rơi vào khủng
                  hoảng trầm trọng. Cơ chế kế hoạch hóa tập trung đã bộc lộ hàng
                  loạt hạn chế: sản xuất đình trệ, năng suất thấp, hàng hóa khan
                  hiếm, trong khi ngân sách Nhà nước kiệt quệ và lạm phát tăng
                  vọt. Hệ thống tem phiếu không còn đủ sức kiểm soát phân phối,
                  “chợ đen” nở rộ khắp nơi, làm méo mó thị trường và suy giảm
                  niềm tin của người dân.
                </p>

                <p>
                  Người dân thành thị phải xếp hàng từ tờ mờ sáng để mua lương
                  thực, còn nông dân lao động cực nhọc mà vẫn thiếu ăn. Tiền
                  lương danh nghĩa tăng nhưng giá trị thực tế ngày càng giảm —
                  có thời điểm lạm phát lên tới{" "}
                  <span className="font-semibold text-destructive">
                    700% mỗi năm
                  </span>
                  . Cuộc sống khó khăn khiến nhiều người rời bỏ cơ quan nhà nước
                  để tìm cách mưu sinh ngoài luồng, tạo ra một “nền kinh tế hai
                  mặt” – chính thức và phi chính thức – tồn tại song song.
                </p>

                <p>
                  Trong bối cảnh đó, nền kinh tế gần như tê liệt: sản xuất đình
                  đốn, xuất khẩu thấp, đầu tư nước ngoài bằng không, và đời sống
                  nhân dân ngày càng khó khăn. Xã hội đứng trước yêu cầu cấp
                  bách phải đổi mới toàn diện để thoát khỏi vòng luẩn quẩn của
                  đói nghèo và trì trệ.
                </p>

                <h4 className="text-lg font-serif font-semibold text-primary mt-8">
                  🔁 Công Cuộc Đổi Mới 1986 – Bước Ngoặt Lịch Sử
                </h4>

                <p>
                  Trước thực trạng đó, Đại hội Đảng toàn quốc lần thứ VI (năm
                  1986) đã mở ra{" "}
                  <span className="font-semibold text-primary">
                    công cuộc Đổi mới
                  </span>{" "}
                  – một quyết định mang tính bước ngoặt trong lịch sử Việt Nam
                  hiện đại. Tư duy kinh tế được thay đổi căn bản: từ cơ chế bao
                  cấp sang{" "}
                  <span className="font-semibold text-primary">
                    nền kinh tế thị trường định hướng xã hội chủ nghĩa
                  </span>
                  , với mục tiêu khuyến khích sản xuất, tôn trọng quy luật cung
                  – cầu, và phát huy mọi thành phần kinh tế.
                </p>

                <p>
                  Nhà nước bắt đầu dỡ bỏ các rào cản hành chính, trao quyền tự
                  chủ cho doanh nghiệp, cho phép tư nhân kinh doanh và thu hút
                  vốn đầu tư nước ngoài. Hệ thống tem phiếu dần được bãi bỏ, giá
                  cả được điều chỉnh theo thị trường, và người dân có quyền lựa
                  chọn sản phẩm, dịch vụ theo nhu cầu thực tế.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="/doimoi1986.png"
                      alt="Đại hội VI năm 1986 mở ra công cuộc Đổi mới"
                      className="h-100 object-cover"
                    />
                    <p className="text-sm text-center text-foreground/70 mt-2 italic">
                      Đại hội Đảng lần thứ VI (1986) – nơi khởi đầu công cuộc
                      Đổi mới, đánh dấu sự chuyển mình vĩ đại của nền kinh tế
                      Việt Nam.
                    </p>
                  </div>

                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="/khucongnghiep.png"
                      alt="Các khu công nghiệp hiện đại sau Đổi mới"
                      className="h-100 object-cover"
                    />
                    <p className="text-sm text-center text-foreground/70 mt-2 italic">
                      Sau Đổi mới, Việt Nam phát triển mạnh mẽ với các khu công
                      nghiệp, đô thị hiện đại và đời sống người dân được cải
                      thiện rõ rệt.
                    </p>
                  </div>
                </div>

                <h4 className="text-lg font-serif font-semibold text-primary mt-8">
                  🌍 Tác Động Và Ý Nghĩa Của Đổi Mới
                </h4>

                <p>
                  Chỉ sau vài năm thực hiện, Đổi mới đã mang lại kết quả ấn
                  tượng: lạm phát giảm mạnh, sản xuất phục hồi, lương thực không
                  chỉ đủ dùng mà còn xuất khẩu. Từ một nước thiếu đói, Việt Nam
                  trở thành{" "}
                  <span className="font-semibold text-accent">
                    quốc gia xuất khẩu gạo hàng đầu thế giới
                  </span>
                  . Nền kinh tế tăng trưởng nhanh, đời sống nhân dân cải thiện,
                  và vị thế Việt Nam trên trường quốc tế được nâng cao rõ rệt.
                </p>

                <p>
                  Không chỉ là sự thay đổi về kinh tế, Đổi mới còn là cuộc “cách
                  mạng trong tư duy” – mở rộng dân chủ, khuyến khích sáng tạo,
                  và khơi dậy tinh thần tự cường dân tộc. Việt Nam chuyển mình
                  từ một nền kinh tế khép kín, bao cấp sang nền kinh tế mở, năng
                  động và hội nhập toàn cầu.
                </p>

                <h4 className="text-lg font-serif font-semibold text-primary mt-8">
                  🔗 Liên Hệ Hiện Nay
                </h4>

                <p>
                  Ngày nay, những bài học từ thời bao cấp vẫn còn nguyên giá
                  trị: sự quan liêu, độc quyền hay thiếu minh bạch vẫn là những
                  nguy cơ có thể kìm hãm sự phát triển nếu không được kiểm soát.
                  Chính vì vậy, tinh thần Đổi mới – dám nghĩ, dám làm, dám thay
                  đổi vì lợi ích chung – vẫn là kim chỉ nam cho mọi chính sách
                  phát triển.
                </p>

                <p>
                  Việt Nam hiện nay đang tiếp tục hành trình hội nhập sâu rộng
                  vào kinh tế toàn cầu, xây dựng nền kinh tế số, đổi mới sáng
                  tạo và phát triển bền vững. Những thành quả hôm nay là minh
                  chứng cho quyết định táo bạo của năm 1986 – khi cả dân tộc
                  cùng bước qua ranh giới của bao cấp, mở ra kỷ nguyên mới của
                  tự do, sáng tạo và thịnh vượng.
                </p>
              </div>
            </section>

            {/* ================= KẾT LUẬN ================= */}
            <section className="relative border-2 border-primary/40 rounded-3xl bg-muted/20 p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6 text-center">
                Kết Luận
              </h2>

              <p className="text-foreground/80 leading-relaxed mb-4">
                Nền{" "}
                <span className="font-semibold text-primary">
                  kinh tế bao cấp
                </span>{" "}
                là một dấu mốc đặc biệt trong lịch sử Việt Nam – giai đoạn mà cả
                dân tộc phải cùng nhau vượt qua khó khăn, xây dựng lại đất nước
                từ đống tro tàn của chiến tranh. Dưới sự quản lý thống nhất của
                Nhà nước, cơ chế bao cấp đã giúp ổn định xã hội, bảo đảm công
                bằng phân phối, và giữ vững niềm tin của nhân dân trong những
                năm tháng gian khổ.
              </p>

              <p className="text-foreground/80 leading-relaxed mb-4">
                Tuy nhiên, cũng chính cơ chế ấy bộc lộ những hạn chế tất yếu của
                một mô hình khép kín: thiếu động lực sáng tạo, kém hiệu quả sản
                xuất, và làm trì trệ sự phát triển kinh tế. Khi thực tiễn vượt
                xa lý thuyết, Việt Nam đã can đảm nhìn thẳng vào sự thật để đổi
                mới – một quyết định mang tính lịch sử, mở ra thời kỳ{" "}
                <span className="font-semibold text-accent">
                  kinh tế thị trường định hướng xã hội chủ nghĩa
                </span>{" "}
                đầy năng động và sáng tạo.
              </p>

              <p className="text-foreground/80 leading-relaxed mb-4">
                Nhìn lại, thời kỳ bao cấp không chỉ là câu chuyện về thiếu thốn
                và tem phiếu, mà còn là minh chứng cho tinh thần đoàn kết, sẻ
                chia và ý chí vượt khó của con người Việt Nam. Những ký ức về
                thời ấy – dù gian khổ nhưng đầy ấm áp – vẫn là nền tảng tinh
                thần giúp thế hệ hôm nay trân trọng hòa bình, tự do và khát vọng
                vươn lên.
              </p>

              <p className="text-foreground/80 leading-relaxed italic text-center mt-8">
                🌾 “Từ những năm tháng bao cấp đầy gian khó, Việt Nam đã trưởng
                thành mạnh mẽ – đi từ cơ chế ‘xin – cho’ sang thời kỳ hội nhập
                và sáng tạo. Đó không chỉ là hành trình phát triển kinh tế, mà
                còn là hành trình thức tỉnh của cả một dân tộc.” 🌾
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
