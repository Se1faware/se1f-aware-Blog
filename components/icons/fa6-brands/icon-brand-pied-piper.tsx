import React from 'react'

import { cn } from 'lib/utils'

export const IconBrandPiedPiperHat = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span {...props} className={cn('icon-[fa6-brands--pied-piper-hat]', className)}></span>
}
