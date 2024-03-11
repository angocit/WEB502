import React from 'react'

type Props = {
    "title":string
}

const Header = (props: Props) => {
  return (
    <>
    {props.title}
    <div>Đây là header</div>
    </>
  )
}

export default Header