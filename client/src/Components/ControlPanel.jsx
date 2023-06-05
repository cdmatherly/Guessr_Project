import { useState } from "react";

const ControlPanel = (props) => {
    const { changeLayer, setPosition, zones } = props

    const showDropdown = () => {
        const dropdown = document.getElementById("dropdown");
        dropdown && dropdown.classList.toggle("hidden") 
    }
    const showDoubleDropdown = () => {
        const doubleDropdown = document.getElementById("doubleDropdown");
        doubleDropdown && doubleDropdown.classList.toggle("hidden") 
    }

    const filteredZones = zones.filter(zone => zone.name != 'Tamriel')
    const tamriel = zones.find(zone => zone.name == 'Tamriel')

    return (
        <div className="flex flex-col absolute sm:top-0 top-20 sm:-left-28 left-3 items-start" style={{zIndex:"500"}}>
            <div className="">
                <button id="multiLevelDropdownButton" data-dropdown-toggle="dropdown" onClick={(e) => {changeLayer("tamriel")} } className="text-white font-medium text-sm text-center inline-flex items-center sm:justify-end sm:h-1/6 sm:w-28 w-8" type="button">
                    <div className="focus:ring-4 focus:outline-none bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-700 rounded-lg sm:px-4 px-2.5 py-2.5 sm:w-full w-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-map-fill sm:w-4 w-3 sm:h-4 h-3" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5V.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0L5 14.09zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1-.5-.1z"/>
                        </svg>
                    </div>
                </button>
            </div>
            <div className="flex flex-col items-start">
                <button id="multiLevelDropdownButton" data-dropdown-toggle="dropdown" onClick={(e) => {showDropdown(e)} } className="text-white font-medium text-sm text-center inline-flex items-center sm:justify-end sm:h-1/6 sm:w-28 w-8" type="button">
                    <div className="focus:ring-4 focus:outline-none bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-700 rounded-lg sm:px-4 px-2 py-2.5 sm:w-full w-8">
                        <svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </button>
                <div id="dropdown" className="z-10 hidden divide-y divide-gray-100 rounded-lg shadow bg-gray-700 sm:h-full h-36 overflow-y-auto">
                    <ul className="py-2 text-sm text-gray-200" aria-labelledby="multiLevelDropdownButton">
                    <li>
                        <button onClick={(e) => { changeLayer(tamriel.shortName)} } className="block px-4 py-2 hover:bg-gray-600 hover:text-white w-full text-center">{tamriel.name}</button>
                    </li>
                    {filteredZones.map((zone, idx) => 
                    <li key={idx}>
                        <button onClick={(e) => { changeLayer(zone.shortName)} } className="block px-4 py-2 hover:bg-gray-600 hover:text-white w-full text-center">{zone.name}</button>
                    </li>
                    )}
                    {/* <li>
                        <button id="doubleDropdownButton" onClick={(e) => {showDoubleDropdown(e)} } data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-fit px-4 py-2 hover:bg-gray-100 hover:bg-gray-600 hover:text-white">Auridon<svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></button>
                        <div id="doubleDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-28 bg-gray-700">
                            <ul className="py-2 text-sm text-gray-700 text-gray-200" aria-labelledby="doubleDropdownButton">
                            <li>
                                <button href="#" className="block px-4 py-2 hover:bg-gray-100 hover:bg-gray-600 hover:text-white">Overview</button>
                            </li>
                            </ul>
                        </div>
                    </li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default ControlPanel