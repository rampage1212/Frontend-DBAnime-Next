import Layout from '../../components/layout'
import CardMovie from '../../components/card/card-movie'


export async function getStaticProps() {
    const res = await fetch(process.env.NEXT_PUBLIC_ENV_ECCHI_MOVIE);
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

export default function EchiMovie({sortby}) {
  return (
    <>
      <Layout title="Ecchi Movie" name="DBAnime"></Layout>
      <CardMovie data={sortby}></CardMovie>
    </>
  )
}