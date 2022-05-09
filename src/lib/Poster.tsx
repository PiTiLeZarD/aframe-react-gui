import { ComponentDefinition } from "aframe";
import React from "react";
import { withAssets } from "./aframe/AssetsRegistry";

const componentMixin = {
    onClick: function (evt) {
        const previouslyClicked = this.el.is("clicked");
        componentMixin.resetAll(evt.target);

        if (!previouslyClicked) {
            componentMixin.select(evt.target);
        }
    },

    select: (target) => {
        target.addState("clicked");
        target.pause();
        target.setAttribute("material", "color", "#046de7");
        target.object3D.scale.set(1.2, 1.2, 1.2);
    },

    onMouseEnter: function (evt) {
        evt.target.setAttribute("material", "color", "#046de7");
    },

    onMouseLeave: function (evt) {
        if (this.el.is("clicked")) {
            return;
        }
        evt.target.setAttribute("material", "color", "white");
    },

    resetAll: (target) => {
        Array.from(target.parentNode.children).forEach((elt: any) => {
            componentMixin.reset(elt);
        });
    },

    reset: (target) => {
        target.removeState("clicked");
        target.play();
        target.emit("mouseleave");
        target.setAttribute("material", "color", "white");
    },
};

export const highlightAFComponent: ComponentDefinition = {
    init: function () {
        this.el.addEventListener("mouseenter", componentMixin.onMouseEnter.bind(this));
        this.el.addEventListener("mouseleave", componentMixin.onMouseLeave.bind(this));
        this.el.addEventListener("click", componentMixin.onClick.bind(this));
        if (Array.from(this.el.classList).includes("selected")) {
            componentMixin.select(this.el);
        } else {
            componentMixin.reset(this.el);
        }
    },
};

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
