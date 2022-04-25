import React from "react";
import { withAssets } from "./aframe/AssetsRegistry";

export type InfoPanelProps = {
    title: string;
    description: string;
    id: string;
};

export type InfoPanelComponent = React.FunctionComponent<InfoPanelProps>;

const InfoPanel: InfoPanelComponent = ({ id, title, description, ...otherProps }): JSX.Element => {
    if (!id) return null;

    return React.createElement(
        "a-entity",
        {
            id: "infoPanel",
            position: "0 0 0.5",
            inModal: true,
            scale: "1 1 1",
            geometry: "primitive: plane; width: 1.5; height: 1.8",
            material: "color: #333333; shader: flat; transparent: false",
            class: "raycastable",
        },
        <>
            {React.createElement("a-entity", {
                id: `${id}MovieImage`,
                mixin: "movieImage",
                material: `src: #${id}`,
            })}
            {React.createElement("a-entity", {
                id: "movieTitle",
                position: "-0.68 -0.1 0",
                text: `shader: msdf; anchor: left; width: 1.5; font: https://cdn.aframe.io/examples/ui/Viga-Regular.json; color: white; value: ${title}`,
            })}
            {React.createElement("a-entity", {
                id: "movieDescription",
                position: "-0.68 -0.2 0",
                text: `baseline: top; shader: msdf; anchor: left; font: https://cdn.aframe.io/examples/ui/Viga-Regular.json; color: white; value: ${description}`,
            })}
        </>
    );
};

export default withAssets([
    ({ id }: Partial<InfoPanelProps>) => [
        "movieImage",
        "a-mixin",
        {
            geometry: "primitive: plane; width: 1.5; height: 0.81",
            material: `src: #${id}; shader: flat; transparent: true`,
            position: "0 0.495 0.002",
        },
    ],
])(InfoPanel);
