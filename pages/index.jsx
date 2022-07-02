import Layout from '../components/layout'
import CardHome from '../components/card/card-home'


export async function getStaticProps() {
    const res = await fetch(process.env.NEXT_PUBLIC_ENV_HOME);
    const data = await res.json();
    if (!data) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
    let _ = require('lodash')
    const sortby = _.sortBy(data.data, ['title'])
    return {
        props: {sortby}
    }
}

export default function Home({sortby}) {
  return (
    <div>
      <Layout title="Home" name="DBAnime"></Layout>
      <CardHome data={sortby} />
    </div>
  )
}