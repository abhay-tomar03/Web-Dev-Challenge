import { Link } from "react-router-dom"

const Missing = () => {
    return (
        <article style={{ padding: "100px" }}>
            <h1 style={{color:'#000'}}>Oops!</h1>
            <p style={{color:'#000'}}>Page Not Found</p>
            <div className="flexGrow">
                <Link style={{color:'#000'}} to="/">Visit Our Homepage</Link>
            </div>
        </article>
    )
}

export default Missing
