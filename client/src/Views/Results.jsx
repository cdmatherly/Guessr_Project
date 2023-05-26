import AnimatedNumber from "../Components/AnimatedNumber";

const Results = (props) => {
    const { dispatch, gameState, setIsLoading } = props;


    return (
        <div className="flex justify-center items-center w-full h-screen bg-indigo-950 p-50 text-center ">
            <div className="-translate-y-10">
                <span className="text-stone-200 text-4xl">Your Score</span>
                <hr className="mb-2"/>
                <AnimatedNumber num={gameState.points}/>
                <button onClick={ () => {dispatch({type:"newGame"}); setIsLoading(true)} } className="mt-10 text-stone-200 text-xl bg-yellow-600 px-5 py-3 rounded-3xl shadow-lg shadow-black/50">Play Again</button>
            </div>
        </div>
    )
}
export default Results