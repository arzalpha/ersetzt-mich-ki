import { Suspense } from 'react'

export default function ErgebnisLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-500">Lade …</div>}>
      {children}
    </Suspense>
  )
}
