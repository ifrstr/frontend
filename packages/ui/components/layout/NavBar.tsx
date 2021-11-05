import Link from 'next/link'

export type NavBarLink = {
  name: string
  href: string
}

export type NavBarProps = {
  links: NavBarLink[]
}

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => (
  <nav>
    <div>
      <ul>
        {props.links.map((x: NavBarLink) => (
          <li>
            <Link href={x.href}>
              <a>
                <span>{x.name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
)

export default NavBar
