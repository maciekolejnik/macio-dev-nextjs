export default function Footer() {
    return (
        <footer className="border-t border-gray-300 dark:border-gray-700 mt-10 py-4 text-center text-gray-600 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} macio.dev. All rights reserved.</p>
        </footer>
    );
}
