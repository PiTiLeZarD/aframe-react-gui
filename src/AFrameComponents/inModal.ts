import { ComponentDefinition } from "aframe";

const inModal: ComponentDefinition = {
    init: function () {
        this.el.object3D.renderOrder = 9999999;
        this.el.object3D.depthTest = false;
    },
};

export default inModal;
