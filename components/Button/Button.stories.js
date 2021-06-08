import React from 'react'
import Button from './Button'

export default {
  title: 'Button',
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['Primary', 'Secondary', 'Default'],
      },
    },
  },
}

const TemplateWithText = (args) => <Button {...args}>Hello Button</Button>

const TemplateWithEmoji = (args) => (
  <Button {...args}>
    <span role="img" aria-label="such cool, very dog">
      😎 🐕 👍
    </span>
  </Button>
)

export const withText = TemplateWithText.bind({})

withText.args = {}

export const withSomeEmoji = TemplateWithEmoji.bind({})

withSomeEmoji.args = {}
