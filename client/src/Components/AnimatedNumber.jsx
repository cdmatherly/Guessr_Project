import { useSpring, animated } from "react-spring"
const  AnimatedNumber = (props) => {
    const { num, className } = props;
    
    const { number } = useSpring({
        from: { number: 0 },
        number: num,
        delay: 500,
        config: { mass: 1.75, tension: 20, friction: 10}
    })
    
    return <animated.div className={`text-stone-200 text-2xl game-score ` + className }>{number.to((n) => n.toFixed(0))}</animated.div>
}
export default AnimatedNumber