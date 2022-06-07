import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { ResumePaper } from '../../../components/about/ResumePaper'

const Resume: NextPage = () => (
  <>
    <Head>
      <title>Resume - Il Harper</title>
      <meta name="description" content="Resume of Il Harper." />
    </Head>

    <h1>个人简历</h1>

    <p>
      <Link href="/about/resume/简历-张仪宇.pdf">
        <a target="_blank" rel="noopener noreferrer">
          下载 PDF 版本
        </a>
      </Link>
      <span> | </span>
      <Link href="/about/resume/print">
        <a target="_blank" rel="noopener noreferrer">
          查看用于打印的版本
        </a>
      </Link>
    </p>

    <ResumePaper />
  </>
)

export default Resume
