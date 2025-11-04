"use client";

import Figure from "@/components/economy/figure";

export default function ImageGallery() {
  return (
    <section className="rounded-xl border border-border/60 p-6 bg-card/40">
      <h2 className="text-2xl font-serif font-semibold text-primary mb-4">Bộ Ảnh Minh Hoạ</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Figure alt="Ảnh minh hoạ 1" aspect="square" />
        <Figure alt="Ảnh minh hoạ 2" aspect="video" />
        <Figure alt="Ảnh minh hoạ 3" aspect="square" />
        <Figure alt="Ảnh minh hoạ 4" aspect="video" />
        <Figure alt="Ảnh minh hoạ 5" aspect="square" />
        <Figure alt="Ảnh minh hoạ 6" aspect="video" />
      </div>
    </section>
  );
}


