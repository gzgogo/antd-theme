const vars = [
  {
    name: 'prefix',
    children: [
      {
        name: '@ant-prefix',
        type: 'string',
        value: 'ant',
        desc: 'The prefix to use on all css classes from ant'
      },
      {
        name: '@iconfont-css-prefix',
        type: 'string',
        value: 'anticon',
        desc: ''
      }
    ]
  },
  {
    name: 'Colors',
    children: [
      {
        name: '@primary-color',
        type: 'color',
        value: '#1890ff',
        desc: '全局主色'
      },
      {
        name: '@success-color',
        type: 'color',
        value: '#52c41a',
        desc: '成功色'
      },
      {
        name: '@info-color',
        type: 'color',
        value: '#1890ff',
        desc: '成功色'
      },
      {
        name: '@warning-color',
        type: 'color',
        value: '#faad14',
        desc: '警告色'
      },
      {
        name: '@error-color',
        type: 'color',
        value: '#f5222d',
        desc: '错误色'
      },
      {
        name: '@highlight-color',
        type: 'color',
        value: '#f5222d',
        desc: ''
      },
      {
        name: '@processing-color',
        type: 'color',
        value: '#1890ff',
        desc: ''
      },
      {
        name: '@body-background',
        type: 'color',
        value: '#fff',
        desc: 'background color for <body>'
      },
      {
        name: '@component-background',
        type: 'color',
        value: '#fff',
        desc: 'base background color for most components'
      },
      {
        name: '@icon-color',
        type: 'string',
        value: 'inherit',
        desc: ''
      },
      {
        name: '@icon-color-hover',
        type: 'color',
        value: 'rgb(0,0,0,0.75)',
        desc: ''
      },
      {
        name: '@heading-color',
        type: 'color',
        value: 'rgb(0,0,0,0.85)',
        desc: '标题色'
      },
      {
        name: '@text-color',
        type: 'color',
        value: 'rgb(0,0,0,0.65)',
        desc: '主文本色'
      },
      {
        name: '@text-color-secondary',
        type: 'color',
        value: 'rgb(0,0,0,0.45)',
        desc: '次文本色'
      },
      {
        name: '@text-color-inverse',
        type: 'color',
        value: '#fff',
        desc: ''
      },
      {
        name: '@heading-color-dark',
        type: 'color',
        value: 'rgb(0,0,0,1)',
        desc: ''
      },
      {
        name: '@text-color-dark',
        type: 'color',
        value: 'rgb(255,255,255,0.85)',
        desc: ''
      },
      {
        name: '@text-color-secondary-dark',
        type: 'color',
        value: 'rgb(255,255,255,0.65)',
        desc: ''
      },
      {
        name: '@text-selection-bg',
        type: 'color',
        value: '#1890ff',
        desc: ''
      }
    ]
  },
  {
    name: 'Font',
    children: [
      {
        name: '@font-family',
        type: 'string',
        value: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB','Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji','Segoe UI Emoji', 'Segoe UI Symbol'",
        desc: ''
      },
      {
        name: '@code-family',
        type: 'string',
        value: "SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
        desc: ''
      },
      {
        name: '@font-variant-base',
        type: 'string',
        value: 'tabular-nums',
        desc: ''
      },
      {
        name: '@font-feature-settings-base',
        type: 'string',
        value: "'tnum'",
        desc: ''
      },
      {
        name: '@font-size-base',
        type: 'number',
        value: 14,
        unit: 'px',
        desc: ''
      },
      {
        name: '@font-size-sm',
        type: 'number',
        value: 12,
        unit: 'px',
        desc: ''
      },
      {
        name: '@line-height-base',
        type: 'number',
        value: 1.5,
        desc: ''
      }
    ]
  },
  {
    name: '圆角',
    children: [
      {
        name: '@border-radius-base',
        type: 'number',
        value: 4,
        unit: 'px',
        desc: ''
      },
      {
        name: '@border-radius-sm',
        type: 'number',
        value: 2,
        unit: 'px',
        desc: ''
      }
    ]
  },

  {
    name: 'vertical paddings',
    children: [
      {
        name: '@padding-lg',
        type: 'number',
        value: 24,
        unit: 'px',
        desc: 'containers'
      },
      {
        name: '@padding-md',
        type: 'number',
        value: 16,
        unit: 'px',
        desc: 'small containers and buttons'
      },
      {
        name: '@padding-sm',
        type: 'number',
        value: 12,
        unit: 'px',
        desc: 'Form controls and items'
      },
      {
        name: '@padding-xs',
        type: 'number',
        value: 8,
        unit: 'px',
        desc: 'small items'
      }
    ]
  },
  {
    name: 'Link',
    children: [
      {
        name: '@link-color',
        type: 'string',
        value: '@primary-color',
        desc: '链接色'
      },
      {
        name: '@link-decoration',
        type: 'string',
        value: 'none',
        desc: ''
      },
      {
        name: '@link-hover-decoration',
        type: 'string',
        value: 'none',
        desc: ''
      }
    ]
  },
  {
    name: 'Border color',
    children: [
      {
        name: '@border-color-base',
        type: 'color',
        value: '#D8D8D8',
        desc: 'base border outline a component'
      },
      {
        name: '@border-color-split',
        type: 'color',
        value: '#E8E8E8',
        desc: 'split border inside a component'
      },
      {
        name: '@border-color-inverse',
        type: 'string',
        value: '@white',
        desc: ''
      },
      {
        name: '@border-width-base',
        type: 'number',
        value: 1,
        unit: 'px',
        desc: 'width of the border for a component'
      },
      {
        name: '@border-style-base',
        type: 'string',
        value: 'solid',
        desc: 'style of a components border'
      }
    ]
  },
  {
    name: 'Outline',
    children: [
      {
        name: '@outline-blur-size',
        type: 'number',
        value: 0,
        unit: 'px',
        desc: ''
      },
      {
        name: '@outline-width',
        type: 'number',
        value: 2,
        unit: 'px',
        desc: ''
      },
      {
        name: '@outline-color',
        type: 'string',
        value: '@primary-color',
        desc: ''
      },
      {
        name: '@outline-color',
        type: 'string',
        value: '@primary-color',
        desc: ''
      },
      {
        name: '@background-color-light',
        type: 'color',
        value: '#F9F9F9',
        desc: 'background of header and selected item'
      },
      {
        name: '@background-color-base',
        type: 'color',
        value: '#F4F4F4',
        desc: 'Default grey background color'
      }
    ]
  },

  {
    name: 'disabled states',
    children: [
      {
        name: '@disabled-color',
        type: 'color',
        value: 'rgba(0, 0, 0, 0.25)',
        desc: '失效色'
      },
      {
        name: '@disabled-bg',
        type: 'string',
        value: '@background-color-base',
        desc: ''
      },
      {
        name: '@disabled-color-dark',
        type: 'color',
        value: 'rgba(255, 255, 255, 0.35)',
        desc: ''
      }
    ]
  },

  {
    name: 'shadow',
    children: [
      {
        name: '@shadow-color',
        type: 'color',
        value: 'rgba(0, 0, 0, 0.15)',
        desc: '失效色'
      },
      {
        name: '@shadow-color-inverse',
        type: 'string',
        value: '@component-background',
        desc: ''
      },
      {
        name: '@box-shadow-base',
        type: 'string',
        value: '@shadow-1-down',
        desc: ''
      },
      {
        name: '@shadow-1-up',
        type: 'string',
        value: '0 -2px 8px @shadow-color',
        desc: ''
      },
      {
        name: '@shadow-1-down',
        type: 'string',
        value: '0 2px 8px @shadow-color',
        desc: ''
      },
      {
        name: '@shadow-1-left',
        type: 'string',
        value: '-2px 0 8px @shadow-color',
        desc: ''
      },
      {
        name: '@shadow-1-right',
        type: 'string',
        value: '2px 0 8px @shadow-color',
        desc: ''
      },
      {
        name: '@shadow-2',
        type: 'string',
        value: '0 4px 12px @shadow-color',
        desc: ''
      }
    ]
  },
  {
    name: 'button',
    children: [
      {
        name: '@btn-font-weight',
        type: 'number',
        value: 400,
        unit: '',
        desc: ''
      },
      // {
      //   name: '@btn-border-radius-base',
      //   type: 'string',
      //   value: '@border-radius-base',
      //   desc: ''
      // },
      // {
      //   name: '@btn-border-radius-sm',
      //   type: 'string',
      //   value: '@border-radius-base',
      //   desc: ''
      // },
      // {
      //   name: '@btn-border-width',
      //   type: 'string',
      //   value: '@border-width-base',
      //   desc: ''
      // },
      // {
      //   name: '@btn-border-style',
      //   type: 'string',
      //   value: '@border-style-base',
      //   desc: ''
      // },
      {
        name: '@btn-shadow',
        type: 'string',
        value: '0 2px 0 rgba(0, 0, 0, 0.015)',
        desc: ''
      },
      {
        name: '@btn-primary-shadow',
        type: 'string',
        value: '0 2px 0 rgba(0, 0, 0, 0.045)',
        desc: ''
      },
      {
        name: '@btn-text-shadow',
        type: 'string',
        value: '0 -1px 0 rgba(0, 0, 0, 0.12)',
        desc: ''
      },
      {
        name: '@btn-primary-color',
        type: 'color',
        value: '#fff',
        desc: ''
      },
      {
        name: '@btn-primary-bg',
        type: 'string',
        value: '@primary-color',
        desc: ''
      },

      // @btn-default-color: @text-color;
      // @btn-default-bg: @component-background;
      // @btn-default-border: @border-color-base;

      // @btn-danger-color: @error-color;
      // @btn-danger-bg: @background-color-base;
      // @btn-danger-border: @border-color-base;

      // @btn-disable-color: @disabled-color;
      // @btn-disable-bg: @disabled-bg;
      // @btn-disable-border: @border-color-base;

      // @btn-padding-base: 0 @padding-md - 1px;
      // @btn-font-size-lg: @font-size-lg;
      // @btn-font-size-sm: @font-size-base;
      // @btn-padding-lg: @btn-padding-base;
      // @btn-padding-sm: 0 @padding-xs - 1px;

      {
        name: '@btn-height-base',
        type: 'number',
        value: 32,
        unit: '',
        desc: ''
      },
      {
        name: '@btn-height-lg',
        type: 'number',
        value: 40,
        unit: '',
        desc: ''
      },
      {
        name: '@btn-height-sm',
        type: 'number',
        value: 24,
        unit: '',
        desc: ''
      }

      // @btn-circle-size: @btn-height-base;
      // @btn-circle-size-lg: @btn-height-lg;
      // @btn-circle-size-sm: @btn-height-sm;

      // @btn-group-border: @primary-5;
    ]
  },
  {
    name: 'checkbox',
    children: [
      {
        name: '@checkbox-size',
        type: 'number',
        value: 16,
        unit: 'px',
        desc: ''
      },
      {
        name: '@checkbox-color',
        type: 'string',
        value: '@primary-color',
        desc: ''
      },
      {
        name: '@checkbox-check-color',
        type: 'color',
        value: '#fff',
        desc: ''
      },
      {
        name: '@checkbox-border-width',
        type: 'string',
        value: '@border-width-base',
        desc: ''
      }
    ]
  },
  {
    name: 'Dropdown',
    children: [
      {
        name: '@dropdown-selected-color',
        type: 'string',
        value: '@primary-color',
        desc: ''
      },
      {
        name: '@dropdown-vertical-padding',
        type: 'number',
        value: 5,
        unit: 'px',
        desc: ''
      },
      {
        name: '@dropdown-line-height',
        type: 'number',
        value: 22,
        unit: 'px',
        desc: ''
      },
      {
        name: '@dropdown-font-size',
        type: 'string',
        value: '@font-size-base',
        desc: ''
      }
    ]
  },
  {
    name: 'Empty',
    children: [
      {
        name: '@empty-font-size',
        type: 'string',
        value: '@font-size-base',
        desc: ''
      }
    ]
  },
  {
    name: 'Radio',
    children: [
      {
        name: '@radio-size',
        type: 'number',
        value: 16,
        unit: 'px',
        desc: ''
      },
      {
        name: '@radio-dot-color',
        type: 'string',
        value: '@primary-color',
        desc: ''
      }
    ]
  },
  {
    name: 'Radio buttons',
    children: [
      {
        name: '@radio-size',
        type: 'number',
        value: 16,
        unit: 'px',
        desc: ''
      },
      {
        name: '@radio-dot-color',
        type: 'string',
        value: '@primary-color',
        desc: ''
      },
      {
        name: '@radio-button-bg',
        type: 'string',
        value: '@btn-default-bg',
        desc: ''
      },
      {
        name: '@radio-button-checked-bg',
        type: 'string',
        value: '@btn-default-bg',
        desc: ''
      },
      {
        name: '@radio-button-color',
        type: 'string',
        value: '@btn-default-color',
        desc: ''
      },
      {
        name: '@radio-button-hover-color',
        type: 'string',
        value: '@primary-5',
        desc: ''
      },
      {
        name: '@radio-button-active-color',
        type: 'string',
        value: '@primary-7',
        desc: ''
      }
    ]
  },
  {
    name: 'Media queries breakpoints',
    children: [
      {
        name: '@screen-xs',
        type: 'number',
        value: 480,
        unit: 'px',
        desc: 'Extra small screen / phone'
      },
      {
        name: '@screen-xs-min',
        type: 'string',
        value: '@screen-xs',
        desc: ''
      },
      {
        name: '@screen-sm',
        type: 'number',
        value: 576,
        unit: 'px',
        desc: 'Small screen / tablet'
      },
      {
        name: '@screen-sm-min',
        type: 'string',
        value: '@screen-sm',
        desc: ''
      },
      {
        name: '@screen-md',
        type: 'number',
        value: 768,
        unit: 'px',
        desc: 'Medium screen / desktop'
      },
      {
        name: '@screen-md-min',
        type: 'string',
        value: '@screen-md',
        desc: ''
      },
      {
        name: '@screen-lg',
        type: 'number',
        value: 992,
        unit: 'px',
        desc: 'Large screen / wide desktop'
      },
      {
        name: '@screen-lg-min',
        type: 'string',
        value: '@screen-lg',
        desc: ''
      },
      {
        name: '@screen-xl',
        type: 'number',
        value: 992,
        unit: 'px',
        desc: 'Extra large screen / full hd'
      },
      {
        name: '@screen-xl-min',
        type: 'string',
        value: '@screen-xl',
        desc: ''
      },
      {
        name: '@screen-xxl',
        type: 'number',
        value: 992,
        unit: 'px',
        desc: 'Extra extra large screen / large desktop'
      },
      {
        name: '@screen-xxl-min',
        type: 'string',
        value: '@screen-xxl',
        desc: ''
      }

      // provide a maximum
      // @screen-xs-max: (@screen-sm-min - 1px);
      // @screen-sm-max: (@screen-md-min - 1px);
      // @screen-md-max: (@screen-lg-min - 1px);
      // @screen-lg-max: (@screen-xl-min - 1px);
      // @screen-xl-max: (@screen-xxl-min - 1px);
    ]
  },
  {
    name: 'Grid system',
    children: [
      {
        name: '@grid-columns',
        type: 'number',
        value: 24,
        unit: '',
        desc: ''
      },
      {
        name: '@grid-gutter-width',
        type: 'number',
        value: 0,
        unit: '',
        desc: ''
      }
    ]
  },
  {
    name: 'Layout',
    children: [
      {
        name: '@layout-body-background',
        type: 'color',
        value: '#f0f2f5',
        desc: ''
      },
      {
        name: '@layout-header-background',
        type: 'color',
        value: '#001529',
        desc: ''
      },
      {
        name: '@layout-footer-background',
        type: 'string',
        value: '@layout-body-background',
        desc: ''
      },
      {
        name: '@layout-header-height',
        type: 'number',
        value: 64,
        unit: 'px',
        desc: ''
      },
      {
        name: '@layout-header-padding',
        type: 'string',
        value: '0 50px',
        desc: ''
      },
      {
        name: '@layout-footer-padding',
        type: 'string',
        value: '24px 50px',
        desc: ''
      },
      {
        name: '@layout-footer-padding',
        type: 'string',
        value: '@layout-header-background',
        desc: ''
      },
      {
        name: '@layout-trigger-height',
        type: 'number',
        value: 48,
        unit: 'px',
        desc: ''
      },
      {
        name: '@layout-trigger-background',
        type: 'color',
        value: '#002140',
        desc: ''
      },
      {
        name: '@layout-trigger-color',
        type: 'color',
        value: '#fff',
        desc: ''
      },
      {
        name: '@layout-zero-trigger-width',
        type: 'number',
        value: 36,
        unit: 'px',
        desc: ''
      },
      {
        name: '@layout-zero-trigger-height',
        type: 'number',
        value: 42,
        unit: 'px',
        desc: ''
      },
      {
        name: '@layout-sider-background-light',
        type: 'color',
        value: '#fff',
        desc: ''
      },
      {
        name: '@layout-trigger-background-light',
        type: 'color',
        value: '#fff',
        desc: ''
      },
      {
        name: '@layout-trigger-color-light',
        type: 'string',
        value: '@text-color',
        desc: ''
      }
    ]
  },
  {
    name: 'z-index list, order by `z-index`',
    children: [
      {
        name: '@zindex-table-fixed',
        type: 'string',
        value: 'auto',
        desc: ''
      },
      {
        name: '@zindex-affix',
        type: 'number',
        value: 10,
        unit: '',
        desc: ''
      },
      {
        name: '@zindex-back-top',
        type: 'number',
        value: 10,
        unit: '',
        desc: ''
      },
      {
        name: '@zindex-badge',
        type: 'number',
        value: 10,
        unit: '',
        desc: ''
      },
      {
        name: '@zindex-picker-panel',
        type: 'number',
        value: 10,
        unit: '',
        desc: ''
      },
      {
        name: '@zindex-popup-close',
        type: 'number',
        value: 10,
        unit: '',
        desc: ''
      },
      {
        name: '@zindex-modal',
        type: 'number',
        value: 1000,
        unit: '',
        desc: ''
      },
      {
        name: '@zindex-modal-mask',
        type: 'number',
        value: 1000,
        unit: '',
        desc: ''
      },
      {
        name: '@zindex-message',
        type: 'number',
        value: 1000,
        unit: '',
        desc: ''
      },
      {
        name: '@zindex-notification',
        type: 'number',
        value: 1010,
        unit: '',
        desc: ''
      },
      {
        name: '@zindex-popover',
        type: 'number',
        value: 1030,
        unit: '',
        desc: ''
      },
      {
        name: '@zindex-dropdown',
        type: 'number',
        value: 1050,
        unit: '',
        desc: ''
      },
      {
        name: '@zindex-picker',
        type: 'number',
        value: 1050,
        unit: '',
        desc: ''
      },
      {
        name: '@zindex-tooltip',
        type: 'number',
        value: 1060,
        unit: '',
        desc: ''
      }
    ]
  },
  {
    name: 'Animation',
    children: [
      {
        name: '@animation-duration-slow',
        type: 'number',
        value: 0.3,
        unit: 's',
        desc: 'Modal'
      },
      {
        name: '@animation-duration-base',
        type: 'number',
        value: 0.2,
        unit: 's',
        desc: ''
      },
      {
        name: '@animation-duration-fast',
        type: 'number',
        value: 0.1,
        unit: 's',
        desc: 'Tooltip'
      }
    ]
  },
  {
    name: 'CollapsePanel',
    children: [
      {
        name: '@collapse-panel-border-radius',
        type: 'string',
        value: '@border-radius-base',
        desc: ''
      }
    ]
  },
  {
    name: 'Form',
    children: [
      {
        name: '@label-required-color',
        type: 'string',
        value: '@highlight-color',
        desc: ''
      },
      {
        name: '@label-color',
        type: 'string',
        value: '@heading-color',
        desc: ''
      },
      {
        name: '@form-warning-input-bg',
        type: 'string',
        value: '@input-bg',
        desc: ''
      },
      {
        name: '@form-item-margin-bottom',
        type: 'number',
        value: 24,
        unit: 'px',
        desc: ''
      },
      {
        name: '@form-item-trailing-colon',
        type: 'string',
        value: 'true',
        desc: ''
      },
      {
        name: '@form-vertical-label-padding',
        type: 'string',
        value: '0 0 8px',
        desc: ''
      },
      {
        name: '@form-vertical-label-margin',
        type: 'number',
        value: 0,
        unit: '',
        desc: ''
      },
      {
        name: '@form-error-input-bg',
        type: 'string',
        value: '@input-bg',
        desc: ''
      }
    ]
  },
  {
    name: 'Input',
    children: [
      {
        name: '@input-height-base',
        type: 'number',
        value: 32,
        unit: 'px',
        desc: ''
      },
      {
        name: '@input-height-lg',
        type: 'number',
        value: 40,
        unit: 'px',
        desc: ''
      },
      {
        name: '@input-height-sm',
        type: 'number',
        value: 24,
        unit: 'px',
        desc: ''
      },
      // @input-padding-horizontal: @control-padding-horizontal - 1px;
      // @input-padding-horizontal-base: @input-padding-horizontal;
      // @input-padding-horizontal-sm: @control-padding-horizontal-sm - 1px;
      // @input-padding-horizontal-lg: @input-padding-horizontal;
      {
        name: '@input-padding-vertical-base',
        type: 'number',
        value: 4,
        unit: 'px',
        desc: ''
      },
      {
        name: '@input-padding-vertical-sm',
        type: 'number',
        value: 1,
        unit: 'px',
        desc: ''
      },
      {
        name: '@input-padding-vertical-lg',
        type: 'number',
        value: 6,
        unit: 'px',
        desc: ''
      },
      {
        name: '@input-placeholder-color',
        type: 'color',
        value: '#BFBFBF',
        desc: ''
      },
      {
        name: '@input-color',
        type: 'string',
        value: '@text-color',
        desc: ''
      },
      {
        name: '@input-border-color',
        type: 'string',
        value: '@border-color-base',
        desc: ''
      },
      {
        name: '@input-bg',
        type: 'string',
        value: '@component-background',
        desc: ''
      },
      {
        name: '@input-number-handler-active-bg',
        type: 'color',
        value: '#f4f4f4',
        desc: ''
      },
      {
        name: '@input-addon-bg',
        type: 'string',
        value: '@background-color-light',
        desc: ''
      },
      {
        name: '@input-hover-border-color',
        type: 'string',
        value: '@primary-color',
        desc: ''
      },
      {
        name: '@input-disabled-bg',
        type: 'string',
        value: '@disabled-bg',
        desc: ''
      },
      {
        name: '@input-outline-offset',
        type: 'string',
        value: '0 0',
        desc: ''
      }
    ]
  },
  {
    name: 'Select',
    children: [
      {
        name: '@select-border-color',
        type: 'string',
        value: '@border-color-base',
        desc: ''
      },
      {
        name: '@select-item-selected-font-weight',
        type: 'number',
        value: 600,
        unit: 'px',
        desc: ''
      }
    ]
  },
  {
    name: 'Tooltip',
    children: [
      {
        name: '@tooltip-max-width',
        type: 'number',
        value: 250,
        unit: 'px',
        desc: 'Tooltip max width'
      },
      {
        name: '@tooltip-color',
        type: 'color',
        value: '#fff',
        desc: 'Tooltip text color'
      },
      {
        name: '@tooltip-bg',
        type: 'color',
        value: 'rgba(0, 0, 0, 0.75)',
        desc: 'Tooltip background color'
      },
      {
        name: '@tooltip-arrow-width',
        type: 'number',
        value: 5,
        unit: 'px',
        desc: 'Tooltip arrow width'
      },
      {
        name: '@tooltip-distance',
        type: 'string',
        value: '@tooltip-arrow-width - 1px + 4px',
        desc: 'Tooltip distance with trigger'
      },
      {
        name: '@tooltip-arrow-color',
        type: 'string',
        value: '@tooltip-bg',
        desc: 'Tooltip arrow color'
      }
    ]
  },
  {
    name: 'Popover',
    children: [
      {
        name: '@popover-bg',
        type: 'string',
        value: '@component-background',
        desc: 'Popover body background color'
      },
      {
        name: '@popover-color',
        type: 'string',
        value: '@text-color',
        desc: 'Popover text color'
      },
      {
        name: '@popover-min-width',
        type: 'number',
        value: 177,
        unit: 'px',
        desc: 'Popover maximum width'
      },
      {
        name: '@popover-arrow-width',
        type: 'number',
        value: 6,
        unit: 'px',
        desc: 'Popover arrow width'
      },
      {
        name: '@popover-arrow-color',
        type: 'string',
        value: '@popover-bg',
        desc: 'Popover arrow color'
      },
      {
        name: '@popover-arrow-outer-color',
        type: 'string',
        value: '@popover-bg',
        desc: 'Popover outer arrow color'
      },
      {
        name: '@popover-distance',
        type: 'string',
        value: '@popover-arrow-width + 4px',
        desc: 'Popover distance with trigger'
      }
    ]
  },
  {
    name: 'Modal',
    children: [
      {
        name: '@modal-body-padding',
        type: 'number',
        value: 24,
        unit: 'px',
        desc: ''
      },
      {
        name: '@modal-header-bg',
        type: 'string',
        value: '@component-background',
        desc: ''
      },
      {
        name: '@modal-footer-bg',
        type: 'string',
        value: 'transparent',
        desc: ''
      },
      {
        name: '@modal-mask-bg',
        type: 'string',
        value: 'fade(@black, 65%)',
        desc: ''
      }
    ]
  },
  {
    name: 'Progress',
    children: [
      {
        name: '@progress-default-color',
        type: 'string',
        value: '@processing-color',
        desc: ''
      },
      {
        name: '@progress-remaining-color',
        type: 'string',
        value: '@background-color-base',
        desc: ''
      },
      {
        name: '@progress-text-color',
        type: 'string',
        value: '@text-color',
        desc: ''
      }
    ]
  },
  {
    name: 'Menu',
    children: [
      {
        name: '@menu-inline-toplevel-item-height',
        type: 'number',
        value: 40,
        unit: 'px',
        desc: ''
      },
      {
        name: '@menu-item-height',
        type: 'number',
        value: 40,
        unit: 'px',
        desc: ''
      },
      {
        name: '@menu-collapsed-width',
        type: 'number',
        value: 80,
        unit: 'px',
        desc: ''
      },
      {
        name: '@menu-bg',
        type: 'string',
        value: '@component-background',
        desc: ''
      },
      {
        name: '@menu-popup-bg',
        type: 'string',
        value: '@component-background',
        desc: ''
      },
      {
        name: '@menu-item-color',
        type: 'string',
        value: '@text-color',
        desc: ''
      },
      {
        name: '@menu-highlight-color',
        type: 'string',
        value: '@primary-color',
        desc: ''
      },
      {
        name: '@menu-item-active-bg',
        type: 'string',
        value: '@item-active-bg',
        desc: ''
      },
      {
        name: '@menu-item-active-border-width',
        type: 'number',
        value: 3,
        unit: 'px',
        desc: ''
      },
      {
        name: '@menu-item-group-title-color',
        type: 'string',
        value: '@text-color-secondary',
        desc: ''
      },
      {
        name: '@menu-dark-color',
        type: 'string',
        value: '@text-color-secondary-dark',
        desc: ''
      },
      {
        name: '@menu-dark-bg',
        type: 'string',
        value: '@layout-header-background',
        desc: ''
      },
      {
        name: '@menu-dark-arrow-color',
        type: 'color',
        value: '#fff',
        desc: ''
      },
      {
        name: '@menu-dark-submenu-bg',
        type: 'color',
        value: '#000c17',
        desc: ''
      },
      {
        name: '@menu-dark-highlight-color',
        type: 'color',
        value: '#fff',
        desc: ''
      },
      {
        name: '@menu-dark-item-active-bg',
        type: 'string',
        value: '@primary-color',
        desc: ''
      }
    ]
  },
  {
    name: 'Spin',
    children: [
      {
        name: '@spin-dot-size-sm',
        type: 'number',
        value: 14,
        unit: 'px',
        desc: ''
      },
      {
        name: '@spin-dot-size',
        type: 'number',
        value: 20,
        unit: 'px',
        desc: ''
      },
      {
        name: '@spin-dot-size-lg',
        type: 'number',
        value: 32,
        unit: 'px',
        desc: ''
      }
    ]
  },
  {
    name: 'Table',
    children: [
      {
        name: '@table-header-bg',
        type: 'string',
        value: '@background-color-light',
        desc: ''
      },
      {
        name: '@table-header-color',
        type: 'string',
        value: '@heading-color',
        desc: ''
      },
      {
        name: '@table-header-sort-bg',
        type: 'string',
        value: '@background-color-base',
        desc: ''
      },
      {
        name: '@table-body-sort-bg',
        type: 'color',
        value: 'rgba(0, 0, 0, 0.01)',
        desc: ''
      },
      {
        name: '@table-row-hover-bg',
        type: 'string',
        value: '@primary-1',
        desc: ''
      },
      {
        name: '@table-selected-row-color',
        type: 'string',
        value: 'inherit',
        desc: ''
      },
      {
        name: '@table-selected-row-bg',
        type: 'color',
        value: '#fafafa',
        desc: ''
      },
      {
        name: '@table-body-selected-sort-bg',
        type: 'string',
        value: '@table-selected-row-bg',
        desc: ''
      },
      {
        name: '@table-selected-row-hover-bg',
        type: 'string',
        value: '@table-selected-row-bg',
        desc: ''
      },
      {
        name: '@table-expanded-row-bg',
        type: 'color',
        value: '#fbfbfb',
        desc: ''
      },
      {
        name: '@table-padding-vertical',
        type: 'number',
        value: 16,
        unit: 'px',
        desc: ''
      },
      {
        name: '@table-padding-horizontal',
        type: 'number',
        value: 16,
        unit: 'px',
        desc: ''
      },
      {
        name: '@table-border-radius-base',
        type: 'string',
        value: '@border-radius-base',
        desc: ''
      }
    ]
  },
  {
    name: 'Tag',
    children: [
      {
        name: '@tag-default-bg',
        type: 'string',
        value: '@background-color-light',
        desc: ''
      },
      {
        name: '@tag-default-color',
        type: 'string',
        value: '@text-color',
        desc: ''
      },
      {
        name: '@tag-font-size',
        type: 'string',
        value: '@font-size-sm',
        desc: ''
      }
    ]
  },
  {
    name: 'TimePicker',
    children: [
      {
        name: '@time-picker-panel-column-width',
        type: 'number',
        value: 56,
        unit: 'px',
        desc: ''
      },
      {
        name: '@time-picker-panel-width',
        type: 'string',
        value: '@time-picker-panel-column-width * 3',
        desc: ''
      },
      {
        name: '@time-picker-selected-bg',
        type: 'string',
        value: '@background-color-base',
        desc: ''
      }
    ]
  },
  {
    name: 'Carousel',
    children: [
      {
        name: '@carousel-dot-width',
        type: 'number',
        value: 16,
        unit: 'px',
        desc: ''
      },
      {
        name: '@carousel-dot-height',
        type: 'number',
        value: 3,
        unit: 'px',
        desc: ''
      },
      {
        name: '@carousel-dot-active-width',
        type: 'number',
        value: 24,
        unit: 'px',
        desc: ''
      }
    ]
  },
  {
    name: 'Badge',
    children: [
      {
        name: '@badge-height',
        type: 'number',
        value: 20,
        unit: 'px',
        desc: ''
      },
      {
        name: '@badge-dot-size',
        type: 'number',
        value: 6,
        unit: 'px',
        desc: ''
      },
      {
        name: '@badge-font-size',
        type: 'string',
        value: '@font-size-sm',
        desc: ''
      },
      {
        name: '@badge-font-weight',
        type: 'string',
        value: 'normal',
        desc: ''
      },
      {
        name: '@badge-status-size',
        type: 'number',
        value: 6,
        unit: 'px',
        desc: ''
      },
      {
        name: '@badge-text-color',
        type: 'string',
        value: '@component-background',
        desc: ''
      }
    ]
  },
  {
    name: 'Rate',
    children: [
      {
        name: '@rate-star-color',
        type: 'color',
        value: '#fadb14',
        desc: ''
      },
      {
        name: '@rate-star-bg',
        type: 'string',
        value: '@border-color-split',
        desc: ''
      }
    ]
  },
  {
    name: 'Card',
    children: [
      {
        name: '@card-head-color',
        type: 'string',
        value: '@heading-color',
        desc: ''
      },
      {
        name: '@card-head-background',
        type: 'string',
        value: 'transparent',
        desc: ''
      },
      {
        name: '@card-head-padding',
        type: 'number',
        value: 16,
        unit: 'px',
        desc: ''
      },
      {
        name: '@card-inner-head-padding',
        type: 'number',
        value: 12,
        unit: 'px',
        desc: ''
      },
      {
        name: '@card-padding-base',
        type: 'number',
        value: 24,
        unit: 'px',
        desc: ''
      },
      {
        name: '@card-actions-background',
        type: 'string',
        value: '@background-color-light',
        desc: ''
      },
      {
        name: '@card-background',
        type: 'color',
        value: '#cfd8dc',
        desc: ''
      },
      {
        name: '@card-shadow',
        type: 'string',
        value: '0 2px 8px rgba(0, 0, 0, 0.09)',
        desc: ''
      },
      {
        name: '@card-radius',
        type: 'string',
        value: '@border-radius-sm',
        desc: ''
      }
    ]
  },
  {
    name: 'Comment',
    children: [
      {
        name: '@comment-padding-base',
        type: 'string',
        value: '16px 0',
        desc: ''
      },
      {
        name: '@comment-nest-indent',
        type: 'number',
        value: 44,
        unit: 'px',
        desc: ''
      },
      {
        name: '@comment-font-size-base',
        type: 'string',
        value: '@font-size-base',
        desc: ''
      },
      {
        name: '@comment-font-size-sm',
        type: 'string',
        value: '@font-size-sm',
        desc: ''
      },
      {
        name: '@comment-author-name-color',
        type: 'string',
        value: '@text-color-secondary',
        desc: ''
      },
      {
        name: '@comment-author-time-color',
        type: 'color',
        value: '#ccc',
        desc: ''
      },
      {
        name: '@comment-action-color',
        type: 'string',
        value: '@text-color-secondary',
        desc: ''
      },
      {
        name: '@comment-action-hover-color',
        type: 'color',
        value: '#595959',
        desc: ''
      }
    ]
  },
  {
    name: 'Tabs',
    children: [
      {
        name: '@tabs-card-head-background',
        type: 'string',
        value: '@background-color-light',
        desc: ''
      },
      {
        name: '@tabs-card-height',
        type: 'number',
        value: 40,
        unit: 'px',
        desc: ''
      },
      {
        name: '@tabs-card-active-color',
        type: 'string',
        value: '@primary-color',
        desc: ''
      },
      {
        name: '@tabs-title-font-size',
        type: 'string',
        value: '@font-size-base',
        desc: ''
      },
      {
        name: '@tabs-title-font-size-lg',
        type: 'string',
        value: '@font-size-lg',
        desc: ''
      },
      {
        name: '@tabs-title-font-size-sm',
        type: 'string',
        value: '@font-size-base',
        desc: ''
      },
      {
        name: '@tabs-ink-bar-color',
        type: 'string',
        value: '@primary-color',
        desc: ''
      },
      {
        name: '@tabs-bar-margin',
        type: 'string',
        value: '0 0 16px 0',
        desc: ''
      },
      {
        name: '@tabs-horizontal-margin',
        type: 'string',
        value: '0 32px 0 0',
        desc: ''
      },
      {
        name: '@tabs-horizontal-padding',
        type: 'string',
        value: '12px 16px',
        desc: ''
      },
      {
        name: '@tabs-horizontal-padding-lgr',
        type: 'number',
        value: 16,
        unit: 'px',
        desc: ''
      },
      {
        name: '@tabs-horizontal-padding-sm',
        type: 'string',
        value: '8px 16px',
        desc: ''
      },
      {
        name: '@tabs-vertical-padding',
        type: 'string',
        value: '8px 24px',
        desc: ''
      },
      {
        name: '@tabs-vertical-margin',
        type: 'string',
        value: '0 0 16px 0',
        desc: ''
      },
      {
        name: '@tabs-scrolling-size',
        type: 'number',
        value: 32,
        unit: 'px',
        desc: ''
      },
      {
        name: '@tabs-highlight-color',
        type: 'string',
        value: '@primary-color',
        desc: ''
      },
      {
        name: '@tabs-hover-color',
        type: 'string',
        value: '@primary-5',
        desc: ''
      },
      {
        name: '@tabs-active-color',
        type: 'string',
        value: '@primary-7',
        desc: ''
      }
    ]
  },
  {
    name: 'BackTop',
    children: [
      {
        name: '@back-top-color',
        type: 'color',
        value: '#fff',
        desc: ''
      },
      {
        name: '@back-top-bg',
        type: 'string',
        value: '@text-color-secondary',
        desc: ''
      },
      {
        name: '@back-top-hover-bg',
        type: 'string',
        value: '@text-color',
        desc: ''
      }
    ]
  },
  {
    name: 'Avatar',
    children: [
      {
        name: '@avatar-size-base',
        type: 'number',
        value: 32,
        unit: 'px',
        desc: ''
      },
      {
        name: '@avatar-size-lg',
        type: 'number',
        value: 40,
        unit: 'px',
        desc: ''
      },
      {
        name: '@avatar-size-sm',
        type: 'number',
        value: 24,
        unit: 'px',
        desc: ''
      },
      {
        name: '@avatar-font-size-base',
        type: 'number',
        value: 18,
        unit: 'px',
        desc: ''
      },
      {
        name: '@avatar-font-size-lg',
        type: 'number',
        value: 24,
        unit: 'px',
        desc: ''
      },
      {
        name: '@avatar-font-size-sm',
        type: 'number',
        value: 14,
        unit: 'px',
        desc: ''
      },
      {
        name: '@avatar-bg',
        type: 'color',
        value: '#ccc',
        desc: ''
      },
      {
        name: '@avatar-color',
        type: 'color',
        value: '#fff',
        desc: ''
      },
      {
        name: '@avatar-border-radius',
        type: 'string',
        value: '@border-radius-base',
        desc: ''
      }
    ]
  },
  {
    name: 'Switch',
    children: [
      {
        name: '@switch-height',
        type: 'number',
        value: 22,
        unit: 'px',
        desc: ''
      },
      {
        name: '@switch-sm-height',
        type: 'number',
        value: 16,
        unit: 'px',
        desc: ''
      },
      {
        name: '@switch-sm-checked-margin-left',
        type: 'string',
        value: '-(@switch-sm-height - 3px)',
        desc: ''
      },
      {
        name: '@switch-disabled-opacity',
        type: 'number',
        value: 0.4,
        unit: '',
        desc: ''
      },
      {
        name: '@switch-color',
        type: 'string',
        value: '@primary-color',
        desc: ''
      },
      {
        name: '@switch-shadow-color',
        type: 'string',
        value: 'fade(#00230b, 20%)',
        desc: ''
      }
    ]
  },
  {
    name: 'Pagination',
    children: [
      {
        name: '@pagination-item-size',
        type: 'number',
        value: 32,
        unit: 'px',
        desc: ''
      },
      {
        name: '@pagination-item-size-sm',
        type: 'number',
        value: 24,
        unit: 'px',
        desc: ''
      },
      {
        name: '@pagination-font-weight-active',
        type: 'number',
        value: 500,
        unit: '',
        desc: ''
      },
      {
        name: '@switch-shadow-color',
        type: 'string',
        value: 'fade(#00230b, 20%)',
        desc: ''
      },
      {
        name: '@pagination-font-family',
        type: 'string',
        value: 'Arial',
        desc: ''
      },
      {
        name: '@pagination-item-bg-active',
        type: 'string',
        value: '@component-background',
        desc: ''
      }
    ]
  },
  {
    name: 'PageHeader',
    children: [
      {
        name: '@page-header-padding-horizontal',
        type: 'number',
        value: 24,
        unit: 'px',
        desc: ''
      },
      {
        name: '@page-header-padding-vertical',
        type: 'number',
        value: 16,
        unit: 'px',
        desc: ''
      }
    ]
  },
  {
    name: 'Breadcrumb',
    children: [
      {
        name: '@breadcrumb-base-color',
        type: 'string',
        value: '@text-color-secondary',
        desc: ''
      },
      {
        name: '@breadcrumb-last-item-color',
        type: 'string',
        value: '@text-color',
        desc: ''
      },
      {
        name: '@breadcrumb-font-size',
        type: 'string',
        value: '@font-size-base',
        desc: ''
      },
      {
        name: '@breadcrumb-icon-font-size',
        type: 'string',
        value: '@font-size-base',
        desc: ''
      },
      {
        name: '@breadcrumb-link-color',
        type: 'string',
        value: '@text-color-secondary',
        desc: ''
      },
      {
        name: '@breadcrumb-link-color-hover',
        type: 'string',
        value: '@primary-5',
        desc: ''
      },
      {
        name: '@breadcrumb-separator-color',
        type: 'string',
        value: '@text-color-secondary',
        desc: ''
      },
      {
        name: '@breadcrumb-separator-margin',
        type: 'string',
        value: '0 @padding-xs',
        desc: ''
      }
    ]
  },
  {
    name: 'Slider',
    children: [
      {
        name: '@slider-margin',
        type: 'string',
        value: '14px 6px 10px',
        desc: ''
      },
      {
        name: '@slider-rail-background-color',
        type: 'string',
        value: '@background-color-base',
        desc: ''
      },
      {
        name: '@slider-rail-background-color-hover',
        type: 'color',
        value: '#e1e1e1',
        desc: ''
      },
      {
        name: '@slider-track-background-color',
        type: 'string',
        value: '@primary-3',
        desc: ''
      },
      {
        name: '@slider-track-background-color-hover',
        type: 'string',
        value: '@primary-4',
        desc: ''
      },
      {
        name: '@slider-handle-color',
        type: 'string',
        value: '@primary-3',
        desc: ''
      },
      {
        name: '@slider-handle-color-hover',
        type: 'string',
        value: '@primary-4',
        desc: ''
      },
      {
        name: '@slider-handle-color-focus',
        type: 'string',
        value: 'tint(@primary-color, 20%)',
        desc: ''
      },
      {
        name: '@slider-handle-color-focus-shadow',
        type: 'string',
        value: 'fade(@primary-color, 20%)',
        desc: ''
      },
      {
        name: '@slider-handle-color-tooltip-open',
        type: 'string',
        value: '@primary-color',
        desc: ''
      },
      {
        name: '@slider-dot-border-color',
        type: 'string',
        value: '@border-color-split',
        desc: ''
      },
      {
        name: '@slider-dot-border-color-active',
        type: 'string',
        value: 'tint(@primary-color, 50%)',
        desc: ''
      },
      {
        name: '@slider-disabled-color',
        type: 'string',
        value: '@disabled-color',
        desc: ''
      },
      {
        name: '@slider-disabled-background-color',
        type: 'string',
        value: '@component-background',
        desc: ''
      }
    ]
  },
  {
    name: 'Tree',
    children: [
      {
        name: '@tree-title-height',
        type: 'number',
        value: 24,
        unit: 'px',
        desc: ''
      },
      {
        name: '@tree-child-padding',
        type: 'number',
        value: 18,
        unit: 'px',
        desc: ''
      },
      {
        name: '@tree-directory-selected-color',
        type: 'color',
        value: '#fff',
        desc: ''
      },
      {
        name: '@tree-directory-selected-bg',
        type: 'string',
        value: '@primary-color',
        desc: ''
      }
    ]
  },
  {
    name: 'Collapse',
    children: [
      {
        name: '@collapse-header-padding',
        type: 'string',
        value: '12px 16px',
        desc: ''
      },
      {
        name: '@collapse-header-padding-extra',
        type: 'number',
        value: 40,
        unit: 'px',
        desc: ''
      },
      {
        name: '@collapse-header-bg',
        type: 'string',
        value: '@background-color-light',
        desc: ''
      },
      {
        name: '@collapse-content-padding',
        type: 'string',
        value: '@padding-md',
        desc: ''
      },
      {
        name: '@collapse-content-bg',
        type: 'string',
        value: '@component-background',
        desc: ''
      }
    ]
  },
  {
    name: 'Skeleton',
    children: [
      {
        name: '@skeleton-color',
        type: 'color',
        value: '#f2f2f2',
        desc: ''
      }
    ]
  },
  {
    name: 'Transfer',
    children: [
      {
        name: '@transfer-header-height',
        type: 'number',
        value: 40,
        unit: 'px',
        desc: ''
      },
      {
        name: '@transfer-disabled-bg',
        type: 'string',
        value: '@disabled-bg',
        desc: ''
      },
      {
        name: '@transfer-list-height',
        type: 'number',
        value: 200,
        unit: 'px',
        desc: ''
      }
    ]
  },
  {
    name: 'Message',
    children: [
      {
        name: '@message-notice-content-padding',
        type: 'string',
        value: '10px 16px',
        desc: ''
      }
    ]
  },
  {
    name: 'Motion',
    children: [
      {
        name: '@wave-animation-width',
        type: 'number',
        value: 6,
        unit: 'px',
        desc: ''
      }
    ]
  },

  // Alert
  // ---
  // @alert-success-border-color: ~`colorPalette('@{success-color}', 3) `;
  // @alert-success-bg-color: ~`colorPalette('@{success-color}', 1) `;
  // @alert-success-icon-color: @success-color;
  // @alert-info-border-color: ~`colorPalette('@{info-color}', 3) `;
  // @alert-info-bg-color: ~`colorPalette('@{info-color}', 1) `;
  // @alert-info-icon-color: @info-color;
  // @alert-warning-border-color: ~`colorPalette('@{warning-color}', 3) `;
  // @alert-warning-bg-color: ~`colorPalette('@{warning-color}', 1) `;
  // @alert-warning-icon-color: @warning-color;
  // @alert-error-border-color: ~`colorPalette('@{error-color}', 3) `;
  // @alert-error-bg-color: ~`colorPalette('@{error-color}', 1) `;
  // @alert-error-icon-color: @error-color;

  {
    name: 'List',
    children: [
      {
        name: '@list-header-background',
        type: 'string',
        value: 'transparent',
        desc: ''
      },
      {
        name: '@list-footer-background',
        type: 'string',
        value: 'transparent',
        desc: ''
      },
      {
        name: '@list-empty-text-padding',
        type: 'string',
        value: '@padding-md',
        desc: ''
      },
      {
        name: '@list-item-padding',
        type: 'string',
        value: '@padding-sm 0',
        desc: ''
      },
      {
        name: '@list-item-meta-margin-bottom',
        type: 'string',
        value: '@padding-md',
        desc: ''
      },
      {
        name: '@list-item-meta-avatar-margin-right',
        type: 'string',
        value: '@padding-md',
        desc: ''
      },
      {
        name: '@list-item-meta-title-margin-bottom',
        type: 'string',
        value: '@padding-sm',
        desc: ''
      }
    ]
  },
  {
    name: 'Statistic',
    children: [
      {
        name: '@statistic-title-font-size',
        type: 'string',
        value: '@font-size-base',
        desc: ''
      },
      {
        name: '@statistic-content-font-size',
        type: 'number',
        value: 24,
        unit: 'px',
        desc: ''
      },
      {
        name: '@statistic-unit-font-size',
        type: 'number',
        value: 16,
        unit: 'px',
        desc: ''
      },
      {
        name: '@statistic-font-family',
        type: 'string',
        value: "Tahoma, 'Helvetica Neue', @font-family",
        desc: ''
      }
    ]
  },
  {
    name: 'Drawer',
    children: [
      {
        name: '@drawer-header-padding',
        type: 'string',
        value: '16px 24px',
        desc: ''
      },
      {
        name: '@drawer-body-padding',
        type: 'number',
        value: 24,
        unit: 'px',
        desc: ''
      }
    ]
  }
];

export default vars;
