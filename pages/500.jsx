import Layout from '../components/layout'

export default function InternalSystemError() {
  function back_page(){
    window.history.back();
  }
  function refresh_page(){
    window.location.href=window.location.href
  }
  return (
    <>
      <Layout title="Internal System Error" name="DBAnime" />
      <h1 className="font-bold text-center">I don&apos;t know what is wrong but, you can go <button onClick={back_page} className="font-bold"> back </button> or <button onClick={refresh_page} className="font-bold"> refresh </button> this page</h1>
    </>
  )
}