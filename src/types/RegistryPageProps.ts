interface TagInputProps {
  tags: string[]
  label: string
  placeholder?: string
  onChange: (tags: string[]) => void
}

export type {TagInputProps}