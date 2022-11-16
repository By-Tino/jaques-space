// #ifdef APP-PLUS
// 小程序及 H5 等平台是没有 HTML5+ 扩展规范的，因此在 uni-app 调用 HTML5+ 的扩展规范时，需要注意使用条件编译。否则运行到h5、小程序等平台会出现 plus is not defined 错误。

/**
 * DEVICE_NAME 获取设备名称
 * android or ios or other
 */
export const DEVICE_NAME = plus.os.name?.toLowerCase()

/**
 * SEND_SMS 发送手机短信
 */
export const SEND_SMS = (phones: string[], message: string) => {
  const msg = plus.messaging.createMessage(plus.messaging.TYPE_SMS)
  msg.to = phones
  msg.body = message
  plus.messaging.sendMessage( msg )
}

// #endif
