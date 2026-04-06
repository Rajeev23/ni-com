import type { CollectionConfig } from "payload"

import {
  RichTextBlock,
  CalloutBlock,
  ComparisonTableBlock,
  StatHighlightBlock,
  ImageBlock,
  CodeBlock,
  CtaCardBlock,
  EmbedBlock,
  QuoteBlock,
} from "../blocks"

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "status", "publishedAt"],
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: "title", type: "text", required: true },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: {
        description:
          "URL-friendly identifier. Auto-generated from title if left blank.",
      },
      hooks: {
        beforeValidate: [
          ({ value, siblingData }) => {
            if (!value && siblingData?.title) {
              return siblingData.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "")
            }
            return value
          },
        ],
      },
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      admin: {
        description: "Short summary shown on blog cards and in SEO meta.",
      },
    },
    { name: "coverImage", type: "upload", relationTo: "media" },
    { name: "category", type: "relationship", relationTo: "categories" },
    { name: "author", type: "relationship", relationTo: "authors" },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        date: { pickerAppearance: "dayOnly", displayFormat: "MMM d, yyyy" },
      },
    },
    {
      name: "status",
      type: "select",
      defaultValue: "draft",
      options: [
        { label: "Draft", value: "draft" },
        { label: "Published", value: "published" },
      ],
      required: true,
    },
    {
      name: "content",
      type: "blocks",
      blocks: [
        RichTextBlock,
        CalloutBlock,
        ComparisonTableBlock,
        StatHighlightBlock,
        ImageBlock,
        CodeBlock,
        CtaCardBlock,
        EmbedBlock,
        QuoteBlock,
      ],
    },
    {
      name: "seo",
      type: "group",
      fields: [
        {
          name: "title",
          type: "text",
          admin: {
            description: "Optional. Overrides post title in <title> tag.",
          },
        },
        {
          name: "description",
          type: "textarea",
          admin: {
            description: "Optional. Overrides post description in meta tag.",
          },
        },
      ],
    },
  ],
}
