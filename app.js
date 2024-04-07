const sdk = require('api')('@render-api/v1.0#34i64rhilu8ilhkj');

sdk.auth('rnd_2DdcZPyACrDe1XgqN0WgoK5jpMSX');
sdk.getServices({limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));
