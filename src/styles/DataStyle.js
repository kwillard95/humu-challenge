import styled from 'styled-components'

const Styles = {}

Styles.Header = styled.h1`
margin: 40px 110px 0px 110px;
font-size: 20px
`

Styles.Container = styled.div`
margin: 20px 110px 20px 110px;
display: flex;
flex-direction: row;
flex-wrap: nowrap
`

Styles.Bar = styled.div`
font-size: 12px;
text-overflow: ellipsis
`

Styles.Text = styled.div`
padding-bottom: 2px;
padding-left: 5px
`

export default Styles