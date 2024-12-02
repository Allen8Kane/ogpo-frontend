import Link from 'next/link'

const Navbar = () => {
  // ['Для себя', 'Для бизнеса', 'Страховние Жизни', 'О нас',]
  const links = [
    {
      id: 1,
      title: 'Для себя',
      href: '/for-me',
    },
    {
      id: 2,
      title: 'Для бизнеса',
      href: '/for-business',
    },
    {
      id: 3,
      title: 'Страховние Жизни',
      href: '/life-insurance',
    },
    {
      id: 4,
      title: 'О нас',
      href: '/about',
    },
  ]

  return (
    <div className="w-1/3 bg-cyan-700 flex flex-row items-center justify-center">
      <ul className='flex flex-row gap-4 items-center justify-center'>
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.href} className='text-black'>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Header = () => {
  return (
    <div className="container m-auto">
      <div className="w-full h-20 bg-black rounded-2xl flex flex-row gap-8">
        <div className="w-1/3 bg-cyan-700"></div>
        <Navbar />
        <div className="w-1/3 bg-cyan-700"></div>
      </div>
    </div>
  )
}

export default Header
