import { type VariantProps, cva } from 'class-variance-authority';
import { ActivityIndicator, Text, TextProps, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { cn } from '../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md',
  {
    variants: {
      variant: {
        solid: 'border-none',
        outlined: 'bg-none border',
        ghost: 'bg-none border-none',
      },
      action: {
        primary: '',
        secondary: '',
        danger: ''
      },
      size: {
        sm: 'min-h-9 px-3 py-2',
        md: 'min-h-11 px-4 py-3',
        lg: 'min-h-13 px-5 py-4',
      },
    },
    compoundVariants: [
      {
        variant: 'solid',
        action: 'primary',
        className: 'bg-primary',
      },
      {
        variant: 'solid',
        action: 'secondary',
        className: 'bg-secondary',
      },
      {
        variant: 'solid',
        action: 'danger',
        className: 'bg-danger',
      },
      {
        variant: 'outlined',
        action: 'primary',
        className: 'border-primary-foreground',
      },
      {
        variant: 'outlined',
        action: 'secondary',
        className: 'border-secondary-foreground',
      },
      {
        variant: 'outlined',
        action: 'danger',
        className: 'border-danger-foreground',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      action: 'primary',
      size: 'md',
    },
  }
);

const buttonTextVariants = cva(
  'inline-flex text-center',
  {
    variants: {
      variant: {
        solid: '',
        outlined: '',
        ghost: '',
      },
      action: {
        primary: 'text-primary-foreground',
        secondary: 'text-secondary-foreground',
        danger: 'text-danger-foreground'
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      variant: 'solid',
      action: 'primary',
      size: 'md',
    },
  }
);

type ButtonBaseProps = TouchableOpacityProps &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
  };

type ButtonTextProps = TextProps & VariantProps<typeof buttonTextVariants>;

const ButtonBase = ({
  className,
  variant,
  size,
  action,
  loading = false,
  children,
  ...props
}: ButtonBaseProps) => {
  return (
    <TouchableOpacity
      className={cn(buttonVariants({ variant, size, className, action }), className)}
      {...props}
    >
      {loading ? <ActivityIndicator size="small" className='text-foreground' /> : children}
    </TouchableOpacity>
  )
}

const ButtonText = ({
  className,
  variant,
  size,
  action,
  children,
  ...props
}: ButtonTextProps) => {
  return (
    <Text
      className={cn(buttonTextVariants({ variant, size, className, action }), className)}
      {...props}
    >
      {children}
    </Text>
  )
}

export const Button = {
  Base: ButtonBase,
  Text: ButtonText
}