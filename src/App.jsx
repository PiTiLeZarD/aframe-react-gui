import "aframe";

import initAframeComponents from "./AFrameComponents";
import { useEffect, useState } from "react";
import { Environment, Laser, PosterMenu, Scene, UI, Poster, InfoPanel } from "./lib";
import AssetsRegistry from "./lib/aframe/AssetsRegistry";

const data = {
    karigurashi: {
        title: "The Secret World of Arrietty (2010)",
        description:
            "Based on the 1952 novel The Borrowers by Mary Norton, an English author of children's books, about a family of tiny people who live secretly in the walls and floors of a typical household, borrowing items from humans to survive.",
        position: "-0.8 0 0",
        poster: "https://cdn.aframe.io/examples/ui/karigurashiPoster.jpg",
        image: "https://cdn.aframe.io/examples/ui/karigurashi.jpg",
    },
    kazetachinu: {
        title: "The Wind Rises (2013)",
        description:
            "The Wind Rises is a fictionalised biographical film of Jiro Horikoshi (1903, 1982), designer of the Mitsubishi A5M fighter aircraft and its successor, the Mitsubishi A6M Zero, used by the Empire of Japan during World War II. The film is adapted from Miyazaki's manga of the same name, which was in turn loosely based on both the 1937 novel The Wind Has Risen by Tatsuo Hori and the life of Jiro Horikoshi.",
        position: "0 0 0",
        poster: "https://cdn.aframe.io/examples/ui/kazetachinuPoster.jpg",
        image: "https://cdn.aframe.io/examples/ui/kazetachinu.jpg",
    },
    ponyo: {
        title: "Ponyo (2003)",
        description:
            "It is the eighth film Miyazaki directed for Studio Ghibli, and his tenth overall. The film tells the story of Ponyo (Nara), a goldfish who escapes from the ocean and is rescued by a five-year-old human boy, Sōsuke (Doi) after she is washed ashore while trapped in a glass jar.",
        position: "0.8 0 0",
        poster: "https://cdn.aframe.io/examples/ui/ponyoPoster.jpg",
        image: "https://cdn.aframe.io/examples/ui/ponyo.jpg",
    },
};

const App = () => {
    useEffect(() => {
        initAframeComponents();
    }, []);

    const [selectedMovie, setSelectedMovie] = useState(null);

    const handlePosterClick = (key) => () => setSelectedMovie(key);

    return (
        <Scene background="color: #212" cursor="rayOrigin: mouse; fuse: false" raycaster="objects: .raycastable">
            <Environment preset="japan" />
            <Laser hand="left" target="raycastable" />
            <Laser hand="right" target="raycastable" colour="#118A7E" />

            <AssetsRegistry>
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

                <UI position="0 1.6 -2.5">
                    <PosterMenu>
                        {Object.keys(data).map((key) => (
                            <Poster {...{ key, id: key, ...data[key] }} onClick={handlePosterClick(key)} />
                        ))}
                    </PosterMenu>

                    {selectedMovie !== null && (
                        <InfoPanel
                            title={data[selectedMovie].title}
                            description={data[selectedMovie].description}
                            imgAssetId={selectedMovie}
                        />
                    )}
                </UI>
            </AssetsRegistry>
        </Scene>
    );
};

export default App;
