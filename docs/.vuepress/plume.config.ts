import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://theme-plume.vuejs.press/plume.png',
  // your git repo url
  docsRepo: '',
  docsDir: 'docs',

  appearance: true,

  profile: {
    name: "Meepoljdx",
    description: "一个名不见经传的运维菜鸟",
    location: "四川成都",
    circle: true,
    layout: 'right',
  },
  social: [
    { icon: "github", link: "https://github.com/Meepoljdx" }
  ],
  navbar,
  notes,

})
