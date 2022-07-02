/* eslint-disable @next/next/no-img-element */


export default function CardRandom(props){
    return (
        <>
            <div key={props.data.mal_id}>
                <p>title: {props.data.mal_id}</p>
            </div>
        </>
    )
}