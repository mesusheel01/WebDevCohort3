
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
          <div>Header</div>
          {children}
          <div>footer</div>
        </body>
      </html>
    );
  }
