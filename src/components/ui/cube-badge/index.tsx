import React, { FC } from 'react'
import './_stylee.scss'

interface IProps {
    children: React.ReactNode
}
const CubeBadge:FC<IProps> = ({children}) => {
  return (
    <div className='cube-badge'>
      {children}
    </div>
  )
}

export default CubeBadge;
