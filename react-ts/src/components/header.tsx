import React from 'react'

type Props = {
    "title":string
}

const Header = (props: Props) => {
  return (
    <div>
        Đây là header
        <h1>{props.title}</h1>
        </div>
  )
}

export default Header