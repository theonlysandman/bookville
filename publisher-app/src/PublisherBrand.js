import { useParams } from "react-router-dom"


export function PublisherBrand() {
    const { id } = useParams() 
    return (
        <>

            <h1>{id} Management Page</h1>
        </>
    )
}
