import "./Loader.css"
const Loader = () => {
    return (
        <div className="active-outer-loader">
        <div class="lds-ellipsis "><div></div><div></div><div></div><div></div></div>
        <div className="disclaimer">Hey there! Please wait for a few seconds... The site on which the backend is deployed is slow to react. </div>
        </div>
    )
}


export{Loader}