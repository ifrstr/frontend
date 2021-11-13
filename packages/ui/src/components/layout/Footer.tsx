import Link from 'next/link'
import { StrLink } from '../../types/StrLink'

export type FooterProps = {
  copyright?: StrLink | string
  legalLinks?: StrLink[]
  beian?: StrLink[]
}

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  // Resolve props.copyright
  let copyrightSegment: JSX.Element
  if (props.copyright == undefined) {
    // undefined
    copyrightSegment = <></>
  } else if (typeof props.copyright === 'string') {
    // string
    copyrightSegment = <span>{props.copyright as string}</span>
  } else {
    // StrLink
    const copyright = props.copyright as StrLink
    copyrightSegment = (
      <Link href={copyright.href}>
        <a>
          <span>{copyright.name}</span>
        </a>
      </Link>
    )
  }

  return (
    <footer>
      <div>
        <section>
          <div
            style={{
              borderBottom: '1px solid var(--str-f-p)',
            }}
          ></div>
          <div>
            {copyrightSegment && (
              <span>
                <div style={{ float: 'left' }}>{copyrightSegment}</div>
              </span>
            )}
            {props.legalLinks &&
              props.legalLinks.map((x) => (
                <Link href={x.href}>
                  <a target="_blank">
                    <span>{x.name}</span>
                  </a>
                </Link>
              ))}
          </div>
          {props.beian && (
            <p>
              {props.beian.map((x) => (
                <>
                  <Link href={x.href}>
                    <a target="_blank">{x.name}</a>
                  </Link>{' '}
                </>
              ))}
            </p>
          )}
        </section>
      </div>
    </footer>
  )
}

export { Footer }
