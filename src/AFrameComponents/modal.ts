import { ComponentDefinition } from "aframe";

const modal: ComponentDefinition = {
    dependencies: ["material"],
    init: function () {
        this.el.sceneEl.renderer.sortObjects = true;
        this.el.object3D.renderOrder = 9;
        this.el.components.material.material.depthTest = false;
    },
};

export default modal;
