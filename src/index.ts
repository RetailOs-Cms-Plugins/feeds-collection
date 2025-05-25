import type { CollectionSlug, Config } from 'payload'

export const myPluginProducts =
  (pluginOptions?: any) =>
  (config: Config): Config => {
    return {
      ...config,
    }
  }
