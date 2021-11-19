module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/policies',
        '/policies/fees',
        '/policies/privacy',
        '/policies/unbundled-services'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
