import { ComponentDefinition, registerComponent } from "aframe";

const initComponents = (components: { [name: string]: ComponentDefinition }) => {
    Object.keys(components).forEach((component) => registerComponent(component, components[component]));
};

export default initComponents;
