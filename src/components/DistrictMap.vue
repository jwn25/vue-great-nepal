<template>
  <div>
    <svg viewBox="0 0 1026.077 519.136">
      <g transform="translate(-52.379 -15.971)">
        <path
          @click="districtSelected(eachDistrict)"
          :ref="`district_${eachDistrict.name}`"
          :style="'cursor:pointer; fill:'+getProvienceColor(eachDistrict)+''"
          v-for="(eachDistrict, index) in districtData"
          :key="index"
          :d="eachDistrict.shape"
          :stroke="strokeColor || '#000'"
          :stroke-width="strokeWidth"
          @mouseover="mapItemHovered(`district_${eachDistrict.name}`)"
          @mouseout="mapItemRemoved(`district_${eachDistrict.name}`, eachDistrict.pathColor)"
        />
      </g>
    </svg>
  </div>
</template>

<script>
import districtMapData from "./../mapdata/district";
import _ from "lodash";
import {
  defaultColor,
  getRandomColor,
  defaultProvinceColor
} from "./../helpers/colors";
export default {
  name: "Nepal District Map",
  props: {
    onDistrictSelect: Function,
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
    strokeWidth: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      districtData: []
    };
  },
  mounted() {
    this.districtData = _.cloneDeep(districtMapData);
  },
  methods: {
    getProvienceColor(district) {
      let pathColor = "";
      if (this.setRandomColor) {
        pathColor = getRandomColor();
      } else {
        let pathColorList = defaultProvinceColor;
        pathColor =
          pathColorList.length > district.province - 1
            ? pathColorList[district.province - 1]
            : defaultProvinceColor[district.province - 1];
      }
      district["pathColor"] = pathColor;
      return pathColor;
    },

    districtSelected(district) {
      let district_data = {
        name: district.name,
        province: district.province,
        zip: district.zip
      };

      if (this.onDistrictSelect) this.onDistrictSelect(district_data);
    },

    mapItemHovered(reference) {
      this.$refs[reference][0].style.fill = this.hoverColor
        ? this.hoverColor
        : defaultColor;
    },

    mapItemRemoved(reference, org_color) {
      this.$refs[reference][0].style.fill = org_color;
    }
  }
};
</script>