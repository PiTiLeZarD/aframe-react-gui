import React from "react";

export type UIProps = {
    position: string;
};

export type UIComponent = React.FunctionComponent<React.PropsWithChildren<UIProps>>;

const UI: UIComponent = ({ position, children }): JSX.Element => {
    return React.createElement("a-entity", { id: "ui", position }, children);
};

export default UI;
