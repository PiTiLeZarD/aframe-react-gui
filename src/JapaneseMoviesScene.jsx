import { useEffect, useContext, useState } from "react";
import { Environment, PosterMenu, UI, Poster, InfoPanel } from "./lib";
import { ModalContext } from "./lib/ModalLayer";

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

const JapaneseMoviesScene = () => {
    const { open } = useContext(ModalContext);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        if (selectedMovie && !open) {
            setSelectedMovie(null);
        }
    }, [open]);

    const handlePosterClick = (key) => () => setSelectedMovie(key);

    return (
        <>
            <Environment preset="japan" />
            <UI position="0 1.6 -2.5">
                <InfoPanel id={selectedMovie} {...(selectedMovie != null ? data[selectedMovie] : {})} />
                <PosterMenu>
                    {Object.keys(data).map((key) => (
                        <Poster
                            {...{ key, id: key, ...data[key] }}
                            selected={key == selectedMovie}
                            onClick={handlePosterClick(key)}
                        />
                    ))}
                </PosterMenu>
            </UI>
        </>
    );
};

export default JapaneseMoviesScene;