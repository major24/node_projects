import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'MN-App',
  srcDir: 'src',
  plugins: [
    sass()
  ]
};

/*exports.config = {
    namespace: 'my-web-components',
    generateDistribution: true,
    generateWWW: false,
    bundles: [{ components: ['hello-world'] }]
};*/
