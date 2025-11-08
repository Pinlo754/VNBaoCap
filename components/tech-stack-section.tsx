"use client"

export default function TechStackSection() {
  const technologies = [
    { category: "Frontend", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4"] },
    { category: "Backend", items: ["Next.js API Routes", "Node.js", "MockAPI"] },
    { category: "Styling", items: ["Tailwind CSS", "CSS Animations", "shadcn/ui"] },
    { category: "Tools & Services", items: ["Git/GitHub", "Vercel", "v0 AI"] },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Công Nghệ Sử Dụng
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stack công nghệ hiện đại được lựa chọn để xây dựng nền tảng giáo dục tương tác
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-secondary rounded-lg p-6 border border-border transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1"
            >
              <h3 className="font-serif font-bold text-lg text-foreground mb-4 text-primary">{tech.category}</h3>
              <ul className="space-y-2">
                {tech.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
