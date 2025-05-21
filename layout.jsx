import './globals.css'
import Menubar from './components/Menubar'

export const metadata = {
  title: 'Final 343',
  description: 'Course content site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Menubar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
