import React from "react";

export type ModalLayerProps = {
    id: string;
    open: boolean;
    onClick: () => {};
};

export type ModalLayerComponent = React.FunctionComponent<React.PropsWithChildren<ModalLayerProps>>;

const ModalLayer: ModalLayerComponent = ({ id, open, children, onClick }): JSX.Element => {
    if (!open) return null;
    return (
        <>
            {React.createElement("a-entity", {
                id,
                position: "0 0 0",
                geometry: "primitive: sphere; radius: 2.0",
                material: "color: red; side: back; shader: flat",
                scale: open ? "1 1 1" : "0.001 0.001 0.001",
                visible: "false",
                class: "raycastable",
                onClick,
            })}
            {React.createElement(
                "a-entity",
                {
                    position: "0 1.6 0",
                    camera: true,
                    "look-controls": "magicWindowTrackingEnabled: false; touchEnabled: false; mouseEnabled: false",
                },
                React.createElement("a-entity", {
                    id: `${id}Fade`,
                    overlay: true,
                    geometry: "primitive: sphere; radius: 2.5",
                    material: "color: black; side: back; shader: flat; transparent: true; opacity: 0.6",
                    visible: open ? "true" : "false",
                })
            )}
            {children}
        </>
    );
};

export default ModalLayer;
