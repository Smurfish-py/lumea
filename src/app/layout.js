import './globals.css';

import { inter } from './fonts';
import { Header } from '@/app/components/index';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        { children }
      </body>
    </html>
  )
}