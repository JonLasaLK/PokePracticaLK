import { useNavigate } from "react-router-dom";

export function LandingPage(){
    const navigate = useNavigate();

    return <section>
            <button onClick={()=>{navigate("/RegionSelectorPage")}}>Play</button>
        </section>
}