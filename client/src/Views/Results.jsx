import AnimatedNumber from "../Components/AnimatedNumber";

const Results = (props) => {
    const { dispatch, gameState, setIsLoading } = props;

    return (
        <div className="relative flex flex-col items-center justify-center w-full h-screen gap-24 text-center bg-indigo-950 p-50">
            <div className="flex flex-wrap items-center justify-center gap-16 px-32 mx-32 -translate-y-40">
            { gameState.locationImgs.map((location, idx) => 
                <div key={location.locationId} className="relative flex items-center justify-center scale-down-center hover:scale-105" id={`result-${idx+1}`}>
                    <img src={require(`../static/previews/${location.name}.webp`)} alt="" className="shadow-lg rounded-2xl shadow-black/50 h-44" />
                    <AnimatedNumber delay={(idx+1) * 300} num={gameState.locationPoints[idx]} className="absolute text-4xl font-bold text-yellow-500 pointer-events-none text-stroke-points"/>
                </div>
                )}
            </div>
            <div className="absolute flex items-center justify-center w-full translate-y-48">
                <div className="relative">
                    <span className="text-5xl text-stone-200 text-stroke-points">Your Score</span>
                    <hr className="mb-2"/>
                    <AnimatedNumber num={gameState.points} delay={2750} className="text-3xl"/>
                    {gameState.points === 500 && (
                        <span className="absolute top-0 text-yellow-500 -right-14 rotate-12" id="perfect-score">Perfect Score!</span>
                    )}
                    <button onClick={ () => {dispatch({type:"newGame"}); setIsLoading(true)} } className="px-5 py-3 mt-10 text-xl shadow-lg bg-gradient-to-r from-yellow-600 to-yellow-700 text-stone-200 rounded-3xl shadow-black/50 hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-600">Play Again</button>
                </div>
            </div>
        </div>
    )
}
export default Results