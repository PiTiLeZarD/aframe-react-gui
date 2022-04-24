import React from "react";

export type PanelProps = {};

export type PanelComponent = React.FunctionComponent<React.PropsWithChildren<PanelProps>>;

const Panel: PanelComponent = ({ children }): JSX.Element => {
    return (
        <div>
            Panel
            {children}
        </div>
    );
};

export default Panel;
