import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

//Guideline sizes are based on standard ~11" screen mobile device
const guidelineBaseWidth = 720;
const guidelineBaseHeight = 1280;

const scale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
 size + (scale(size) - size) * factor;
export {scale, verticalScale, moderateScale};