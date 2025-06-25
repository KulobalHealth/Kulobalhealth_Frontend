'use client';

import clsx from 'clsx';
import { Bell, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { useMarketplaceStore } from '@/lib/store';
import { Button } from './ui/button';
import { ModeToggle } from './ui/mode-toggle';
import { User } from './user';

const solutions = [
  {
    name: 'For Pharmacies',
    href: '/pharmacies',
    description:
      'Source medical supplies effortlessly with competitive pricing and 48-hour delivery.',
  },
  {
    name: 'For Suppliers',
    href: '/suppliers',
    description: 'Expand your reach and connect with pharmacies across Ghana.',
  },
  {
    name: 'Detection',
    href: '/detection',
    description:
      'AI-powered counterfeit detection for medical supplies and pharmaceuticals.',
  },
];

const navigationLinks = [
  { name: 'Marketplace', href: '/marketplace' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Contact Us', href: '/contact' },
];

export function Navbar() {
  const cart = useMarketplaceStore((state) => state.cart);
  const { user, isAuthenticated } = useMarketplaceStore();
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-white transition duration-300 dark:bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <Link
            className="font-bold text-2xl text-emerald-500"
            href="/"
            prefetch
          >
            <Image
              alt="KulobalHealth"
              className="transition-transform duration-300 hover:brightness-110"
              height={180}
              src="/logo.webp"
              width={180}
            />
          </Link>
        </div>

        <div className="hidden items-center space-x-8 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={clsx(
                    'transition-colors duration-300 hover:text-primary-700 dark:hover:text-primary-400',
                    {
                      'font-semibold text-primary-600 dark:text-primary-400':
                        isActive('/pharmacies') ||
                        isActive('/suppliers') ||
                        isActive('/detection'),
                      'text-neutral-800 dark:text-white': !(
                        isActive('/pharmacies') ||
                        isActive('/suppliers') ||
                        isActive('/detection')
                      ),
                    }
                  )}
                >
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {solutions.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            className={clsx(
                              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground',
                              {
                                'bg-accent': isActive(item.href),
                              }
                            )}
                            href={item.href}
                          >
                            <div className="font-medium text-sm leading-none">
                              {item.name}
                            </div>
                            <p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {navigationLinks.map((item) => (
            <Link
              className={clsx(
                'transition-colors duration-300 hover:text-primary-700 dark:hover:text-primary-400',
                {
                  'font-semibold text-primary-600 dark:text-primary-400':
                    isActive(item.href),
                  'text-neutral-800 dark:text-white': !isActive(item.href),
                }
              )}
              href={item.href}
              key={item.name}
              prefetch
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4 text-neutral-800">
          {isAuthenticated && user ? (
            <>
              <User
                user={{
                  name: user.name,
                  email: user.email,
                  avatar: user.avatar,
                }}
              />
              <div className="relative">
                <Link href="/marketplace/cart" prefetch>
                  <ShoppingCart className="cursor-pointer text-neur transition-colors hover:text-primary-700" />
                  {cart.length > 0 && (
                    <span className="-top-2 -right-2 absolute flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white text-xs">
                      {cart.length}
                    </span>
                  )}
                </Link>
              </div>
              <Bell className="cursor-pointer transition-colors hover:text-primary-700" />
            </>
          ) : (
            <>
              <Link href="/login" prefetch target="_blank">
                <Button className="hover:text-primary-700" variant="ghost">
                  Login
                </Button>
              </Link>
              <Link href="/signup" prefetch target="_blank">
                <Button className="bg-emerald-500 text-white hover:bg-emerald-600">
                  Create Account
                </Button>
              </Link>
            </>
          )}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
