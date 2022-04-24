import React from "react";

export type TextProps = {};

export type TextComponent = React.FunctionComponent<TextProps>;

const Text: TextComponent = (): JSX.Element => {
    return <div>Text</div>;
};

export default Text;
