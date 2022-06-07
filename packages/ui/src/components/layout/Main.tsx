import React from 'react'

const Main: React.FC<{
  children: React.ReactElement<any, any> | React.ReactElement<any, any>[] | null
}> = (props) => <main style={{ margin: '1rem' }}>{props.children}</main>

export { Main }
