// 主题的类型
export type Theme = 'light' | 'dark'

// 定义大小值类型
export type DefineSize = 'default' | 'large' | 'small'

// tag 的颜色值类型
export type TagTypes = 'primary' | 'success' | 'warning' | 'error' | 'info'

// tag 的大小值类型
export type TagSize = DefineSize

// tag 的主题类型
export type DefineEffect = 'dark' | 'light' | 'plain'

// button 的颜色值类型
export type ButtonTypes = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'

// button 的大小值类型
export type ButtonSize = DefineSize

// 定义 图片 加载状态值类型
export type ImageStatus = 'default' | 'loading' | 'success' | 'error'

// 定义 图片 的模式
export type ImageMode = 'scaleToFill' | 'aspectFit' | 'aspectFill' | 'widthFix' | 'heightFix' | 'top' | 'bottom' | 'center' | 'left' | 'right' | 'top left' | 'top right' | 'bottom left' | 'bottom right'

// 规则校验的触发方式
export type TriggerMethods = 'change' | 'blur'

// 定义表单规则
export interface FormRules {
  // 必填属性
  required?: boolean
  // 最小值
  min?: number
  // 最大值
  max?: number
  // 错误提示信息
  message: string
  // 触发规则校验的时机
  trigger?: TriggerMethods | TriggerMethods[]
  // 自定义校验
  validator?: (value: string, callback: Function) => Promise<boolean>
}

// 定义位置
export type Position = 'top' | 'left' | 'center' | 'right'

// 排列方式
export type Alignment = 'horizontal' | 'vertical'
