import type { Block } from 'payload'

export const CodeBlock: Block = {
  slug: 'code',
  interfaceName: 'CodeBlockType',
  fields: [
    {
      name: 'language',
      type: 'select',
      defaultValue: 'plaintext',
      options: [
        { label: 'Plain Text', value: 'plaintext' },
        { label: 'TypeScript', value: 'typescript' },
        { label: 'JavaScript', value: 'javascript' },
        { label: 'Python', value: 'python' },
        { label: 'Bash', value: 'bash' },
        { label: 'JSON', value: 'json' },
        { label: 'YAML', value: 'yaml' },
        { label: 'CSS', value: 'css' },
        { label: 'HTML', value: 'html' },
        { label: 'SQL', value: 'sql' },
        { label: 'Go', value: 'go' },
      ],
    },
    { name: 'code', type: 'code', required: true },
  ],
}
