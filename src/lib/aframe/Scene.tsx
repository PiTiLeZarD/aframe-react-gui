import React from "react";

export type SceneProps = {
    background?: string;
    cursor?: string;
    raycaster?: string;
};

export type SceneComponent = React.FunctionComponent<SceneProps>;

const Scene: SceneComponent = ({ ...otherProps }): JSX.Element => {
    return React.createElement("a-scene", otherProps);
};

export default Scene;
