/** https://github.com/supermedium/aframe-environment-component */
import "aframe-environment-component";
import React from "react";

export type EnvironmentProps = {
    active: boolean;
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
    seed: number;
    skyType: "color" | "gradient" | "atmosphere";
    skyColor: string;
    horizonColor: string;
    lighting: "none" | "distant" | "point";
    shadow: boolean;
    shadowSize: number;
    lightPosition: string;
    fog: number;
    flatShading: boolean;
    playArea: 1;
    ground: "none" | "flat" | "hills" | "canyon" | "spikes" | "noise";
    groundYScale: number;
    groundTexture: "none" | "checkerboard" | "squares" | "walkernoise";
    groundColor: string;
    groundColor2: string;
    dressing: "none" | "cubes" | "pyramids" | "cylinders" | "towers" | "mushrooms" | "trees" | "apparatus" | "torii";
    dressingAmount: number;
    dressingColor: string;
    dressingScale: number;
    dressingVariance: string;
    dressingUniformScale: boolean;
    grid: "none" | "1x1" | "2x2" | "crosses" | "dots" | "xlines" | "ylines";
    gridColor: string;
};

export type EnvironmentComponent = React.FunctionComponent<Partial<EnvironmentProps>>;

const Environment: EnvironmentComponent = ({ preset = "default", ...otherProps }): JSX.Element => {
    return React.createElement("a-entity", {
        environment: `preset: ${preset}`,
        ...otherProps,
    });
};

export default Environment;
