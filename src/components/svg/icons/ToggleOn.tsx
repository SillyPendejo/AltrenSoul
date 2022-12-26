import React, { memo } from 'react'
import cls from 'classnames'

// svg
import { IIconProps } from '~svg'

const ToggleOn: React.FC<IIconProps> = props => {
  const { className, ...rest } = props

  return (
    <svg className={cls('fill-current', className)} xmlns="http://www.w3.org/2000/svg" viewBox={'0 0 24 24'} {...rest}>
      <path
        fill="currentColor"
        d="M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M17,15A3,3 0 0,1 14,12A3,3 0 0,1 17,9A3,3 0 0,1 20,12A3,3 0 0,1 17,15Z"
      />
    </svg>
  )
}

export default memo(ToggleOn)