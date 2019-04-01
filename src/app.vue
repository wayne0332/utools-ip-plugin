<template>
  <div id="app">
    <span
        style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);font-weight: bold;">{{content}}</span>
  </div>
</template>

<script>

  export default {
    name: "app",
    data() {
      return {
        content: "",
      };
    },
    created: function () {
    },
    mounted: function () {
      var self = this;
      self.content = window.ip();
      utools.onPluginEnter(({ code, type, payload }) => {
        utools.setExpendHeight(48);
        utools.setSubInput(({ text }) => {
        }, self.content);
      });

      utools.onPluginOut(() => {
        if (self.process) {
          self.process.kill();
          self.content = "";
        }
      });
    },
    methods: {
    }
  };
</script>
