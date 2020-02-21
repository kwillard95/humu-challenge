import styled from 'styled-components'

const Styles = {}

Styles.Header = styled.h1`
margin: 40px 110px 0px 110px;
font-size: 20px
`

Styles.Container = styled.div`
margin: 20px 110px 20px 110px;
display: flex;
flex-direction: row
`

Styles.Bar = styled.div`
display: flex;
justify-content: flex-end;
flex-direction: column;
font-size: 12px;
`

Styles.Text = styled.div`
padding-bottom: 2px;
padding-left: 5px;
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
flex-wrap: nowrap
`

export default Styles