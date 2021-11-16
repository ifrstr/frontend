import Link from 'next/link'
import styles from '../../styles/module/layout/Footer.module.css'
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
          <div className={styles['bottom-border']}></div>
          <div>
            {copyrightSegment && (
              <span>
                <div className={styles.left}>{copyrightSegment}</div>
              </span>
            )}
            {props.legalLinks &&
              props.legalLinks.map((x) => (
                <>
                  <Link href={x.href} key={x.href}>
                    <a target="_blank">
                      <span>{x.name}</span>
                    </a>
                  </Link>{' '}
                </>
              ))}
          </div>
          {props.beian &&
            props.beian.map((x) => (
              <>
                <Link href={x.href} key={x.href}>
                  <a target="_blank">
                    <span>{x.name}</span>
                  </a>
                </Link>{' '}
              </>
            ))}
        </section>
      </div>
    </footer>
  )
}

export { Footer }
