import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import Layout from "../../components/layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function About() {
  return (
    <>
      <Layout title="About" name="DBAnime"></Layout>
      <h1 className="font-bold text-center capitalize text-xl">This web has build in <a href="https://nextjs.org" className="transition duration-500 ease-in-out hover:text-blue-500" rel="noreferrer" target="_blank">Nextjs</a> as frontend and <a href="https://go.dev/" className="transition duration-500 ease-in-out hover:text-cyan-300" rel="noreferrer" target="_blank">Go</a> as backend and dont forget <a href="https://postgresql.org/" rel="noreferrer" className="transition duration-500 ease-in-out hover:text-blue-300" target="_blank">Postgresql</a> as a database</h1>
      <div className="mt-5"></div>
      <h1 className="font-bold text-center">wanna ask something ?  <a target="_blank" rel="noreferrer" href="https://instagr.am/abcdefuck._.you"><FontAwesomeIcon icon={faInstagram} /></a></h1>
    </>
  )
}
