import Nevbar from './components/nevbar'
import HeadingAnimation from "./components/common/heading-animation.jsx";
export default function App(){
    return (
        <>
            <Nevbar />
            <div className="w-full flex justify-center items-center"><HeadingAnimation title={"title"}/></div>

        </>
    )
}