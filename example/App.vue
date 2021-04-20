<template>
  <div>
    <button @click="togglehover">Toggle Hover Color</button>
    <div style="float:left; width:80%">
      <DistrictMap
        :on-map-click="mapClicked"
        wrapper-class="test-wrapper"
        item-class="each--district"
        :on-map-hover="mapHovered"
      />
    </div>
    <!-- <div style="float:left; width:50%">
      <ZoneMap
        stroke-color="black"
        :hover-color="color"
        :on-map-click="mapClicked"
        wrapper-class="test-wrapper"
        item-class="each--district"
        :on-map-hover="mapHovered"
      />
    </div>
    <div style="float:left; width:50%">
      <ProvinceMap
        :provience-colors="['gray', 'blue', 'red', 'black', 'pink', 'green']"
        stroke-color="red"
        :stroke-width="4"
        :hover-color="color"
        :on-map-click="mapClicked"
        wrapper-class="test-wrapper"
        item-class="each--district"
        :on-map-hover="mapHovered"
      />
    </div> -->
  </div>
</template>

<script>
import { DistrictMap } from './../dist/vue-great-nepal.esm'
export default {
  data() {
    return {
      color: "red"
    };
  },
  components: {
    DistrictMap,
    // ZoneMap,
    // ProvinceMap
  },
  methods: {
    mapClicked(item) {
      alert(JSON.stringify(item));
    },

    mapHovered(item) {
      console.log(item);
    },
    togglehover() {
      this.color =
        "#" +
        Math.random()
          .toString(16)
          .slice(-6);
    }
  }
};
</script>

<style scoped>
.test-wrapper {
  /* width: 40% !important; */
}
</style>