import React from "react";
import { withAssets } from "./aframe/AssetsRegistry";

export type PosterProps = {
    id: string;
    position: string;
    poster: string;
    image: string;
};

export type PosterComponent = React.FunctionComponent<PosterProps>;

const Poster: PosterComponent = ({ id, position }): JSX.Element =>
    React.createElement(
        "a-entity",
        { id: `${id}Button`, position, mixin: "frame", class: "raycastable menu-button" },
        React.createElement("a-entity", {
            material: `src: #${id}Poster;`,
            mixin: "poster",
        })
    );

export default withAssets([
    ({ id, poster }: Partial<PosterProps>) => [
        `${id}Poster`,
        "img",
        {
            src: poster,
            crossOrigin: "anonymous",
        },
    ],
    ({ id, image }: Partial<PosterProps>) => [
        `${id}`,
        "img",
        {
            src: image,
            crossOrigin: "anonymous",
        },
    ],
    [
        "poster",
        "a-mixin",
        {
            geometry: "primitive: plane; width: 0.544768; height: 0.786432",
            material: "color: white; shader: flat",
            position: "0 0 0.005",
        },
    ],
    [
        "movieImage",
        "a-mixin",
        {
            geometry: "primitive: plane; width: 1.5; height: 0.81",
            material: "src: #ponyo; shader: flat; transparent: true",
            position: "0 0.495 0.002",
        },
    ],
])(Poster);
