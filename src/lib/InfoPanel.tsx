import React from "react";

export type InfoPanelProps = {
    display: boolean;
    title: string;
    description: string;
    imgAssetId: string;
};

export type InfoPanelComponent = React.FunctionComponent<InfoPanelProps>;

const InfoPanel: InfoPanelComponent = ({ display = true, title, description, imgAssetId }): JSX.Element => {
    if (!display) return null;

    return React.createElement(
        "a-entity",
        {
            id: "infoPanel",
            position: "0 0 0.5",
            "info-panel": true,
            scale: "0.001 0.001 0.001",
            geometry: "primitive: plane; width: 1.5; height: 1.8",
            material: "color: #333333; shader: flat; transparent: false",
            class: "raycastable",
        },
        <>
            {React.createElement("a-entity", {
                id: `${imgAssetId}MovieImage`,
                mixin: "movieImage",
                material: `src: #${imgAssetId}`,
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

export default InfoPanel;
