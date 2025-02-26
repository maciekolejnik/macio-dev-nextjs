import { CpuChipIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { pacifico } from '@/app/ui/fonts';


export default function Logo() {
    return (
        <Link href="/" className={`${pacifico.className} antialiased flex items-center space-x-1 text-gray-900 dark:text-white`}>
            <CpuChipIcon className="w-6 h-6 relative top-1" />
            <span className="text-3xl">macio.dev</span>
        </Link>
    );
}
