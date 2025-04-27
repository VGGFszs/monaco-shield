import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function PublicFooter() {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="relative h-10 w-10">
                <Image
                  src="/images/monaco-shield-logo.png"
                  alt="MonacoShield Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">MonacoShield</span>
            </div>
            <p className="text-sm text-gray-300">Solution souveraine de vigilance et de signature électronique</p>
            <p className="text-sm text-gray-300">
              5bis avenue Saint Roman
              <br />
              98000 Monaco
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/a-propos" className="text-sm text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/carrieres" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/fonctionnalites" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Request a demo
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Stay informed</h3>
            <p className="text-sm text-gray-300">Subscribe to our newsletter to receive the latest news and updates</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-[#1f2937] border-[#374151] text-white placeholder:text-gray-400"
              />
              <Button className="bg-red-600 hover:bg-red-700 text-white">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#374151] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© 2025 MonacoShield. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
