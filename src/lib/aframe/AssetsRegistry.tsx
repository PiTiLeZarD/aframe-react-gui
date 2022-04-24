import React from "react";

export type AssetsRegistryProps = {};

export type AssetsRegistryComponent = React.FunctionComponent<React.PropsWithChildren<AssetsRegistryProps>>;

type AssetComponentId = string;
type AssetComponentType = string;
type AssetComponentDefinition = Object;
type AssetComponent = [AssetComponentId, AssetComponentType, AssetComponentDefinition];

const defaultAssetsContext: {
    assetsLoaded: (assets?: AssetComponentId[]) => boolean | AssetComponentId[];
    registerAsset: (asset: AssetComponent) => void;
} = {
    assetsLoaded: () => true,
    registerAsset: () => {},
};
export const AssetsContext = React.createContext(defaultAssetsContext);

const AssetsRegistry: AssetsRegistryComponent = ({ children }): JSX.Element => {
    const [assets, setAssets] = React.useState<AssetComponent[]>([]);

    const assetIds = assets.map((asset) => asset[0]);

    const assetsLoaded = (assetsRequired) => {
        if (!assetsRequired) return assetIds;
        return assetsRequired.reduce(
            (prev: boolean, asset: AssetComponentId) => prev && assetIds.includes(asset),
            true
        );
    };
    const registerAsset = (asset) => {
        if (!assetIds.includes(asset[0])) {
            setAssets([...assets, asset]);
        }
    };

    return (
        <AssetsContext.Provider value={{ assetsLoaded, registerAsset }}>
            {Object.keys(assets).length &&
                React.createElement(
                    "a-assets",
                    {},
                    assets.map(([id, type, def]) => React.createElement(type, { ...def, id, key: id }))
                )}
            {children}
        </AssetsContext.Provider>
    );
};

export const withAssets =
    (assets: (AssetComponent | ((props: Object) => AssetComponent))[]) =>
    (WrappedComponent) =>
    ({ ...passThroughProps }) => {
        const { assetsLoaded, registerAsset } = React.useContext(AssetsContext);

        const staticAssets = assets.map((asset) => (typeof asset == "function" ? asset(passThroughProps) : asset));

        React.useEffect(() => {
            staticAssets.forEach((asset) => registerAsset(asset));
        }, [assetsLoaded()]);

        if (!assetsLoaded(staticAssets.map((asset) => asset[0]))) return null;

        return <WrappedComponent {...passThroughProps} />;
    };

export default AssetsRegistry;
