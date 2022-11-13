import "../styles/globals.css";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <title>boba | Digital Agency</title>
      <body className="w-[100vw] overflow-x-hidden">
        <Header />
        {children}
      </body>
    </html>
  );
}
