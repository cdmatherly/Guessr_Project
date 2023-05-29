const NotFound = (props) => {

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <p className="text-center font-bold text-4xl text-stroke-black -mt-24 h-8 flex items-center gap-4">404 <span style={{width:'2px', height:'100%', backgroundColor:'black', display:'inline-block', boxShadow:'1px 1px 1px rgba(235, 235, 235, 0.5)' }}></span> page not found</p>
            <div className="h-screen w-full absolute top-0 -z-20" style={{backgroundImage:`url(${require(`../static/backgrounds/bg14.jpg`)}`, backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center', filter:'grayscale(100%)' }}>
            </div>
            <div className="h-screen w-full absolute top-0 -z-10 bg-yellow-950/80 bg-">
            </div>
        </div>
    )
}
export default NotFound