import Footer from '@/components/layouts/admin/footer'
import Header from '@/components/layouts/admin/header'

export default function AdminLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
