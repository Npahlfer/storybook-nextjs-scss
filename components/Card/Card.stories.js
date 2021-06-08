import React from 'react'
import Card from './Card'

export default {
  title: 'Card',
  argTypes: {
    image: { control: { type: 'text' } },
    heading: { control: { type: 'text' } },
    variant: {
      control: {
        type: 'select',
        options: ['Primary', 'Secondary'],
      },
    },
  },
}

const Template = (args) => <Card {...args} />

export const Default = Template.bind({})

Default.args = {
  image: 'https://placekitten.com/200/300',
  heading: 'Sample heading',
}
