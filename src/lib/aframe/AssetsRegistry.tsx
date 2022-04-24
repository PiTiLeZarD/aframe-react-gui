import React from "react";

export type AssetsRegistryProps = {};

export type AssetsRegistryComponent = React.FunctionComponent<React.PropsWithChildren<AssetsRegistryProps>>;

type AssetComponentId = string;
type AssetComponentType = string;
type AssetComponentDefinition = Object;

const defaultAssetsContext = {
    registerAsset: (id: AssetComponentId, type: AssetComponentType, def: AssetComponentDefinition) => {},
};
export const AssetsContext = React.createContext(defaultAssetsContext);

const AssetsRegistry: AssetsRegistryComponent = ({ children }): JSX.Element => {
    const [assets, setAssets] = React.useState<{
        [id: AssetComponentId]: [AssetComponentType, AssetComponentDefinition];
    }>({});
    const registerAsset = (id, type, def) => {
        if (!Object.keys(assets).includes(id)) {
            setAssets({ ...assets, [id]: [type, def] });
        }
    };

    return (
        <AssetsContext.Provider value={{ registerAsset }}>
            {Object.keys(assets).length &&
                React.createElement(
                    "a-assets",
                    {},
                    Object.entries(assets).map(([id, [type, def]]) =>
                        React.createElement(type, { ...def, id, key: id })
                    )
                )}
            {children}
        </AssetsContext.Provider>
    );
};

export default AssetsRegistry;
