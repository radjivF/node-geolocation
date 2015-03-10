Node-geolocation
====================

[![NPM](https://nodei.co/npm/node-geolocation.png?downloads=true&downloadRank=true)](https://nodei.co/npm/node-geolocation/)
[![NPM](https://nodei.co/npm-dl/node-geolocation.png?months=3&height=3)](https://nodei.co/npm/node-geolocation/)

[![GitHub version](https://badge.fury.io/gh/radjivC%2Fnode-geolocation.svg)](http://badge.fury.io/gh/radjivC%2Fnode-geolocation)[![Build Status](https://travis-ci.org/radjivC/node-geolocation.svg?branch=master)](https://travis-ci.org/radjivC/node-geolocation) [![Dependencies Status](https://david-dm.org/radjivC/node-geolocation.svg)]  (https://david-dm.org/radjivC/node-geolocation)
[![Code Climate](https://codeclimate.com/github/radjivC/node-geolocation/badges/gpa.svg)](https://codeclimate.com/github/radjivC/node-geolocation) [![Test Coverage](https://codeclimate.com/github/radjivC/node-geolocation/badges/coverage.svg)](https://codeclimate.com/github/radjivC/node-geolocation)

How to use google maps knowledge with node.js 
https://www.npmjs.com/package/node-geolocation

## Installation

```
npm install node-geolocation
```
## Usage example

### Minimun to use 
```
var geolocation = require('node-geolocation');
```

### Distance function

```
var distance = geolocation.distanceBetweenTwoCoord('-1,-2','3,4');
//get distance between two coord
```
```
var coord =  geolocation.adressToCoord('Paris, France');
//get latitude and longitude 
```
```
var distance = geolocation.distanceBetweenTwoAdress('Paris, France','New-York city');
//get distance between two adress 

```

## Licence

MIT License. See LICENSE for details.

Enjoy !!!
