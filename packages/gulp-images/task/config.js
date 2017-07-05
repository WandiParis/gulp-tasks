const config = {
  src: "assets/img/**/*.{jpg,png,gif,svg}",
  dest: "web/img",
  jpg: {
    quality: 95
  },
  png: {},
  gif: {
    optimizationLevel: 2
  },
  svg: {
    plugins: [{ removeViewBox: true }]
  }
};

module.exports = config;
