import React from 'react'

import { cn } from 'lib/utils'

export const IconSkillHardhat = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span {...props} className={cn('icon-[devicon--hardhat]', className)}></span>
}
