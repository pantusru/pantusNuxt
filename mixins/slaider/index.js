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
      this.settings.slidesToShow = 5;
      this.areResponsiveSettingsApplied = true;
    },
  },
};
