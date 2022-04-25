import { ComponentDefinition } from "aframe";

const mixins = {
    onMenuButtonClick: function (evt) {
        this.backgroundEl.object3D.scale.set(1, 1, 1);
        this.el.object3D.scale.set(1, 1, 1);
        if (AFRAME.utils.device.isMobile()) {
            this.el.object3D.scale.set(1.4, 1.4, 1.4);
        }
        this.fadeBackgroundEl.object3D.visible = true;
    },

    onBackgroundClick: function (evt) {
        this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
        this.el.object3D.scale.set(0.001, 0.001, 0.001);
        this.el.object3D.visible = false;
        this.fadeBackgroundEl.object3D.visible = false;
    },
};

const infoPanel: ComponentDefinition = {
    init: function () {
        var buttonEls = document.querySelectorAll(".menu-button");
        for (var i = 0; i < buttonEls.length; ++i) {
            buttonEls[i].addEventListener("click", mixins.onMenuButtonClick.bind(this));
        }

        this.backgroundEl = document.querySelector("#background");
        this.backgroundEl.addEventListener("click", mixins.onBackgroundClick.bind(this));
        this.el.object3D.renderOrder = 9999999;
        this.el.object3D.depthTest = false;

        var fadeBackgroundEl = (this.fadeBackgroundEl = document.querySelector("#fadeBackground"));
        fadeBackgroundEl.object3D.renderOrder = 9;
        // fadeBackgroundEl.getObject3D("mesh").material.depthTest = false;
    },
};
export default infoPanel;
