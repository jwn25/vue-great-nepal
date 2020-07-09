# Vue Great Nepal

> Vue.js component for Greater Nepal Map

[![NPM](https://img.shields.io/npm/v/vue-great-nepal.svg)](https://www.npmjs.com/package/vue-great-nepal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

```bash
npm install --save vue-great-nepal
```

## Live Demo

<!-- [https://keyrunpay.github.io/react-nepal-map](https://keyrunpay.github.io/react-nepal-map) -->

## Usage

```js
<template>
  <div id="app">
    <DistrictMap 
       set-random-color="true"
       :stroke-width="2"
       stroke-color="#000000"
       :on-map-click="mapClicked"
    />
  </div>
</template>

<script>
import DistrictMap from 'vue-great-nepal'

export default {
  name: 'App',
  components: {
    DistrictMap
  },
  methods: {
    mapClicked(data) {
      console.log(data)
    },
  }
}
</script>
```

## Available Props

| Props    |      Accepts  | Default  |  Desc      |
|----------|-------------|------|--------|
| set-random-color |  Boolean | false | Sets random color for every item in the map |
| hover-color |   String (Color name e.g: red or color HEX code)  |  #eee4ed |  Set background color on map hover  |
| stroke-width | Number |  1 | Set line width of map |
| stroke-color | String (Color name e.g: red or color HEX code) |  1 | Set line color of map |
| provience-colors | Array (Array of color codes for 7 provinces) | [] | Custom province color set e.g ['red', 'blue', '#FF00FF'.....] total 7. NOTE: Only applicable for DistrictMap and ProvinceMap|
| wrapper-class | String | null | Custom class for whole map wrapper |
| item-class | String | null | Custom class for each map item i.e. each district on DistrictMap |
    

## Available Events
| Event    |      Desc  |
|----------|-------------|
| on-map-click| trigger on every map item click
| on-map-hover | trigger on every map item hover


Example event for DistrictMap (on district click or hover)

```js
{
  area: 3312,
  headquarter: "Salleri",
  headquarter_ne: "सल्लेरी",
  max_elevation: 8848,
  name: "Solukhumbu",
  name_ne: "सोलुखुम्बु",
  population: 105886,
  province: 1,
  website: "www.ddcsolukhumbu.gov.np",
  zip: 56000
}
```


## About Author

Jeewan Dhakal

jeewandhakal25@gmail.com

### Credit
Thank you [Kiran Neupane](https://github.com/keyrunpay) for this awesome idea. 
Check out his [repository](https://github.com/keyrunpay/react-nepal-map) for react-js component for Nepal map.
 
## License
MIT © [jwn25](https://github.com/jwn25)