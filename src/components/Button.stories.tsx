// src/components/Button.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { AiOutlinePlus } from 'react-icons/ai'; // Optional: Install react-icons if using icons

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    type: {
      control: {
        type: 'select',
        options: ['button', 'submit', 'reset'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'danger'],
      },
    },
    disabled: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
    icon: {
      control: 'none', // We can use this to add icon support later
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A flexible button component with multiple variants, loading state, and optional icon support.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Danger: Story = {
  args: {
    label: 'Danger Button',
    variant: 'danger',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading Button',
    variant: 'primary',
    isLoading: true,
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Button with Icon',
    variant: 'primary',
    icon: <AiOutlinePlus />, // Example icon usage
  },
};
