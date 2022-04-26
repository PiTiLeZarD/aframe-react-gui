import React, { useState } from "react";

export type ModalLayerProps = {};

export type ModalLayerComponent = React.FunctionComponent<React.PropsWithChildren<ModalLayerProps>>;

const defaultContext: { open: boolean; setOpen: (open: boolean) => void } = {
    open: false,
    setOpen: () => {},
};
export const ModalContext = React.createContext(defaultContext);

const ModalLayer: ModalLayerComponent = ({ children }): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false);

    const id = "modal";
    return (
        <ModalContext.Provider value={{ open, setOpen }}>
            {React.createElement("a-entity", {
                id,
                position: "0 0 0",
                geometry: "primitive: sphere; radius: 2.0",
                material: "color: red; side: back; shader: flat",
                scale: open ? "1 1 1" : "0.001 0.001 0.001",
                visible: "false",
                class: "raycastable",
                onClick: () => setOpen(false),
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
        </ModalContext.Provider>
    );
};

export default ModalLayer;
