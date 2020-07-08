<template>
  <div id="app">
    <div style="float:left; width:80%">
      <ZoneMap />
      <DistrictMap set-random-color hover-color="orange" stroke-color="black" stroke-width="3" />
      <!-- <DistrictMap  :hover-color="'yellow'" stroke-color="black" stroke-width="0.2"/> -->
    </div>
  </div>
</template>

<script>
import DistrictMap from "./components/DistrictMap.vue";
import ZoneMap from "./components/ZoneMap.vue";

export default {
  name: "App",
  components: {
    DistrictMap,
    ZoneMap
  },
  methods: {
    distSelected(district) {
      console.log(district)
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
