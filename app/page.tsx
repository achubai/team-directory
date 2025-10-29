'use client'



export default function Home() {
  return (
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <div className="space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tight text-balance">Team Directory</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Meet our talented team members. Search by name or filter by department to find the right person.
              </p>
            </div>

            {/* Team Directory Feature */}
          </div>
        </div>
      </main>
  )
}
