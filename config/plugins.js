module.exports = ({ env }) => ({
  upload: {
    provider: 'azure-storage',
    providerOptions: {
      account: 'infosecreport', //env('STORAGE_ACCOUNT'),
      accountKey: '', //env('STORAGE_ACCOUNT_KEY'),
      serviceBaseURL: '',//env('STORAGE_URL'),
      containerName: 'strapi', //env('STORAGE_CONTAINER_NAME'),
      defaultPath: 'assets',
      maxConcurrent: 10
    }
  }
});