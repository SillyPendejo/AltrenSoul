import React, { memo } from 'react'
import cls from 'classnames'

// svg
import { IIconProps } from '~svg'

const Edit: React.FC<IIconProps> = props => {
  const { className, ...rest } = props

  return (
    <svg className={cls('fill-current', className)} xmlns="http://www.w3.org/2000/svg" viewBox={'0 0 24 24'} {...rest}>
      <path
        fill="currentColor"
        d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
      />
    </svg>
  )
}

export default memo(Edit)
