export default {
  copy: ['node_modules/less/dist/less.min.js'],
  proxy: {
    '/api': {
      target: 'http://localhost:9000',
    },
  },
}
