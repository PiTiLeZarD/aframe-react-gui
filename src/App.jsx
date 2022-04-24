import "aframe";

import initAframeComponents from "./AFrameComponents";
import { useEffect } from "react";
import { Environment, Laser, PosterMenu, Scene, UI } from "./lib";
import AssetsRegistry from "./lib/aframe/AssetsRegistry";
import Poster from "./lib/Poster";

const App = () => {
    useEffect(() => {
        initAframeComponents();
    }, []);
    return (
        <Scene background="color: #212" cursor="rayOrigin: mouse; fuse: false" raycaster="objects: .raycastable">
            <Environment preset="japan" />

            <AssetsRegistry>
                <a-assets>
                    <img
                        id="kazetachinu"
                        src="https://cdn.aframe.io/examples/ui/kazetachinu.jpg"
                        crossOrigin="anonymous"
                    />
                    <img id="ponyo" src="https://cdn.aframe.io/examples/ui/ponyo.jpg" crossOrigin="anonymous" />
                    <img
                        id="karigurashi"
                        src="https://cdn.aframe.io/examples/ui/karigurashi.jpg"
                        crossOrigin="anonymous"
                    />
                </a-assets>

                <a-entity
                    id="background"
                    position="0 0 0"
                    geometry="primitive: sphere; radius: 2.0"
                    material="color: red; side: back; shader: flat"
                    scale="0.001 0.001 0.001"
                    visible="false"
                    class="raycastable"
                ></a-entity>

                <a-entity
                    position="0 1.6 0"
                    camera
                    look-controls="magicWindowTrackingEnabled: false; touchEnabled: false; mouseEnabled: false"
                >
                    <a-entity
                        id="fadeBackground"
                        geometry="primitive: sphere; radius: 2.5"
                        material="color: black; side: back; shader: flat; transparent: true; opacity: 0.6"
                        visible="false"
                    ></a-entity>
                </a-entity>

                <Laser hand="left" target="raycastable" />
                <Laser hand="right" target="raycastable" colour="#118A7E" />

                <UI position="0 1.6 -2.5">
                    <PosterMenu>
                        <Poster
                            id="karigurashi"
                            position="-0.8 0 0"
                            src="https://cdn.aframe.io/examples/ui/karigurashiPoster.jpg"
                        />
                        <Poster
                            id="kazetachinu"
                            position="0 0 0"
                            src="https://cdn.aframe.io/examples/ui/kazetachinuPoster.jpg"
                        />
                        <Poster id="ponyo" position="0.8 0 0" src="https://cdn.aframe.io/examples/ui/ponyoPoster.jpg" />
                    </PosterMenu>

                    <a-entity
                        id="infoPanel"
                        position="0 0 0.5"
                        info-panel
                        visible="false"
                        scale="0.001 0.001 0.001"
                        geometry="primitive: plane; width: 1.5; height: 1.8"
                        material="color: #333333; shader: flat; transparent: false"
                        class="raycastable"
                    >
                        <a-entity
                            id="ponyoMovieImage"
                            mixin="movieImage"
                            material="src: #ponyo"
                            visible="false"
                        ></a-entity>
                        <a-entity
                            id="kazetachinuMovieImage"
                            mixin="movieImage"
                            material="src: #kazetachinu"
                            visible="false"
                        ></a-entity>
                        <a-entity
                            id="karigurashiMovieImage"
                            mixin="movieImage"
                            material="src: #karigurashi"
                            visible="false"
                        ></a-entity>
                        <a-entity
                            id="movieTitle"
                            position="-0.68 -0.1 0"
                            text="shader: msdf; anchor: left; width: 1.5; font: https://cdn.aframe.io/examples/ui/Viga-Regular.json; color: white; value: Ponyo (2003)"
                        ></a-entity>
                        <a-entity
                            id="movieDescription"
                            position="-0.68 -0.2 0"
                            text="baseline: top; shader: msdf; anchor: left; font: https://cdn.aframe.io/examples/ui/Viga-Regular.json; color: white; value: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        ></a-entity>
                    </a-entity>
                </UI>
            </AssetsRegistry>
        </Scene>
    );
};

/**
 * 
import { Scene, Panel, FlexContainer, Text } from "./lib";
        <Scene>
            <Panel>
                <FlexContainer>
                    <Text>Test</Text>
                </FlexContainer>
            </Panel>
        </Scene>
 */
export default App;
