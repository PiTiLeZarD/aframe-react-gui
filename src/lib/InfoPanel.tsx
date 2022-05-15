import { ComponentDefinition } from "aframe";
import React from "react";
import { withAssets } from "./aframe/AssetsRegistry";
import { ModalContext } from "./ModalLayer";

const componentMixins = {
    onMenuButtonClick: function (evt) {
        this.backgroundEl.object3D.scale.set(1, 1, 1);
        this.el.object3D.scale.set(1, 1, 1);
        if (AFRAME.utils.device.isMobile()) {
            this.el.object3D.scale.set(1.4, 1.4, 1.4);
        }
        this.fadeBackgroundEl.object3D.visible = true;
    },

    onBackgroundClick: function (evt) {
        this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
        this.el.object3D.scale.set(0.001, 0.001, 0.001);
        this.el.object3D.visible = false;
        this.fadeBackgroundEl.object3D.visible = false;
    },
};

export const infoPanelAFComponent: ComponentDefinition = {
    init: function () {
        var buttonEls = document.querySelectorAll(".menu-button");
        for (var i = 0; i < buttonEls.length; ++i) {
            buttonEls[i].addEventListener("click", componentMixins.onMenuButtonClick.bind(this));
        }

        this.backgroundEl = document.querySelector("#background");
        this.backgroundEl.addEventListener("click", componentMixins.onBackgroundClick.bind(this));
        this.el.object3D.renderOrder = 9999999;
        this.el.object3D.depthTest = false;

        var fadeBackgroundEl = (this.fadeBackgroundEl = document.querySelector("#fadeBackground"));
        fadeBackgroundEl.object3D.renderOrder = 9;
        // fadeBackgroundEl.getObject3D("mesh").material.depthTest = false;
    },
};

export type InfoPanelProps = {
    title: string;
    description: string;
    id: string;
};

export type InfoPanelComponent = React.FunctionComponent<InfoPanelProps>;

const InfoPanel: InfoPanelComponent = ({ id, title, description, ...otherProps }): JSX.Element => {
    const { setOpen } = React.useContext(ModalContext);

    React.useEffect(() => {
        setOpen(!!id);
    }, [id]);

    if (!id) return null;

    return React.createElement(
        "a-entity",
        {
            id: "infoPanel",
            position: "0 0 0.5",
            inmodal: true,
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
