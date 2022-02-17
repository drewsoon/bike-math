/**
 * Calculate nm by watt and rpm values.
 * @param {number} watt The watt value.
 * @param {number} rpm The rpm value.
 * @return {number} The resulting nm.
 */
const calcNmByWattAndRpm = (watt, rpm) => {

    if (rpm <= 0) { return 0; }
    return ((watt * 60) / (2 * Math.PI * rpm)).toFixed(2);
  };

/**
 * Calculate watt by nm and rpm value.
 * @param {number} newton The nm value.
 * @param {number} rpm The rpm value.
 * @return {number} The resulting watts.
 */
const calcWattByRpmAndNm = (rpm, newton) => {
    if (newton <= 0 || rpm <= 0) { return 0; }

    return Math.round((2 * Math.PI * rpm * newton) / 60);
};


/**
 * Convert m/s in Km/h.
 * @param {number} speedMs The speed value in m/s.
 * @return {number} Speed value in Km/h.
 */
const msToKmh = (speedMs) => (speedMs * 3600) / 1000;

/**
 * Convert Km/h in m/s.
 * @param {number} speedMs The speed value in Km/h.
 * @return {number} Speed value in m/s.
 */
const kmhToMs = (speedKmh) => (speedKmh * 1000) / 3600;



/**
 * Calculate watt by nm and rpm value.
 * @param {number} rpm The rpm value.
 * @param {number} front The front sprocket value.
 * @param {number} rear The rear sprocket value.
 * @param {number} circumference The wheel circumference value in mm.
 * @return {number} Speed value in m/s.
 */
const calcSpeedByRpmSprocketsWheelCircumference = ( rpm, front, rear, circumference) => {
    return (rpm / 60) * (((front / rear) * circumference) / 1000)
};


/**
 * Calculate Gear Ratio by speed,rpm and wheel circumference.
 * @param {number} speed The speed value in m/s.
 * @param {number} rpm The rpm value.
 * @param {number} circumference The wheel circumference value in mm.
 * @return {number} Speed value in m/s.
 */
const calcGearRatioBySpeedRpmWheelCircumference = (
    speed, // m/s
    rpm,
    circumference, // mm
  ) => { return speed / ((rpm / 60) * (circumference / 1000)) };


module.exports = {
    calcNmByWattAndRpm,
    calcWattByRpmAndNm,
    msToKmh,
    kmhToMs,
    calcSpeedByRpmSprocketsWheelCircumference,
    calcGearRatioBySpeedRpmWheelCircumference
}