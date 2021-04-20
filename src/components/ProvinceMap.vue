<template>
  <div style="width:100%" :class="wrapperClass || ''">
    <svg viewBox="0 0 1029.19 522.34">
      <path
        :class="itemClass || ''"
        @click="provinceSelected(eachProvince)"
        :ref="`province_${eachProvince.name}`"
        :style="'cursor:pointer; fill:'+getProvinceColor(eachProvince)+''"
        v-for="(eachProvince, index) in provinceData"
        :key="index"
        :d="eachProvince.shape"
        :stroke="strokeColor || '#000'"
        :stroke-width="strokeWidth"
        @mouseover="mapItemHovered(`province_${eachProvince.name}`, eachProvince)"
        @mouseout="mapItemRemoved(`province_${eachProvince.name}`, eachProvince.pathColor)"
      />
    </svg>
  </div>
</template>

<script>
import provinceData from "./../mapdata/province";
import _ from "lodash";
import {
  defaultColor,
  getRandomColor,
  defaultProvinceColor
} from "./../helpers/colors";
export default {
  name: "NepalProvinceMap",
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
    provinceColors: {
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
      provinceData: []
    };
  },
  mounted() {
    this.provinceData = _.cloneDeep(provinceData);
  },
  methods: {
    getProvinceColor(province) { 
      let pathColorList = (this.provinceColors.length) ? this.provinceColors : defaultProvinceColor;
      let pathColor = pathColorList.length > province.number - 1 ? pathColorList[province.number - 1] : defaultProvinceColor[province.number - 1];
      if(this.setRandomColor) pathColor = getRandomColor()
      if(this.color) pathColor = this.color
      province["pathColor"] = pathColor;
      return pathColor;
    },

    provinceSelected(province) {
      let province_data = {
        name: province.name,
        name_ne: province.name_ne,
        zip: province.zip,
        area: province.area,
        popupation: province.popupation,
        website: province.website,
        capital_city: province.capital_city,
        capital_city_ne: province.capital_city_ne
      };

      if (this.onMapClick) this.onMapClick(province_data);
    },

    mapItemHovered(reference, province) {
      this.$refs[reference][0].style.fill = this.hoverColor
        ? this.hoverColor
        : defaultColor;

      if(this.onMapHover) {
        let province_data = {
          name: province.name,
          name_ne: province.name_ne,
          zip: province.zip,
          area: province.area,
          popupation: province.popupation,
          website: province.website,
          capital_city: province.capital_city,
          capital_city_ne: province.capital_city_ne
        };

        this.onMapHover(province_data)
      }
    },

    mapItemRemoved(reference, org_color) {
      this.$refs[reference][0].style.fill = org_color;
    }
  }
};
</script>