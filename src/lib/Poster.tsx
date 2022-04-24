import React from "react";
import { AssetsContext } from "./aframe/AssetsRegistry";

export type PosterProps = {
    id: string;
    position: string;
    src: string;
};

export type PosterComponent = React.FunctionComponent<PosterProps>;

const Poster: PosterComponent = ({ id, position, src }): JSX.Element => {
    const { registerAsset } = React.useContext(AssetsContext);

    registerAsset(`${id}Poster`, "img", {
        src,
        crossOrigin: "anonymous",
    });

    registerAsset("poster", "a-mixin", {
        geometry: "primitive: plane; width: 0.544768; height: 0.786432",
        material: "color: white; shader: flat",
        position: "0 0 0.005",
    });

    registerAsset("movieImage", "a-mixin", {
        geometry: "primitive: plane; width: 1.5; height: 0.81",
        material: "src: #ponyo; shader: flat; transparent: true",
        position: "0 0.495 0.002",
    });

    return React.createElement(
        "a-entity",
        { id: `${id}Button`, position, mixin: "frame", class: "raycastable menu-button" },
        React.createElement("a-entity", {
            material: `src: #${id}Poster;`,
            mixin: "poster",
        })
    );
};

export default Poster;
