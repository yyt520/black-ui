// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/mel/Desktop/project/black-ui/node_modules/@umijs/preset-built-in/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/_demos/type",
    "component": require('../../components/alert/demos/type.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/description",
    "component": require('../../components/alert/demos/description.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/closable",
    "component": require('../../components/alert/demos/closable.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/base",
    "component": require('../../components/auto-complete/demos/base.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/render-option",
    "component": require('../../components/auto-complete/demos/renderOption.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/ajax-search",
    "component": require('../../components/auto-complete/demos/ajaxSearch.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/type-1",
    "component": require('../../components/button/demos/type.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/size",
    "component": require('../../components/button/demos/size.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/disabled",
    "component": require('../../components/button/demos/disabled.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/block",
    "component": require('../../components/button/demos/block.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/base-1",
    "component": require('../../components/input/demos/base.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/size-1",
    "component": require('../../components/input/demos/size.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/disabled-1",
    "component": require('../../components/input/demos/disabled.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/prefix-suffix",
    "component": require('../../components/input/demos/prefix-suffix.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/icon",
    "component": require('../../components/input/demos/icon.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/horizontal",
    "component": require('../../components/menu/demos/horizontal.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/inline",
    "component": require('../../components/menu/demos/inline.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/default-open-keys",
    "component": require('../../components/menu/demos/defaultOpenKeys.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/mode",
    "component": require('../../components/menu/demos/mode.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/base-2",
    "component": require('../../components/select/demos/base.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/multiple",
    "component": require('../../components/select/demos/multiple.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/disabled-2",
    "component": require('../../components/select/demos/disabled.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/base-3",
    "component": require('../../components/tabs/demos/base.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/disabled-3",
    "component": require('../../components/tabs/demos/disabled.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/type-2",
    "component": require('../../components/tabs/demos/type.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/base-4",
    "component": require('../../components/tag/demos/base.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/color",
    "component": require('../../components/tag/demos/color.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/size-2",
    "component": require('../../components/tag/demos/size.tsx').default,
    "exact": true
  },
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('../../node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"Black UI - 基于 React 和 TypeScript 实现的 UI 组件库","meta":{}}],"/guide":[{"path":"/guide","title":"关于 Black UI","meta":{}},{"path":"/guide/contribute","title":"贡献指南","meta":{}}],"/components":[{"title":"Alert 警告提示","path":"/components/alert","meta":{},"children":[]},{"title":"AutoComplete 自动完成","path":"/components/auto-complete","meta":{},"children":[]},{"title":"Button 按钮","path":"/components/button","meta":{},"children":[]},{"title":"Input 输入框","path":"/components/input","meta":{},"children":[]},{"title":"Menu 导航菜单","path":"/components/menu","meta":{},"children":[]},{"title":"Select 选择器","path":"/components/select","meta":{},"children":[]},{"title":"Tabs 标签页","path":"/components/tabs","meta":{},"children":[]},{"title":"Tag 标签","path":"/components/tag","meta":{},"children":[]}]}},"locales":[],"navs":{"*":[{"title":"开发指南","path":"/guide"},{"title":"组件","path":"/components"},{"title":"Github","path":"https://github.com/yyt520/black-ui"}]},"title":"Black UI","logo":"https://img.icons8.com/ultraviolet/2x/year-of-monkey.png","mode":"site","repoUrl":"https://github.com/yyt520/black-ui"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": require('../../docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1679885959101,
          "title": "Black UI - 基于 React 和 TypeScript 实现的 UI 组件库",
          "hero": {
            "title": "Black UI",
            "desc": "<div class=\"markdown\"><p>🏆 个人开源项目，使用 React + TypeScript 打造自己的 UI 组件库</p></div>",
            "actions": [
              {
                "text": "开始使用",
                "link": "/guide"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "开箱即用",
              "desc": "<div class=\"markdown\"><p>使用方式简单，项目长期维护，并在开发中不断探索最佳实践</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "React 进阶必备",
              "desc": "<div class=\"markdown\"><p>使用 React Hook 打造自己的组件库，React 进阶学习的必经之路</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/os/q/cms/images/k9zij2bh/67f75d56-0d62-47d6-a8a5-dbd0cb79a401_w96_h96.png",
              "title": "TypeScript",
              "desc": "<div class=\"markdown\"><p>代码全部使用 TypeScript 开发，提供完整的组件和 API 类型定义</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Black UI MIT Licensed | Copyright © 2020<br />Powered by <a href=\"https://d.umijs.org\" target=\"_blank\" rel=\"noopener noreferrer\">dumi<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a></p></div>",
          "slugs": []
        },
        "title": "Black UI - 基于 React 和 TypeScript 实现的 UI 组件库"
      },
      {
        "path": "/guide/contribute",
        "component": require('../../docs/guide/contribute.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/contribute.md",
          "updatedTime": 1679885959055,
          "title": "贡献指南",
          "nav": {
            "title": "开发指南",
            "path": "/guide"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "参与贡献",
              "heading": "参与贡献"
            },
            {
              "depth": 2,
              "value": "分支管理",
              "heading": "分支管理"
            },
            {
              "depth": 2,
              "value": "第一次贡献",
              "heading": "第一次贡献"
            },
            {
              "depth": 2,
              "value": "Pull Request",
              "heading": "pull-request"
            },
            {
              "depth": 3,
              "value": "🤔 这个变动的性质是？",
              "heading": "-这个变动的性质是？"
            },
            {
              "depth": 3,
              "value": "任何 PR 请基于 development 分支来做，code review 通过后会合并。",
              "heading": "任何-pr-请基于-development-分支来做，code-review-通过后会合并。"
            },
            {
              "depth": 3,
              "value": "PR 标题与 commit 信息开头请遵循如下规范：",
              "heading": "pr-标题与-commit-信息开头请遵循如下规范："
            },
            {
              "depth": 2,
              "value": "开发流程",
              "heading": "开发流程"
            }
          ]
        },
        "title": "贡献指南"
      },
      {
        "path": "/guide",
        "component": require('../../docs/guide/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/README.md",
          "updatedTime": 1679885958956,
          "title": "关于 Black UI",
          "nav": {
            "title": "开发指南",
            "path": "/guide"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Black UI",
              "heading": "black-ui"
            },
            {
              "depth": 2,
              "value": "✨ 特性",
              "heading": "-特性"
            }
          ]
        },
        "title": "关于 Black UI"
      },
      {
        "path": "/components/alert",
        "component": require('../../components/alert/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "components/alert/index.md",
          "updatedTime": 1679885992687,
          "title": "Alert 警告提示",
          "group": {
            "title": "Alert 警告提示",
            "path": "/components/alert"
          },
          "nav": {
            "title": "组件",
            "path": "/components"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "警告样式",
              "heading": "警告样式"
            },
            {
              "depth": 2,
              "value": "含有辅助性文字介绍的警告提示",
              "heading": "含有辅助性文字介绍的警告提示"
            },
            {
              "depth": 2,
              "value": "可关闭的警告提示",
              "heading": "可关闭的警告提示"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ]
        },
        "title": "Alert 警告提示"
      },
      {
        "path": "/components/auto-complete",
        "component": require('../../components/auto-complete/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "components/auto-complete/index.md",
          "updatedTime": 1679885932772,
          "title": "AutoComplete 自动完成",
          "group": {
            "title": "AutoComplete 自动完成",
            "path": "/components/auto-complete"
          },
          "nav": {
            "title": "组件",
            "path": "/components"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 3,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 3,
              "value": "自定义渲染下拉选项",
              "heading": "自定义渲染下拉选项"
            },
            {
              "depth": 3,
              "value": "ajax 请求下拉选项",
              "heading": "ajax-请求下拉选项"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            }
          ]
        },
        "title": "AutoComplete 自动完成"
      },
      {
        "path": "/components/button",
        "component": require('../../components/button/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "components/button/index.md",
          "updatedTime": 1679885932924,
          "title": "Button 按钮",
          "group": {
            "title": "Button 按钮",
            "path": "/components/button"
          },
          "nav": {
            "title": "组件",
            "path": "/components"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "按钮类型",
              "heading": "按钮类型"
            },
            {
              "depth": 3,
              "value": "按钮尺寸",
              "heading": "按钮尺寸"
            },
            {
              "depth": 3,
              "value": "不可用状态",
              "heading": "不可用状态"
            },
            {
              "depth": 3,
              "value": "Block 按钮",
              "heading": "block-按钮"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            }
          ]
        },
        "title": "Button 按钮"
      },
      {
        "path": "/components/input",
        "component": require('../../components/input/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "components/input/index.md",
          "updatedTime": 1679885933118,
          "title": "Input 输入框",
          "group": {
            "title": "Input 输入框",
            "path": "/components/input"
          },
          "nav": {
            "title": "组件",
            "path": "/components"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 3,
              "value": "三种大小",
              "heading": "三种大小"
            },
            {
              "depth": 3,
              "value": "禁用",
              "heading": "禁用"
            },
            {
              "depth": 3,
              "value": "前缀与后缀",
              "heading": "前缀与后缀"
            },
            {
              "depth": 3,
              "value": "图标",
              "heading": "图标"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            }
          ]
        },
        "title": "Input 输入框"
      },
      {
        "path": "/components/menu",
        "component": require('../../components/menu/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "components/menu/index.md",
          "updatedTime": 1679885933245,
          "title": "Menu 导航菜单",
          "group": {
            "title": "Menu 导航菜单",
            "path": "/components/menu"
          },
          "nav": {
            "title": "组件",
            "path": "/components"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "顶部导航",
              "heading": "顶部导航"
            },
            {
              "depth": 3,
              "value": "内嵌菜单",
              "heading": "内嵌菜单"
            },
            {
              "depth": 3,
              "value": "只展开当前父级菜单",
              "heading": "只展开当前父级菜单"
            },
            {
              "depth": 3,
              "value": "切换菜单类型",
              "heading": "切换菜单类型"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 4,
              "value": "Menu",
              "heading": "menu"
            },
            {
              "depth": 4,
              "value": "Menu.Item",
              "heading": "menuitem"
            },
            {
              "depth": 4,
              "value": "Menu.SubMenu",
              "heading": "menusubmenu"
            }
          ]
        },
        "title": "Menu 导航菜单"
      },
      {
        "path": "/components/select",
        "component": require('../../components/select/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "components/select/index.md",
          "updatedTime": 1679885938193,
          "title": "Select 选择器",
          "group": {
            "title": "Select 选择器",
            "path": "/components/select"
          },
          "nav": {
            "title": "组件",
            "path": "/components"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 3,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 3,
              "value": "多选",
              "heading": "多选"
            },
            {
              "depth": 3,
              "value": "禁用",
              "heading": "禁用"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 4,
              "value": "Select",
              "heading": "select"
            },
            {
              "depth": 4,
              "value": "Select.Option",
              "heading": "selectoption"
            }
          ]
        },
        "title": "Select 选择器"
      },
      {
        "path": "/components/tabs",
        "component": require('../../components/tabs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "components/tabs/index.md",
          "updatedTime": 1679885938311,
          "title": "Tabs 标签页",
          "group": {
            "title": "Tabs 标签页",
            "path": "/components/tabs"
          },
          "nav": {
            "title": "组件",
            "path": "/components"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "基本",
              "heading": "基本"
            },
            {
              "depth": 3,
              "value": "禁用",
              "heading": "禁用"
            },
            {
              "depth": 3,
              "value": "卡片式页签",
              "heading": "卡片式页签"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 4,
              "value": "Tabs",
              "heading": "tabs"
            },
            {
              "depth": 4,
              "value": "Tabs.TabPane",
              "heading": "tabstabpane"
            }
          ]
        },
        "title": "Tabs 标签页"
      },
      {
        "path": "/components/tag",
        "component": require('../../components/tag/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "components/tag/index.md",
          "updatedTime": 1679885938427,
          "title": "Tag 标签",
          "group": {
            "title": "Tag 标签",
            "path": "/components/tag"
          },
          "nav": {
            "title": "组件",
            "path": "/components"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "基本",
              "heading": "基本"
            },
            {
              "depth": 2,
              "value": "颜色",
              "heading": "颜色"
            },
            {
              "depth": 2,
              "value": "尺寸",
              "heading": "尺寸"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ]
        },
        "title": "Tag 标签"
      },
      {
        "path": "/components",
        "meta": {},
        "exact": true,
        "redirect": "/components/alert"
      }
    ],
    "title": "Black UI"
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
