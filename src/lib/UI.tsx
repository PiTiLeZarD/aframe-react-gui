import React from "react";

export type UIProps = {};

export type UIComponent = React.FunctionComponent<React.PropsWithChildren<UIProps>>;

const UI: UIComponent = ({ children }): JSX.Element => {
    return (
        <div>
            UI
            {children}
        </div>
    );
};

export default UI;
