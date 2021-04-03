// const path= require('path')

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/styles/abstracts/_colors.scss";`,
      },
    },
  },
};
