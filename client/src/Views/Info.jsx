const Info = (props) => {
    return (
        <div className='relative flex flex-col items-center justify-center w-full h-full bg-gradient-to-b from-slate-900 to-slate-800'>
            <div className='absolute top-0 left-0 h-full w-full grayscale-[0.25] xl:block hidden'>
                <video src={require('../static/backgrounds/info_bg.mp4')} autoPlay muted loop className='object-cover w-full h-full'></video>
            </div>
            <div className='absolute w-full h-full'>
            </div>
            <div className="relative flex flex-col items-center w-11/12 h-full gap-2 pt-8 mt-32 border-2 shadow-md xl:pt-0 xl:w-auto xl:h-auto -translate-y-14 xl:-translate-y-32 xl:flex-row rounded-xl xl:overflow-hidden border-x-yellow-600 border-t-yellow-700 border-b-yellow-500 bg-gradient-to-br from-slate-900 to-slate-800 shadow-black/90">
                <div className="p-8 xl:max-w-2xl 4k:max-w-4xl">
                    <span className="text-lg text-slate-300 4k:text-2xl font-myriad">Hi! I'm <span className="text-yellow-400">Chase Matherly</span> (aka acetheraven), a full stack web developer from Los Angeles. I love all things fantasy, including Dungeons & Dragons 5e, Lord of the Rings, and of course, Elder Scrolls Online. <span className='inline-block px-2 py-1 mt-2 border-2 rounded-lg bg-gradient-to-br from-slate-900 to-slate-700 border-t-yellow-600 border-b-yellow-700 border-l-yellow-600 border-r-yellow-700'>If you enjoy NirnGuessr, consider supporting my <a href="https://ko-fi.com/acetheraven" className="text-yellow-500" target="_blank" rel="noreferrer noopener">Ko-fi</a> to help keep the servers running!</span>
                    <div className='flex items-center gap-3 mt-3'>
                        <a href="https://discord.gg/WPZmQYq2" className='inline-block p-2 duration-300 border-2 border-slate-400 rounded-2xl w-fit hover:scale-105' target="_blank"
                    rel="noreferrer noopener">
                            <svg className='w-6 h-6 ' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" ><path fill="#8c9eff" d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"/></svg>
                        </a>
                        <span className=''>If you have any suggestions or find any bugs, let us know on our Discord server</span>
                    </div>
                    
                    
                    <div className="mt-5 text-sm 4k:text-xl text-slate-400 fr">
                        Heavily inspired by <a href="https://eorguessr.com/" className="text-yellow-400" target="_blank" rel="noreferrer noopener">Eorguessr</a>, developed by Pamplemouss. Consider supporting his <a href="https://ko-fi.com/pamplemouss" className="text-yellow-400" target="_blank" rel="noreferrer noopener">Ko-fi</a>.
                    </div>
                        </span>
                </div>
            </div>
        </div>
    )
}
export default Info