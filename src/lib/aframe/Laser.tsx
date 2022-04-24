import React from "react";

export type LaserProps = {
    hand: "left" | "right";
    colour?: string;
    target: string;
};

export type LaserComponent = React.FunctionComponent<LaserProps>;

const Laser: LaserComponent = ({ hand, colour, target }): JSX.Element => {
    const line = colour ? { line: `color: ${colour}` } : {};
    return React.createElement("a-entity", {
        id: `${hand}Hand`,
        "laser-controls": `hand: ${hand}`,
        raycaster: `objects: .${target}`,
        ...line,
    });
};

export default Laser;
