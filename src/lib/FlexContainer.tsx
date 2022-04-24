import React from "react";

export type FlexContainerProps = {};

export type FlexContainerComponent = React.FunctionComponent<React.PropsWithChildren<FlexContainerProps>>;

const FlexContainer: FlexContainerComponent = ({ children }): JSX.Element => {
    return (
        <div>
            FlexContainer
            {children}
        </div>
    );
};

export default FlexContainer;
