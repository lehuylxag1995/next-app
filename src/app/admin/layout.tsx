export default function AdminLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <header>Layout Admin</header>
      <main>{children}</main>
    </div>
  )
}
