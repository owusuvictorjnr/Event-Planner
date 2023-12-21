import Image from 'next/image'
import Link from 'next/link'
import { Separator } from '../ui/separator'

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.jpg"
            alt="logo"
            height={38}
            width={128}
            className="h-[3rem] w-[3rem] rounded-full"
          />
        </Link>

        <p className="capitalize">
          {' '}
          cr8tive inc. &copy; 2023. all right reserved.
        </p>
      </div>

      <Separator />

      <div className="flex justify-center text-sm capitalize text-black/20">
        dev by vitech solutions
      </div>
    </footer>
  )
}

export default Footer
