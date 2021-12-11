import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { ResumeCore } from '../../../components/about/ResumeCore'

const ResumePrint: NextPage = () => (
  <>
    <Head>
      <title>Resume - Il Harper</title>
      <meta name="description" content="Resume of Il Harper." />
    </Head>

    <ResumeCore />
  </>
)

export default ResumePrint

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: { useEmptyLayout: true },
  }
}
