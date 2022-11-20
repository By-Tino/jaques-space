import join from 'url-join'
import pinia from '@/pinia'
import { useStore } from '@/pinia/config'
import { TinyColor } from '@ctrl/tinycolor'

const store = useStore(pinia)

export function darken(color: TinyColor, amount = 20) {
  return color.mix('#141414', amount).toString()
}

// 根据给定的颜色生成样式
export const useColor = (namespace: string, el: string, defineColor: string, disabled: boolean) => {
  const cssVarBlock = (object: Record<string, string>) => {
    const styles: Record<string, string> = {}
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace}-${el}-${key}`] = object[key]
      }
    }
    return styles
  }
  const cssVarName = (name: string) => `--${namespace}-${name}`
  const cssVarBlockName = (name: string) => `--${namespace}-${el}-${name}`
  return computed(() => {
    let styles: Record<string, string> = {}

    if (defineColor) {
      const color = new TinyColor(defineColor)
      const activeBgColor = darken(color, 20)
      const hoverBgColor = color.tint(30).toString()
      const textColor = color.isDark() ? `var(${cssVarName('color-white')})` : `var(${cssVarName('color-black')})`
      styles = cssVarBlock({
        'bg-color': defineColor,
        'text-color': textColor,
        'border-color': defineColor,
        'hover-bg-color': hoverBgColor,
        'hover-text-color': textColor,
        'hover-border-color': hoverBgColor,
        'active-bg-color': activeBgColor,
        'active-border-color': activeBgColor,
      })
      if (disabled) {
        const disabledButtonColor = color.tint(50).toString()
        styles[cssVarBlockName('disabled-bg-color')] = disabledButtonColor
        styles[cssVarBlockName('disabled-text-color')] = `var(${cssVarName('color-white')})`
        styles[cssVarBlockName('disabled-border-color')] = disabledButtonColor
      }
    }

    return styles
  })
}

// 获取 assets 目录下的文件
export const useImageFile = (name = '') => {
  const modules = import.meta.glob('../assets/images/**/*', { eager: true })
  const path = join('../assets/images', name)
  return (modules[path] as { default: string })?.default
}

// 定义组件的命名空间
export const useNamespace = (name: string) => {
  return computed(() => store.prefix + '-' + name)
}
