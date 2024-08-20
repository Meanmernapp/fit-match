const getConfig = (environment) => {
    switch (environment) {
      case 'production':
        return require('../../config.prod.json');
      case 'development':
        return require('../../config.dev.json');
      case 'staging':
        return require('../../config.staging.json');
      default:
        throw new Error(`Unsupported environment: ${environment}`);
    }
  };
  
  export default getConfig;
  