import type { Config } from 'payload'
import { createFeedsCollection } from './collections/Feeds/index.js'

export const feedsCollection =
  (pluginOptions?: any) =>
  (config: Config): Config => {
    const collections = config.collections || []
    const pluginCollection = createFeedsCollection()

    return {
      ...config,
      collections: [...collections, pluginCollection],
    }
  }
