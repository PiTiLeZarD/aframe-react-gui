import { ComponentDefinition } from "aframe";

const mixin = {
    onClick: function (evt) {
        const previouslyClicked = this.el.is("clicked");
        mixin.resetAll(evt.target);

        if (!previouslyClicked) {
            this.el.addState("clicked");
            evt.target.pause();
            evt.target.setAttribute("material", "color", "#046de7");
            evt.target.object3D.scale.set(1.2, 1.2, 1.2);
        }
    },

    onMouseEnter: function (evt) {
        evt.target.setAttribute("material", "color", "#046de7");
    },

    onMouseLeave: function (evt) {
        if (this.el.is("clicked")) {
            return;
        }
        evt.target.setAttribute("material", "color", "white");
    },

    resetAll: function (target) {
        Array.from(target.parentNode.children).forEach((elt: any) => {
            elt.removeState("clicked");
            elt.play();
            elt.emit("mouseleave");
        });
    },
};

const highlight: ComponentDefinition = {
    init: function () {
        this.el.addEventListener("mouseenter", mixin.onMouseEnter.bind(this));
        this.el.addEventListener("mouseleave", mixin.onMouseLeave.bind(this));
        this.el.addEventListener("click", mixin.onClick.bind(this));
    },
};
export default highlight;
