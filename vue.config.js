const config = {
  publicPath: './',
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  parallel: false
}

if (process.env.NODE_ENV === 'production') {
  config.configureWebpack.externals = {
    sortablejs: {
      commonjs: 'sortablejs',
      commonjs2: 'sortablejs',
      amd: 'sortablejs',
      root: 'Sortable'
    }
  }
}

module.exports = config
