import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LogoHeader } from './'

export default {
  title: 'components/LogoHeader',
  component: LogoHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LogoHeader>

const Template: ComponentStory<typeof LogoHeader> = (args) => (
  <LogoHeader {...args} />
)

export const Default = Template.bind({})
Default.args = {
  backgroundColor: 'rbga(0,0,0,0)',
}
