export default {
  data() {
    return {
      areResponsiveSettingsApplied: false,
    };
  },
  methods: {
    initHandler() {
      if (this.areResponsiveSettingsApplied === false) {
        this.applyResponsiveSettings();
      }
    },
    applyResponsiveSettings() {
      this.settings.responsive = this.responsiveSettings;
      this.areResponsiveSettingsApplied = true;
    },
  },
};
