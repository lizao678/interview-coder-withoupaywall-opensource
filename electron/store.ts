// 存储模块，负责处理应用程序的持久化存储
import Store from "electron-store"

// 存储模式接口定义
interface StoreSchema {
  // 目前为空，我们可以稍后在此处添加其他存储项
  // Empty for now, we can add other store items here later
}

// 创建存储实例
const store = new Store<StoreSchema>({
  defaults: {},
  encryptionKey: "your-encryption-key"
}) as Store<StoreSchema> & {
  store: StoreSchema
  get: <K extends keyof StoreSchema>(key: K) => StoreSchema[K]
  set: <K extends keyof StoreSchema>(key: K, value: StoreSchema[K]) => void
}

export { store }
