import { InputHTMLAttributes, forwardRef } from "react";
import cn from 'clsx'

type TypeTrasparentField = InputHTMLAttributes<HTMLInputElement>

export const TransparentField = forwardRef<HTMLInputElement, TypeTrasparentField>(
  ({ className, ...rest }, ref) => {
    return (
      <input
        className={cn(
          'bg-transparent border-none focus:outline-0 focus:shadow-transparent w-full',
          className
        )}
        ref={ref}
        {...rest}
        />
    )
  }
)

TransparentField.displayName = 'TransparentField'