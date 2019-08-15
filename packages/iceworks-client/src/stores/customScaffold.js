export default {
  dataSource: {
    layoutConfig: {
      // 可选，默认使用 BasicLayout
      name: '',

      // 是否开启自定义layout名称
      enableName: false, // 默认为 false， 可选 true || false

      // 是否开启自定义主题
      enableTheme: true, // 默认为 false， 可选 true || false

      // 必须，指定项目目录
      directory: '',

      // 布局方式: fluid-layout/boxed-layout
      layout: 'fluid-layout',

      // 主题配置
      themeConfig: {
        theme: 'dark',
        primaryColor: '#3080FE',
        secondaryColor: '#FFC107',
      },

      // 是否启用 Header
      header: {
        position: 'static',
        width: 'full-width',
        enabled: true,
        styles: {
          background: 'none',
        },
      },

      // 是否启用 Aside
      aside: {
        position: 'embed-fixed',
        mode: 'vertical',
        width: 200,
        collapsed: false,
        enabled: true,
        styles: {
          background: 'none',
        },
      },

      // 是否启用 Footer
      footer: {
        position: 'fixed',
        width: 'full-width',
        enabled: true,
      },

      // Logo
      logo: {
        method: 'upload', // upload/link/text
        width: '70px',
        height: '70px',
        url: '',
      },

      iceConfig: {
        defaultPage: true,
        internalization: false,
        typeScript: false,
        hooks: false,
        register: false,
      },
    },
  },

  async setLayoutConfig(value) {
    this.dataSource.layoutConfig = value;
  },
};
