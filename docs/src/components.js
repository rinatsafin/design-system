import * as DS from 'pcln-design-system'
import { Heading, Text, Link, BlockLink } from 'pcln-design-system'
import styled from 'styled-components'
import { space, fontSize, color, theme } from 'styled-system'

const heading = type => props => {
  const Comp = Heading[type]
  return (
    <Comp {...props}>
      <Link href={'#' + props.id} color="inherit">
        {props.children}
      </Link>
    </Comp>
  )
}

const OverflowAuto = styled.div`
  max-width: 100%;
  overflow-x: auto;
`
const Table = styled(props => (
  <OverflowAuto>
    <table {...props} />
  </OverflowAuto>
))`
  border-collapse: separate;
  border-spacing: 0;
  max-width: 100%;
  width: 100%;
  ${space} & th {
    text-align: left;
    background-color: #f6f8fa;
    padding: 0 16px;
  }

  & td:first-child {
    font-family: 'Roboto Mono', Menlo, monospace;
    font-size: 16px;
    min-width: 150px;
    color: ${theme('colors.blue')};
  }

  & td {
    font-size: 16px;
    color: ${theme('colors.text')};
    vertical-align: middle;
    padding: 0 16px !important;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${theme('colors.borderGray')};
  }

  & th,
  & td {
    height: 72px;
    line-height: inherit;
  }
`
Table.defaultProps = {
  my: 3
}

export const PageTitle = props => (
  <Heading.h1 fontSize={[5, 6]} bold mt={[2, 5]} mb={3} {...props} />
)

export const Description = props => (
  <Text fontSize={[2, 3]} mb={3} color="gray" {...props} />
)

export const Code = styled.code`
  font-family: 'Roboto Mono', monospace;
  ${color} ${fontSize};
`

Code.defaultProps = {
  fontSize: 2,
  color: 'blue'
}

const components = {
  ...DS,
  h1: heading('h1'),
  h2: heading('h2'),
  h3: heading('h3'),
  h4: heading('h4'),
  h5: heading('h5'),
  h6: heading('h6'),
  a: Link,
  p: p => <Text.p {...p} />,
  table: Table
}

components.h1.defaultProps = {
  fontSize: [5, 6],
  mt: 5,
  mb: 3
}
components.h2.defaultProps = {
  fontSize: 5,
  mt: 5,
  mb: 3
}

components.h3.defaultProps = {
  fontSize: 4,
  mt: 4,
  mb: 3,
  style: {
    fontWeight: '700'
  }
}

components.h4.defaultProps = {
  fontSize: 3,
  mt: 4,
  mb: 3
}

components.p.defaultProps = {
  fontSize: 2,
  mt: 0,
  mb: 3,
  style: {
    lineHeight: 1.6
  }
}

export default components