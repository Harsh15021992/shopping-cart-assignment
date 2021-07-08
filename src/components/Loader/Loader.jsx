import Spinner from "react-bootstrap/Spinner";
import "./Loader.scss";
const Loader = () => {
    return (
        <div className="loader-container">
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    )
};
export default Loader;