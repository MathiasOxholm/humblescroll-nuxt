import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  externals: [
    'defu',
  ],
  failOnWarn: false
})