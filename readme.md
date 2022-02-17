# bike-math

Simple bike related math helpers

## Installation



```bash
yarn add @drewsoon/bike-math
```

## Usage

```javascript
const bikeMath = require('@drewsoon/bike-math')

bikeMath.calcGearRatioBySpeedRpmWheelCircumference(8,85,2150)     // params: speed: 8 m/s, rpm: 85, wheel circumference: 2150                           OUTPUT: 2.62 // GEAR RATIO
bikeMath.calcNmByWattAndRpm(250,90)                               // params: watt: 250, rpm: 90                                                         OUTPUT 26.53 // NEWTONMETER
bikeMath.calcWattByRpmAndNm(90,26)                                // params: rpm: 90, newtonmetro: 26                                                   OUTPUT : 245 // WATT
bikeMath.msToKmh(8)                                               // params: speed in m/s: 8                                                            OUTPUT 28.8 // SPEED IN KM/H 
bikeMath.kmhToMs(30)                                              // params: speed in km/h: 30                                                          OUTPUT 8.33 // SPEED IN M/S
bikeMath.calcSpeedByRpmSprocketsWheelCircumference(85,53,14,2150) // params rpm: 85 front sprocket: 53, rear sprocket: 14, wheel circumference: 2150    OUTPUT 11.53 SPEED IN M/S 


```

## License
[MIT](https://choosealicense.com/licenses/mit/)