import type { Config } from 'payload'

export const feedsCollection =
  (pluginOptions?: any) =>
  (config: Config): Config => {
    return {
      ...config,
    }
  }
