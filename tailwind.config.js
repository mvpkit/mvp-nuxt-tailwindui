/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    screens: {
      'sm': '750px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1561px'
    }
  },
  plugins: [
    require('@tailwindcss/ui')
  ],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  }
  
}
