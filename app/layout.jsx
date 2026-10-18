import "./globals.css";

export const metadata = {
  title: "EL BÉLICO Z",
  description: "Sitio oficial de EL BÉLICO Z · CAPÍTULO 1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
