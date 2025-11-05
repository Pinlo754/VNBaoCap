"use client";

export default function IntroHero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent p-8 md:p-10">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute -top-10 -right-10 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-secondary/15 blur-3xl" />
      </div>
      <div className="relative">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary tracking-tight break-keep">
          <span className="whitespace-nowrap">Cơ Chế Kinh Tế Thời Bao Cấp</span>
        </h2>
        <p className="mt-3 max-w-2xl text-foreground/70">
          Nhìn lại cơ chế kế hoạch hoá, tem phiếu, các chính sách trọng điểm và tiến trình Đổi Mới.
        </p>
      </div>
    </section>
  );
}


