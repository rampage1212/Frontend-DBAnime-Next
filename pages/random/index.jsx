import CardRandom from "../../components/card/card-random";
import Layout from "../../components/layout"

export async function getStaticProps() {
    const res = await fetch(process.env.NEXT_PUBLIC_ENV_RANDOM);
    const result = await res.json();
    const data = result.data
    // console.log(data)
    if (!result) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
    return {
        props: {data}
    }
}

export default function Random({data}){
    return(
        <>
        <Layout title="Random" name="DBAnime"></Layout>
        <CardRandom data={data} />
        </>
    )
}