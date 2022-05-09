import { useState } from "react";
import { Environment, PosterMenu, UI, InfoPanel } from "./lib";

const data = {
    karigurashi: {
        title: "The Secret World of Arrietty (2010)",
        description:
            "Based on the 1952 novel The Borrowers by Mary Norton, an English author of children's books, about a family of tiny people who live secretly in the walls and floors of a typical household, borrowing items from humans to survive.",
        poster: "https://cdn.aframe.io/examples/ui/karigurashiPoster.jpg",
        image: "https://cdn.aframe.io/examples/ui/karigurashi.jpg",
    },
    kazetachinu: {
        title: "The Wind Rises (2013)",
        description:
            "The Wind Rises is a fictionalised biographical film of Jiro Horikoshi (1903, 1982), designer of the Mitsubishi A5M fighter aircraft and its successor, the Mitsubishi A6M Zero, used by the Empire of Japan during World War II. The film is adapted from Miyazaki's manga of the same name, which was in turn loosely based on both the 1937 novel The Wind Has Risen by Tatsuo Hori and the life of Jiro Horikoshi.",
        poster: "https://cdn.aframe.io/examples/ui/kazetachinuPoster.jpg",
        image: "https://cdn.aframe.io/examples/ui/kazetachinu.jpg",
    },
    ponyo: {
        title: "Ponyo (2003)",
        description:
            "It is the eighth film Miyazaki directed for Studio Ghibli, and his tenth overall. The film tells the story of Ponyo (Nara), a goldfish who escapes from the ocean and is rescued by a five-year-old human boy, Sōsuke (Doi) after she is washed ashore while trapped in a glass jar.",
        poster: "https://cdn.aframe.io/examples/ui/ponyoPoster.jpg",
        image: "https://cdn.aframe.io/examples/ui/ponyo.jpg",
    },
    nausica: {
        title: "Nausica (1979)",
        description:
            "The film stars the voices of Sumi Shimamoto, Goro Naya, Yoji Matsuda, Yoshiko Sakakibara and Iemasa Kayumi.[1] Taking place in a future post-apocalyptic world.",
        poster: "https://ghibli-universe.com/wp-content/uploads/2021/06/H997361b79c0e44968186d07b6cdf38e68.jpg",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBoQZUnYlTbHNvN85hpV9Zffg6LYfNxijUlw&usqp=CAU",
    },
    cagliostro: {
        title: "Castle of Cagliostro (1979)",
        description:
            "It is the eighth film Miyazaki directed for Studio Ghibli, and his tenth overall. The film tells the story of Ponyo (Nara), a goldfish who escapes from the ocean and is rescued by a five-year-old human boy, Sōsuke (Doi) after she is washed ashore while trapped in a glass jar.",
        poster: "https://upload.wikimedia.org/wikipedia/en/4/4f/Castle_of_Cagliostro_poster.png",
        image: "https://miro.medium.com/max/757/0*teSrp2nb0WXW4pMh.png",
    },
};

const JapaneseMoviesScene = () => {
    const [selectedMovie, setselectedMovie] = useState(null);
    return (
        <>
            <Environment preset="japan" />
            <UI position="0 1.6 -2.5">
                <InfoPanel id={selectedMovie} {...(selectedMovie != null ? data[selectedMovie] : {})} />
                <PosterMenu
                    posters={Object.keys(data).map((id) => ({ id, ...data[id] }))}
                    onClick={(ev, id) => setselectedMovie(id)}
                />
            </UI>
        </>
    );
};

export default JapaneseMoviesScene;
