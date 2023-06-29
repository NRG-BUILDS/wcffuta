import { Link } from "react-router-dom/cjs/react-router-dom.min";

const MagLinkSect = () => {
    return (
        <div>
            <h1 className="text-2xl">Visit Our Blog Page</h1>
            <p>for our weekly magazines on spirit, school and so much more... </p>
            
            <Link to='/blog'>
                <div className="rounded-full flex items-center justify-center p-4 border-2">
                    <span className="material-icons-outlined">arrow_forward</span>
                </div>
            </Link>
                
            
        </div>
     );
}
export default MagLinkSect