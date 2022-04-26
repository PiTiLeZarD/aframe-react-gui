import "aframe";

import initAframeComponents from "./AFrameComponents";
import { useEffect } from "react";
import { Laser, Scene } from "./lib";
import AssetsRegistry from "./lib/aframe/AssetsRegistry";
import ModalLayer from "./lib/ModalLayer";
import JapaneseMoviesScene from "./JapaneseMoviesScene";

const App = () => {
    useEffect(() => {
        initAframeComponents();
    }, []);

    return (
        <Scene background="color: #212" cursor="rayOrigin: mouse; fuse: false" raycaster="objects: .raycastable">
            <Laser hand="left" target="raycastable" />
            <Laser hand="right" target="raycastable" colour="#118A7E" />

            <ModalLayer>
                <AssetsRegistry>
                    <JapaneseMoviesScene />
                </AssetsRegistry>
            </ModalLayer>
        </Scene>
    );
};

export default App;
