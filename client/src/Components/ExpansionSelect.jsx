import { useState } from "react";

const ExpansionSelect = (props) => {
    const { expansion, gameState, dispatch } = props;
    const { includeBaseGame, includeMorrowind, includeSummerset } = gameState
    const [isSelected, setIsSelected] = useState(false)

    const handleDispatch = () => {
        if (expansion.name == "Base Game") {
            const dispatchType = includeBaseGame ? "excludeBaseGame" : "includeBaseGame"
            dispatch({type: dispatchType})
            setIsSelected(!isSelected)
        }
        else if (expansion.name == "Morrowind") {
            const type = includeMorrowind ? 'excludeMorrowind' : 'includeMorrowind'
            dispatch({type: type})
            setIsSelected(!isSelected)
        }
        else if (expansion.name == "Summerset") {
            const type = includeSummerset ? 'excludeSummerset' : 'includeSummerset'
            dispatch({type: type})
            setIsSelected(!isSelected)
        } else {
            console.log("No expansion matching name")
        }
    }

    // const bgStyle = {backgroundImage:`url(${require(`../static/expansions/${expansion.logoUrl}.png`)}`, backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center'}

    return (
        <>
            <button 
            onClick={() => handleDispatch()} 
            className={"rounded-3xl text-center lg:w-1/6 hover:scale-105 transition-all flex justify-center items-start expansions" }
            // (expansion.isAvailable ? " bg-slate-500 " : " bg-slate-500 ") + (isSelected ? "bg-yellow-600" : "bg-slate-500")} 
            disabled={expansion.isAvailable ? false : true} 
            style={ expansion.isAvailable? isSelected? {filter:'grayscale(0%)'} : {} : {filter:'grayscale(100%)'} }
            >
                <img src={require(`../static/expansions/${expansion.logoUrl}.png`)} alt="" className=" h-5/6" />
                {!expansion.isAvailable && (
                    <span className="italic font-thin text-gray-600 absolute bottom-0 ">Coming soon!</span>
                )}
            </button>
        </>
    )
}
export default ExpansionSelect