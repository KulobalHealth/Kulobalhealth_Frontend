import Link from 'next/link';
import { socialLinks } from './data';

export default function DetectionFooter() {
  return (
    <footer className="border-t bg-white py-8 dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-gray-600 text-sm">
            © 2025 KulabalHealth. All rights reserved.
          </p>
          <div className="mt-4 flex items-center space-x-4 md:mt-0">
            {socialLinks.map((social, index) => (
              <Link
                aria-label={social.label}
                className="text-gray-400 hover:text-gray-600"
                href={social.href}
                key={index}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
