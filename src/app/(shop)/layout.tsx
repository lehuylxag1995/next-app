export default function AdminLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <header>Layout Shop</header>
      <main>{children}</main>
    </div>
  )
}
