<template>
  <div style="width:100%" :class="wrapperClass || ''">
   <svg viewBox='0 0 799.861 460.414'>
        <g transform='translate(-0.251 6.456)'>
        <path
          :class="itemClass || ''"
          @click="zoneSelected(eachZone)"
          :ref="`zone_${eachZone.name}`"
          :style="'cursor:pointer; fill:'+getZoneColor(eachZone)+''"
          v-for="(eachZone, index) in zoneData"
          :key="index"
          :d="eachZone.shape"
          :stroke="strokeColor || '#000'"
          :transform="eachZone.code === 'MA' ? 'translate(597 306.286)' : ''"
          :stroke-width="strokeWidth"
          @mouseover="mapItemHovered(`zone_${eachZone.name}`, eachZone)"
          @mouseout="mapItemRemoved(`zone_${eachZone.name}`, eachZone.pathColor)"
        />
      </g>
    </svg>
  </div>
</template>

<script>
import zoneData from "./../mapdata/zone";
import _ from "lodash";
import { defaultColor, getRandomColor } from "./../helpers/colors";
export default {
  name: "NepalZonalMap",
  props: {
    onMapClick: Function,
    onMapHover: Function,
    setRandomColor: {
      type: Boolean,
      default: false
    },
    hoverColor: {
      type: String,
      default: null
    },
    strokeColor: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: null
    },
    strokeWidth: {
      type: Number,
      default: 1
    },
    wrapperClass: {
      type: String,
      default: null
    },
    itemClass: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      zoneData: []
    };
  },
  mounted() {
    this.zoneData = _.cloneDeep(zoneData);
  },
  methods: {
    getZoneColor(zone) {
      let pathColor = defaultColor;
      if (this.color) pathColor = this.color;
      if (this.setRandomColor) pathColor = getRandomColor();

      zone["pathColor"] = pathColor;
      return pathColor;
    },

    zoneSelected(zone) {
      let zone_data = {
        name: zone.name,
        name_ne: zone.name_ne,
        code: zone.code,
        population: zone.population,
        area: zone.area,
        capital_city: zone.capital_city,
        capital_city_ne: zone.capital_city_ne
      };

      if (this.onMapClick) this.onMapClick(zone_data);
    },

    mapItemHovered(reference, zone) {
      this.$refs[reference][0].style.fill = this.hoverColor
        ? this.hoverColor
        : defaultColor;

      if(this.onMapHover) {
        let zone_data = {
          name: zone.name,
          name_ne: zone.name_ne,
          code: zone.code,
          population: zone.population,
          area: zone.area,
          capital_city: zone.capital_city,
          capital_city_ne: zone.capital_city_ne
        };

        this.onMapHover(zone_data)
      }
    },

    mapItemRemoved(reference, org_color) {
      this.$refs[reference][0].style.fill = org_color;
    }
  }
};
</script>