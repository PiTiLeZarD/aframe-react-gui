import { ComponentDefinition } from "aframe";

const mixin = {
    onClick: function (evt) {
        const previouslyClicked = this.el.is("clicked");
        mixin.resetAll(evt.target);

        if (!previouslyClicked) {
            mixin.select(evt.target);
        }
    },

    select: (target) => {
        target.addState("clicked");
        target.pause();
        target.setAttribute("material", "color", "#046de7");
        target.object3D.scale.set(1.2, 1.2, 1.2);
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

    resetAll: (target) => {
        Array.from(target.parentNode.children).forEach((elt: any) => {
            mixin.reset(elt);
        });
    },

    reset: (target) => {
        target.removeState("clicked");
        target.play();
        target.emit("mouseleave");
        target.setAttribute("material", "color", "white");
    },
};

const highlight: ComponentDefinition = {
    init: function () {
        this.el.addEventListener("mouseenter", mixin.onMouseEnter.bind(this));
        this.el.addEventListener("mouseleave", mixin.onMouseLeave.bind(this));
        this.el.addEventListener("click", mixin.onClick.bind(this));
        if (Array.from(this.el.classList).includes("selected")) {
            mixin.select(this.el);
        } else {
            mixin.reset(this.el);
        }
    },
};
export default highlight;
