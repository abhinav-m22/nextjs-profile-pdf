import { Inter } from 'next/font/google'
import ProfilePagePDF from './ProfilePage';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ProfilePagePDF />
    );
}
