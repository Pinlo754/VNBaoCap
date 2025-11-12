"use client"

export default function TeamSection() {
  const team = [
    {
      id: 1,
      name: "Nguyễn Thanh Phong",
    },
    {
      id: 2,
      name: "Trần Đức Phát",
    },
    {
      id: 3,
      name: "Trần Viết Đạt",
    },
    {
      id: 4,
      name: "Đàm Hải Hiện",
    },
  ]

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Đội Ngũ Phát Triển
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nhóm 6 - bao gồm các thành viên;
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-background rounded-lg p-6 border border-border transition-all duration-300 ease-out hover:shadow-lg hover:border-primary"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">{member.name.charAt(0)}</span>
              </div>
              <h3 className="font-serif font-bold text-lg text-foreground mb-1">{member.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
