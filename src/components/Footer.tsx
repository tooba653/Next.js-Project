import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-6">
      <p className="text-sm mb-4">
        &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
      </p>
      <div className="flex justify-center space-x-4 mb-4">
        <Link href="https://facebook.com" target="_blank" className="text-white hover:text-blue-600">
          Facebook
        </Link>
        <Link href="https://twitter.com" target="_blank" className="text-white hover:text-blue-400">
          Twitter
        </Link>
        <Link href="https://instagram.com" target="_blank" className="text-white hover:text-pink-500">
          Instagram
        </Link>
      </div>
      <div>
        <Link href="/privacy-policy" className="text-sm text-white hover:underline mx-2">Privacy Policy</Link>
        <Link href="/terms-of-service" className="text-sm text-white hover:underline mx-2">Terms of Service</Link>
      </div>
    </footer>
  );
}
