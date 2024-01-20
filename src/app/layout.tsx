import Providers from "@modules/providers"
import "styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-mode="light">
      <body className="bg-gradient-to-t from-70% via-cream to-white">
        <Providers>
          <main className="relative">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
