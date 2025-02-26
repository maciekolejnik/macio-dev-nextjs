import Link from 'next/link'
import Logo from '@/app/ui/logo';
import { poppins } from './fonts';

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center py-4 text-xl">
            <Logo/>
            <div className={`${poppins.className} antialiased flex space-x-6`}>
              <Link href="#about" className="hover:text-blue-500 dark:hover:text-blue-400">About</Link>
              <Link href="#posts" className="hover:text-blue-500 dark:hover:text-blue-400">Posts</Link>
              <Link href="#tools" className="hover:text-blue-500 dark:hover:text-blue-400">Tools</Link>
            </div>
          </nav>
    );
}