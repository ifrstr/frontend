import Link from 'next/link'
import { StrLink } from '../../types/StrLink'

export type NavBarProps = {
  links: StrLink[]
}

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => (
  <nav>
    <div>
      <ul>
        {props.links.map((x: StrLink) => (
          <li key={x.href}>
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

export { NavBar }
