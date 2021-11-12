import React from 'react'

const Main: React.FC<{
  children: React.ReactElement<any, any> | React.ReactElement<any, any>[] | null
}> = (props) => <main>{props.children}</main>

export default Main