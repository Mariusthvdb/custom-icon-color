const Name = "Custom-icon-color";
const Version = "20240110";
const Description = "add icon_color";
const Url = "https://github.com/Mariusthvdb/custom-icon-color";
console.info(
  `%c  ${Name}  \n%c  Version ${Version} ${Description}`,
  "color: gold; font-weight: bold; background: black",
  "color: white; font-weight: bold; background: steelblue"
);
window.customUI = {

// Install a hook to update the entity card with custom styling
  installEntityCardStylingHook() {
    customElements.whenDefined("hui-entity-card").then(() => {
      const entityCard = customElements.get("hui-entity-card");
      if (!entityCard) return;
      if (entityCard.prototype?.updated) {
        const originalUpdated = entityCard.prototype.updated;
        entityCard.prototype.updated = function customUpdated(changedProps) {
          if (
            !changedProps.has('_config') ||
            !changedProps.has('hass')
          ) {
            return;
          }
          const { _config, hass } = this;
          const entityId = _config?.entity;
          const states = hass?.states;
          const iconColor = states?.[entityId]?.attributes?.icon_color;
          if (iconColor) {
            this.style?.setProperty('--paper-item-icon-color', iconColor);
          }
          originalUpdated.call(this, changedProps);
        }
      }
    });
  },

// Install a hook to update the button card with custom styling
  installButtonCardStylingHook() {
    customElements.whenDefined("hui-button-card").then(() => {
        const buttonCard = customElements.get("hui-button-card");
        if (!buttonCard) return;
        if (buttonCard.prototype?.updated) {
            const originalUpdated = buttonCard.prototype.updated;
            buttonCard.prototype.updated = function customUpdated(changedProps) {
                if (!changedProps.has('_stateObj')) {
                    return;
                }
                const { _stateObj } = this;
                if (_stateObj.attributes?.icon_color) {
                    this.style?.setProperty('--icon-primary-color', _stateObj.attributes.icon_color);
                }
                originalUpdated.call(this, changedProps);
            }
        }
    });
  },

// Install a hook to update the Tile card with custom styling
  installTileCardStylingHook() {
    customElements.whenDefined("hui-tile-card").then(() => {
        const tileCard = customElements.get("hui-tile-card");
        if (!tileCard) return;
        if (tileCard.prototype?.updated) {
            const originalUpdated = tileCard.prototype.updated;
            tileCard.prototype.updated = function customUpdated(changedProps) {

                if (
                    !changedProps.has('_config') ||
                    !changedProps.has('hass')
                ) {
                    return;
                }
                const { _config, hass } = this;
                const entityId = _config?.entity;
                const states = hass?.states;
                const iconColor = states?.[entityId]?.attributes?.icon_color;

                if (iconColor) {
                    this.style?.setProperty('--icon-primary-color', iconColor);
                }
                originalUpdated.call(this, changedProps);
            }
        }
    });
  },

// Install a hook to update the state badge with custom styling
  installStateBadgeStylingHook() {
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

// Install the hooks for updating states, entity cards, and state badges
  installCustomHooks() {
    window.customUI.installEntityCardStylingHook();
    window.customUI.installButtonCardStylingHook();
    window.customUI.installTileCardStylingHook();
    window.customUI.installStateBadgeStylingHook();
  },

  init() {
    window.customUI.initDone = true;
    window.customUI.installCustomHooks();
    window.CUSTOM_UI_LIST = window.CUSTOM_UI_LIST || [];
    window.CUSTOM_UI_LIST.push({
      name: Name,
      version: `${Version} ${Description}`,
      url: Url
    });
  },

};
window.customUI.init();
