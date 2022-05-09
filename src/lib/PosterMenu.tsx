import React, { useContext, useEffect, useState } from "react";
import { withAssets } from "./aframe/AssetsRegistry";
import { ModalContext } from "./ModalLayer";
import Poster, { PosterProps } from "./Poster";

export type PosterMenuProps = {
    posters: PosterProps[];
    onClick: (ev: React.SyntheticEvent, selected: string) => void;
};

export type PosterMenuComponent = React.FunctionComponent<React.PropsWithChildren<PosterMenuProps>>;

const PosterMenu: PosterMenuComponent = ({ onClick, posters }): JSX.Element => {
    const [selected, setSelected] = useState(null);
    const { open } = useContext(ModalContext);

    useEffect(() => {
        if (selected && !open) {
            setSelected(null);
            onClick(null, null);
        }
    }, [open]);

    const getOffset = (id: string) =>
        (posters.findIndex((poster) => poster.id == id) - Math.trunc(posters.length / 2)) * 0.8;

    const handlePosterClick = (id: string) => (ev: React.SyntheticEvent) => {
        setSelected(id);
        onClick(ev, id);
    };

    const children = posters.map((posterProps) => (
        <Poster
            key={posterProps.id}
            selected={selected == posterProps.id}
            {...posterProps}
            position={`${getOffset(posterProps.id)} 0 0`}
            onClick={handlePosterClick(posterProps.id)}
        />
    ));

    return React.createElement("a-entity", { id: "menu" }, children);
};

export default withAssets([
    [
        "frame",
        "a-mixin",
        {
            geometry: "primitive: plane; width: 0.5783552; height: 0.8192",
            material: "color: white; shader: flat",
            animation__scale: "property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter",
            animation__scale_reverse: "property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave",
        },
    ],
])(PosterMenu);
