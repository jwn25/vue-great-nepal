import Vue from "vue";
import DistrictMap from "./components/DistrictMap";
import ZoneMap from "./components/ZoneMap";

const AvailableComponents = [DistrictMap, ZoneMap];

Object.keys(AvailableComponents).forEach((name) => {
  Vue.component(name, AvailableComponents[name]);
});

export default AvailableComponents;
