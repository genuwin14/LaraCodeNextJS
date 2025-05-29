// app/layout.tsx
import './globals.css';
import Navbar from '@/components/Navbar';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Adjust weights as needed
});

export const metadata = {
  title: 'Kristian | Portfolio',
  description: 'Web Developer Portfolio',
};

// app/layout.tsx (updated main tag)
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gray-50 text-gray-900`}>
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 py-8 pt-20"> {/* pt-20 = 5rem = 80px */}
          {children}
        </main>
      </body>
    </html>
  );
}

