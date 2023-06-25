import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Index = (props) => {

    return (
        <>
            <div className="flex flex-col h-screen overflow-hidden" style={{fontFamily:"Planewalker"}}>
                <Navbar />
                <Outlet />
            </div>
        </>
    )
}

export default Index