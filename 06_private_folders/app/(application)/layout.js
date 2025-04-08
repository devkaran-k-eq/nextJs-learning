export default function ApplicationRootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <header style={{ backgroundColor: "orange", fontSize: "40px" }}>
            Root Header
          </header>
          {children}
          <footer style={{ backgroundColor: "green", fontSize: "40px" }}>
            Root Footer
          </footer>
        </body>
      </html>
    );
  }