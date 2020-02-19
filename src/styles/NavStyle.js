import styled from 'styled-components'

const Styles = {}

Styles.LogoContainer = styled.div`
display: inline-block;
height: 20px;
width: 60px;
`
Styles.Logo = styled.img`
height: 100%;
width: 100%;
object-fit: contain
`
Styles.Nav = styled.div`
float: right;
display: inline-block;
color: blue;
margin-bottom: 15px;
padding-right: 30px
`

Styles.Divider = styled.hr`
display: block;
border-top: 1px solid rgb(240, 240, 240)
`

export default Styles;