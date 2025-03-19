import type React from "react"



export default function AdminLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex min-h-screen bg-[#f8f3e9]">
      {/* Main content */}
      <div className="flex-1">
        <div className="md:p-8 p-4 pt-20 md:pt-8 max-w-7xl mx-auto">{children}</div>
      </div>
    </div>
  )
}


