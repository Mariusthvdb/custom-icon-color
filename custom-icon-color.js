const Name = "Custom-icon-color";
const Version = "202340101";
const Description = "add icon_color to UI";
const Url = "https://github.com/Mariusthvdb/custom-icon-color";
console.info(
  `%c  ${Name}  \n%c  Version ${Version} ${Description}`,
  "color: gold; font-weight: bold; background: black",
  "color: white; font-weight: bold; background: steelblue"
);
window.customUI = {
  installStateBadge() {
    customElements.whenDefined("state-badge").then(() => {
      const stateBadge = customElements.get("state-badge");
      if (!stateBadge) return;
      if (stateBadge.prototype?.updated) {
        const originalUpdated = stateBadge.prototype.updated;
        stateBadge.prototype.updated = function customUpdated(changedProps) {
          if (!changedProps.has("stateObj")) return;
          const { stateObj } = this;
          if (
            stateObj.attributes.icon_color &&
            !stateObj.attributes.entity_picture
          ) {
            this.style.backgroundImage = "";
            this._showIcon = true;
            this._iconStyle = {
              color: stateObj.attributes.icon_color
            };
          }
          originalUpdated.call(this, changedProps);
        };
      }
    });
  },
  init() {
    window.customUI.initDone = true;
    window.customUI.installStateBadge();
    window.CUSTOM_UI_LIST = window.CUSTOM_UI_LIST || [];
    window.CUSTOM_UI_LIST.push({
      name: Name,
      version: `${Version} ${Description}`,
      url: Url
    });
  },

};
window.customUI.init();
