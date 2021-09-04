import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Calendar from '../react-date-painter/src/components'

export default {
	title: 'Calendar',
	component: Calendar,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Calendar>

const Template: ComponentStory<typeof Calendar> = (args) => <Calendar {...args} />

export const Default = Template.bind({})
Default.args = {
	selectedDates: [],
}
