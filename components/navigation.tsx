"use client"

import { useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Moon, Sun, Menu, X, Brain } from "lucide-react"

export function Navigation() {
  const { setTheme, theme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass-effect">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex items-center space-x-2">
            <Brain className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">Aid AI</span>
          </div>

          <div className="flex-1">
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/courses" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-accent-foreground focus:bg-white/10 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Courses
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-accent-foreground focus:bg-white/10 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Documentation
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/community" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-accent-foreground focus:bg-white/10 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Community
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="hover:bg-white/10"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-white/10 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="container md:hidden">
            <nav className="flex flex-col space-y-4 pb-4">
              <Link href="/courses" className="text-sm font-medium hover:text-accent-foreground">
                Courses
              </Link>
              <Link href="/docs" className="text-sm font-medium hover:text-accent-foreground">
                Documentation
              </Link>
              <Link href="/community" className="text-sm font-medium hover:text-accent-foreground">
                Community
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}