export function SchemaScript({ schema }: { schema: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react-dom/no-dangerously-set-innerhtml
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
