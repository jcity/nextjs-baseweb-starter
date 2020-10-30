export default {
  getCacheKey() {
    return 'cssTransform';
  },
  process() {
    return 'module.exports = {};';
  },
};
