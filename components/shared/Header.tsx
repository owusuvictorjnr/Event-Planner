import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrappper flex items-center justify-between mx-5">
        <Link href="/" className="w-36 flex items-center capitalize gap-1">
          <Image
            src="/assets/images/logo.jpg"
            alt="logo"
            width={128}
            height={38}
            className="h-[3rem] w-[3rem] rounded-full"
          />
          <h1 className="">eventsHome</h1>
        </Link>

        {/* Sidebar */}
        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-sm">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          {/* using clerk  */}
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header
