import React from 'react'
import styled from 'styled-components'

const Container = styled.main`
display: grid;
grid-template-columns: [full-start] 1fr [center-start] repeat(12, [col-start] minmax(min-content, 10rem) [col-end]) [center-end] 1fr [full-end];
`

const Layout = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default Layout;
