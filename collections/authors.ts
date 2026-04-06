import type { CollectionConfig } from "payload"

export const Authors: CollectionConfig = {
  slug: "authors",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "role"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "role",
      type: "text",
    },
    {
      name: "avatar",
      type: "upload",
      relationTo: "media",
    },
  ],
}
