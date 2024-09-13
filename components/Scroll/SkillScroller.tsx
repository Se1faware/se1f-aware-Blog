'use client'

import React from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'
import useMeasure from 'react-use-measure'
import { cn } from 'lib/utils'

const SkillScroller = ({ skills }) => {
  const FAST_DURATION = 25
  const SLOW_DURATION = 75

  const [duration, setDuration] = React.useState(FAST_DURATION)
  const [ref, { width }] = useMeasure()
  const xTranslation = useMotionValue(0)
  const [mustFinish, setMustFinish] = React.useState(false)
  const [rerender, setRerender] = React.useState(false)

  React.useEffect(() => {
    let controls
    let finalPosition = -width / 2 - 8

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: 'linear',
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false)
          setRerender(!rerender)
        },
      })
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
      })
    }

    return controls?.stop
  }, [rerender, xTranslation, duration, width])

  const maxIcons = Math.floor(width / 100) // 假设每个图标宽度为100px

  return (
    <div className="tag-scrollers">
      <motion.div
        className="tag-scroller"
        style={{ x: xTranslation }}
        ref={ref}
        onHoverStart={() => {
          setMustFinish(true)
          setDuration(SLOW_DURATION)
        }}
        onHoverEnd={() => {
          setMustFinish(true)
          setDuration(FAST_DURATION)
        }}
      >
        {skills
          .slice(0, maxIcons * 3) // 限制显示的图标数量
          .concat(skills.slice(0, maxIcons * 3)) // 复制数组以实现无限滚动
          .map((skill, index) => (
            <>
              {skill.isDarkModeOnly ? (
                <span className={cn(skill.className, 'dark:hidden', 'h-16', 'w-16')} key={index}>
                  {skill.icon}
                </span>
              ) : skill.isLightModeOnly ? (
                <span
                  className={cn(skill.className, 'hidden', 'dark:inline-block', 'h-16', 'w-16')}
                  key={index}
                >
                  {skill.icon}
                </span>
              ) : (
                <span className={cn(skill.className, 'h-16', 'w-16')} key={index}>
                  {skill.icon}
                </span>
              )}
            </>
          ))}
      </motion.div>
    </div>
  )
}

export default SkillScroller
