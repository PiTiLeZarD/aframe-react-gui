import { ComponentDefinition } from "aframe";

const mixin = {
    onClick: function (evt) {
        evt.target.pause();
        evt.target.setAttribute("material", "color", "#046de7");
        this.el.addState("clicked");
        evt.target.object3D.scale.set(1.2, 1.2, 1.2);
    },

    onMouseEnter: function (evt) {
        var buttonEls = this.buttonEls;
        evt.target.setAttribute("material", "color", "#046de7");
        for (var i = 0; i < buttonEls.length; ++i) {
            if (evt.target === buttonEls[i]) {
                continue;
            }
            buttonEls[i].setAttribute("material", "color", "white");
        }
    },

    onMouseLeave: function (evt) {
        if (this.el.is("clicked")) {
            return;
        }
        evt.target.setAttribute("material", "color", "white");
    },

    reset: function () {
        var buttonEls = this.buttonEls;
        for (var i = 0; i < buttonEls.length; ++i) {
            this.el.removeState("clicked");
            buttonEls[i].play();
            buttonEls[i].emit("mouseleave");
        }
    },
};

const highlight: ComponentDefinition = {
    init: function () {
        var buttonEls = (this.buttonEls = this.el.querySelectorAll(".menu-button"));
        var backgroundEl = document.querySelector("#background");
        mixin.onClick = mixin.onClick.bind(this);
        mixin.onMouseEnter = mixin.onMouseEnter.bind(this);
        mixin.onMouseLeave = mixin.onMouseLeave.bind(this);
        mixin.reset = mixin.reset.bind(this);
        backgroundEl.addEventListener("click", mixin.reset);
        for (var i = 0; i < buttonEls.length; ++i) {
            buttonEls[i].addEventListener("mouseenter", mixin.onMouseEnter);
            buttonEls[i].addEventListener("mouseleave", mixin.onMouseLeave);
            buttonEls[i].addEventListener("click", mixin.onClick);
        }
    },
};
export default highlight;
