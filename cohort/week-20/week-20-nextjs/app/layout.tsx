
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>Hi there!</div>
        {children}
      </body>
    </html>
  );
}
