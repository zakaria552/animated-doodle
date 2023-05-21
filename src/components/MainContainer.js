import Controls from "./Controls"
import Game from "./Game"
function MainContainer() {
    return <div className="w-3/4 bg-blue-100">
        <div className="flex flex-col items-center justify-center">
            <h1 className="flex w-fit">main container</h1>
            <Controls></Controls>
            <Game></Game>
        </div>
    </div>
}

export default MainContainer