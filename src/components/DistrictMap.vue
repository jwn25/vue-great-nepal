<template>
  <div style="width:100%" :class="wrapperClass || ''">
    <svg viewBox="0 0 1026.077 519.136">
      <g transform="translate(-52.379 -15.971)">
        <path
          :class="itemClass || ''"
          @click="districtSelected(eachDistrict)"
          :ref="`district_${eachDistrict.name}`"
          :style="'cursor:pointer; fill:'+getProvienceColor(eachDistrict)+''"
          v-for="(eachDistrict, index) in districtData"
          :key="index"
          :d="eachDistrict.shape"
          :stroke="strokeColor || '#000'"
          :stroke-width="strokeWidth"
          @mouseover="mapItemHovered(`district_${eachDistrict.name}`, eachDistrict)"
          @mouseout="mapItemRemoved(`district_${eachDistrict.name}`, eachDistrict.pathColor)"
        >
        </path>
      </g>
    </svg>
  </div>
</template>

<script>
import districtMapData from "./../mapdata/district";
import _ from "lodash";
import {
  defaultColor,
  defaultProvinceColor,
  getRandomColor
} from "./../helpers/colors";
export default {
  name: "NepalDistrictMap",
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
    provienceColors: {
      type: Array,
      default: () => []
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
      districtData: []
    };
  },
  mounted() {
    this.districtData = _.cloneDeep(districtMapData);
  },
  methods: {
    getProvienceColor(district) {
      let pathColorList = (this.provienceColors.length) ? this.provienceColors : defaultProvinceColor;
      let pathColor = pathColorList.length > district.province - 1 ? pathColorList[district.province - 1]:defaultProvinceColor[district.province - 1];
      if(this.setRandomColor) pathColor = getRandomColor()
      if(this.color) pathColor = this.color
      district["pathColor"] = pathColor;
      return pathColor;
    },

    districtSelected(district) {
      let district_data = {
        name: district.name,
        name_ne: district.name_ne,
        province: district.province,
        zip: district.zip,
        area: district.area,
        max_elevation: district.max_elevation,
        population: district.population,
        headquarter: district.headquarter,
        headquarter_ne: district.headquarter_ne,
        website: district.website        
      };

      if (this.onMapClick) this.onMapClick(district_data);
    },

    mapItemHovered(reference, district) {
      this.$refs[reference][0].style.fill = this.hoverColor
        ? this.hoverColor
        : defaultColor;

      if(this.onMapHover) {
        let district_data = {
          name: district.name,
          name_ne: district.name_ne,
          province: district.province,
          zip: district.zip,
          area: district.area,
          max_elevation: district.max_elevation,
          population: district.population,
          headquarter: district.headquarter,
          headquarter_ne: district.headquarter_ne,
          website: district.website        
        };

        this.onMapHover(district_data)
      }
    },

    mapItemRemoved(reference, org_color) {
      this.$refs[reference][0].style.fill = org_color;
    }
  }
};
</script>