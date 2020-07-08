module.exports = ({ env }) => ({
  upload: {
    provider: 'azure-storage',
    providerOptions: {
      account: 'infosecreport', //env('STORAGE_ACCOUNT'),
      accountKey: 'iMve8VCcir9xhK6K3kl3ct+wcnB0dS1yeWsbmeeSePiuxoMo330iWFSXGQSLVG3BHxlcs2CiZchzisUbB8LJVA==', //env('STORAGE_ACCOUNT_KEY'),
      serviceBaseURL: '',//env('STORAGE_URL'),
      containerName: 'strapi', //env('STORAGE_CONTAINER_NAME'),
      defaultPath: 'assets',
      maxConcurrent: 10
    }
  }
});