import { useParams } from "react-router-dom"
import placeholder from './assets/logo-placeholder.png'

export function PublisherBrand() {
    const { id } = useParams() 
    return (
        <>
            <div id="publisher-details">
                <span>{id} Management Page</span>
                <img class="publisher-logo" src={placeholder} alt="placeHolder" />
                
            </div>
        </>
    )
}
