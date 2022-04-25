import React from "react";
import { withAssets } from "./aframe/AssetsRegistry";

export type PosterProps = {
    id: string;
    position: string;
    poster: string;
    image: string;
    selected?: boolean;
    onClick?: () => {};
};

export type PosterComponent = React.FunctionComponent<PosterProps>;

const Poster: PosterComponent = ({ id, position, selected = false, onClick }): JSX.Element =>
    React.createElement(
        "a-entity",
        {
            id: `${id}Button`,
            position,
            mixin: "frame",
            class: `raycastable menu-button ${selected ? "selected" : ""}`,
            highlight: true,
            onClick,
        },
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
])(Poster);
