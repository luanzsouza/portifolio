import Image from 'next/image'
import './header.scss'
export function Header() {
  return (
    <div className="header">
      <div>
        <h1>HI i´m Luan</h1>
        <h2>Software Developer</h2>
      </div>
      <Image
        src="/me.jpg"
        alt="Vercel Logo"
        width={325}
        height={300}
        priority
      />
    </div>

  )
}