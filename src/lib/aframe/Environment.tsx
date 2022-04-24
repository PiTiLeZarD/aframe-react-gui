import "aframe-environment-component";
import React from "react";

export type EnvironmentProps = {
    preset:
        | "none"
        | "default"
        | "contact"
        | "egypt"
        | "checkerboard"
        | "forest"
        | "goaland"
        | "yavapai"
        | "goldmine"
        | "threetowers"
        | "poison"
        | "arches"
        | "tron"
        | "japan"
        | "dream"
        | "volcano"
        | "starry"
        | "osiris"
        | "moon";
};

export type EnvironmentComponent = React.FunctionComponent<EnvironmentProps>;

const Environment: EnvironmentComponent = ({ preset }): JSX.Element => {
    return React.createElement("a-entity", { environment: `preset: ${preset}` });
};

export default Environment;
