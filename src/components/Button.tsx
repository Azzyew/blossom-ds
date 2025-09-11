import { type VariantProps, cva } from 'class-variance-authority';
import { ActivityIndicator, Text, TextProps, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { cn } from '../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md',
  {
    variants: {
      variant: {
        primary: 'bg-primary border border-primary-foreground',
        secondary: 'bg-secondary border border-secondary-foreground',
        outlined: 'bg-none border border-border',
        ghost: 'bg-none border-none',
        danger: 'bg-danger border border-danger-foreground'
      },
      size: {
        sm: 'min-h-9 px-3 py-2',
        md: 'min-h-11 px-4 py-3',
        lg: 'min-h-13 px-5 py-4',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

const buttonTextVariants = cva(
  'inline-flex text-center',
  {
    variants: {
      variant: {
        primary: 'text-primary-foreground',
        secondary: 'text-secondary-foreground',
        outlined: 'text-foreground',
        ghost: 'text-foreground',
        danger: 'text-danger-foreground'
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
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
  loading = false,
  children,
  ...props
}: ButtonBaseProps) => {
  return (
    <TouchableOpacity
      className={cn(buttonVariants({ variant, size, className }))}
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
  children,
  ...props
}: ButtonTextProps) => {
  return (
    <Text
      className={cn(buttonTextVariants({ variant, size, className }))}
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
