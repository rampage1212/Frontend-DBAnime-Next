/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import Layout from "../../components/layout";
// import fetch from 'isomorphic-unfetch'

export default function Search(){
    const searchRef = useRef(null)
    const [query,setQuery] = useState('')
    const [active, setActive] = useState(false)
    const [result, setResult] = useState([])
    const searchEndPoint = (query) => process.env.NEXT_PUBLIC_ENV_SEARCH+query;
    const onChange = useCallback((event)=>{
        const query = event.target.value
        setQuery(query)
        if (query.length){
            fetch(searchEndPoint(query))
            .then(res => res.json())
            .then(res => {
                setResult(res.data)
            })
        }else{
            setResult([])
        }
    }, [])
    const onFocus = useCallback(() => {
        setActive(true)
        window.removeEventListener('click', onClick)
    }, [])
    const onClick = useCallback((event)=>{
        if(searchRef.current && !searchRef.current.contains(event.target)){
            setActive(false)
            window.removeEventListener('click', onClick)
        }
    }, [])
    return (
        <>
        <Layout title="Search" name="DBAnime"></Layout>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className="text-center text-xl">As you wish</h1>
        <h1 className="text-center text-sm">*(pencet silang biar result search nya ilang)</h1>
        <center>
        <form className="w-full h-full static">
            <div className="mb-6">
                <div className="">
                    <input className="bg-gray-200 text-center appearance-none border-2 border-gray-200 rounded w-full py-2 px-20 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="" type="search" placeholder="search anime" onChange={onChange} onFocus={onFocus} value={query} />
                    {active && result ? result.length>0 && (
                    <ul className="mt-5">
                        {result.map(({mal_id, title, url})=> (
                            <li key={mal_id}>
                                <Link href={url}>
                                    <a>{title}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                ):""}
                </div>
            </div>
        </form>
        </center>

        </>
    )
}