import { useEffect, useState } from "react";
import axios from "axios";
import ExpansionSelect from '../Components/ExpansionSelect'
import { ThreeDots } from 'react-loader-spinner'

const ExpansionPick = (props) => {
    const { dispatch, gameState } = props
    const [isLoading, setIsLoading] = useState(true);
    const [expansions, setExpansions] = useState([]);
    const hasSelection = gameState.includeBaseGame || gameState.includeMorrowind || gameState.includeSummerset

    useEffect(() => {
        axios.get("https://localhost:7078/api/guessr/expansions")
            .then((res) => {
                // console.log(res)
                setExpansions(res.data)
                setIsLoading(false)
            })
            .catch((e) => {
                // console.log(e)
            })
    }, [])
    

    return (
        <>
            <div className="flex flex-col justify-center items-center gap-20 h-screen" style={{fontFamily:"Planewalker"}}>
            <div className="h-screen w-full absolute top-0 -z-20" style={{backgroundImage:`url(${require(`../static/backgrounds/bg14.jpg`)}`, backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center', filter:'grayscale(100%)' }}>
            </div>
            <div className="h-screen w-full absolute top-0 -z-10 bg-yellow-950/80 bg-">
            </div>
                <div className="w-full grid sm:flex justify-center sm:h-1/5 gap-5">
                    {isLoading && (
                        <ThreeDots color="rgb(252, 182, 24)" ariaLabel="three-dots-loading"/>
                    )}
                    {!isLoading && (
                        expansions.map((expansion) => 
                        <ExpansionSelect key={expansion.expansionId} expansion={expansion} gameState={gameState} dispatch={dispatch}/>
                        )
                    )}
                </div>
                <div className="flex justify-center w-1/3 relative">
                    {/* <div className={`flex flex-col gap-3 justify-center absolute top-16 z-20 bg-slate-600 bg-opacity-70 px-2 py-3 rounded-md text-center ` + (gameState.includeBaseGame? ` duration-300 translate-y-0` : ` -translate-y-5 blur-sm opacity-0`)}>
                    {gameState.includeBaseGame && (
                    <>
                        <label class="relative inline-flex items-center mr-5 cursor-pointer">
                            <input onChange={(e) => {} } type="checkbox" value="" class="sr-only peer"/>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-400 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-500"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Imperial City</span>
                        </label>
                        <label class="relative inline-flex items-center mr-5 cursor-pointer">
                            <input onChange={(e) => {} } type="checkbox" value="" class="sr-only peer"/>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-400 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-500"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Thieves' Guild</span>
                        </label>
                        <label class="relative inline-flex items-center mr-5 cursor-pointer">
                            <input onChange={(e) => {} } type="checkbox" value="" class="sr-only peer"/>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-400 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-500"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark Brotherhood</span>
                        </label>
                    </>
                    )}
                    </div> */}
                    <div className="flex justify-center relative w-full">
                        { !hasSelection && (
                            <span className="absolute text-red-400 -top-8">Please select an expansion</span>
                            ) }
                        <button onClick={() => dispatch({type: "startPlaying"}) } type="button" className={`text-gray-900 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:bg-gradient-to-b focus:ring-4 focus:outline-none focus:ring-yellow-400 font-medium rounded-3xl text-md px-5 py-2.5 text-center disabled:from-slate-500 disabled:to-slate-600 disabled:bg-gradient-to-r ` } style={{transition:'500ms ease'}} disabled={hasSelection ? false : true }>Play</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExpansionPick;