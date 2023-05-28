import { useImmerReducer} from 'use-immer';
import { useState } from 'react';
import ExpansionPick from './ExpansionPick';
import Viewer from './Viewer';
import Results from './Results';

const gameReducer = (draft, action) => {
    switch (action.type) {

        case "includeBaseGame":
            draft.includeBaseGame = true;
            return
        case "excludeBaseGame":
            draft.includeBaseGame = false;
            return

        case "startPlaying":
            
            draft.isPlaying = true;
            return
            
        case "getLocations":
            getLocations()
        return

        case "submitGuess":
            draft.guess = action.value
        return

        case "setPoints":
            draft.points += action.value
        return

        case "nextLocation":
            draft.guess = null
            draft.currentLocation = generateLocation();
        return
        
        case "gameOver":
            draft.results = true
            return

        case "newGame":
            draft.isPlaying = false;
            draft.isPlaying = true;
            draft.points = 0;
            draft.currentLocation = null;
            draft.guess = null;
            draft.results = false;
            return
        }

        function getLocations() {
            draft.locations = action.value
            draft.currentLocation = generateLocation();
            // console.log(draft.locations)
        }
        
        function generateLocation() {
            // console.log(draft.locations)
            const pickedLocation = draft.locations[0]
            // console.log(pickedLocation)
            // console.log(draft.locations.splice(1))
            draft.locations = draft.locations.filter((location) => location.locationId != pickedLocation.locationId)
            return pickedLocation
        }
    }
    
    const initialState = {
    points: 0,
    locations: [],
    currentLocation: null,
    isPlaying: false,
    guess: null,
    includeBaseGame: false,
    includeDominion: false,
    includeCovenant: false,
    includePact: false,
    includeMorrowind: false,
    includeSummerset: false,
    results: false
}

const Player = (props) => {
    const [gameState, dispatch] = useImmerReducer(gameReducer, initialState)
    const [isLoading, setIsLoading] = useState(true)
    

    return ( 
        gameState.results?
        <Results dispatch={dispatch} gameState={gameState} setIsLoading={setIsLoading}/> :
        gameState.isPlaying? 
        <Viewer dispatch={dispatch} gameState={gameState} isLoading={isLoading} setIsLoading={setIsLoading}/> : 
        <ExpansionPick dispatch={dispatch} gameState={gameState}/>
        
        )

}
export default Player;