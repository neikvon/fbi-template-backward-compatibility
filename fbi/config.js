module.exports = {
  alias: {
    b: 'build',
    c: 'clean'
  },
  server: {
    root: 'dst'
  },
  webpack: {
    entryId: '.main',
    hash: true
  },
  autoprefixer: {
    browsers: [
      'last 2 versions',
      '> 5%',
      'safari >= 5',
      'ie >= 8',
      'opera >= 12',
      'Firefox ESR',
      'iOS >= 6',
      'android >= 4'
    ]
  }
}