import Footer from '@/components/layouts/shop/footer'
import Header from '@/components/layouts/shop/header'

export default function AdminLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header></Header>
      <main className="mt-40">{children}</main>
      <Footer></Footer>
    </div>
  )
}
