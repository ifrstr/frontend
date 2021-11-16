import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const About: NextPage = () => (
  <>
    <Head>
      <title>About - Il Harper</title>
      <meta name="description" content="About Il Harper." />
    </Head>

    <h1>About</h1>
    <h2>I&apos;m Il Harper.</h2>

    <Link href="/about/resume">
      <a>My Resume</a>
    </Link>
  </>
)

export default About
