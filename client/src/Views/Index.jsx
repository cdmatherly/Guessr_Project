import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Index = (props) => {

    return (
        <>
            <div className="h-screen flex flex-col overflow-hidden" style={{fontFamily:"Planewalker"}}>
                <Navbar />
                <Outlet />
            </div>
        </>
    )
}

export default Index