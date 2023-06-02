const Info = (props) => {
    return (
        <div className='relative h-full w-full flex flex-col justify-center items-center bg-gradient-to-b from-slate-900 to-slate-800'>
            <div className='absolute top-0 left-0 h-full w-full grayscale-[0.25] xl:block hidden'>
                <video src={require('../static/backgrounds/info_bg.mp4')} autoPlay muted loop className='h-full w-full object-cover'></video>
            </div>
            <div className='h-full w-full absolute'>
            </div>
            <div className="pt-8 xl:pt-0 mt-32 w-11/12 xl:w-auto h-full xl:h-auto -translate-y-14 xl:-translate-y-32 gap-2 flex-col items-center xl:flex-row flex rounded-xl xl:overflow-hidden relative border-2 border-x-yellow-600 border-t-yellow-700 border-b-yellow-500 bg-gradient-to-br from-slate-900 to-slate-800 shadow-md shadow-black/90">
                <div className="xl:max-w-2xl 4k:max-w-4xl p-8">
                    <span className="text-slate-300 text-lg 4k:text-2xl font-myriad">Hi! I'm <span className="text-yellow-400">Chase Matherly</span> (aka acetheraven), a full stack web developer from Los Angeles. I love all things fantasy, including Dungeons & Dragons 5e, Lord of the Rings, and of course, Elder Scrolls Online. <span className='mt-2 inline-block py-1 px-2 rounded-lg bg-gradient-to-br from-slate-900 to-slate-700 border-2 border-t-yellow-600 border-b-yellow-700 border-l-yellow-600 border-r-yellow-700'>If you enjoy NirnGuessr, consider supporting my <a href="https://ko-fi.com/acetheraven" className="text-yellow-500 underline">Ko-fi</a> to help keep the servers running!</span>
                    
                    <div className="text-sm 4k:text-xl text-slate-400 mt-10 fr">
                        Heavily inspired by <a href="https://eorguessr.com/" className="text-yellow-400">Eorguessr</a>, developed by Pamplemouss. Consider supporting his <a href="https://ko-fi.com/pamplemouss" className="text-yellow-400">Ko-fi</a>.
                    </div>
                        </span>
                </div>
            </div>
        </div>
    )
}
export default Info