import React from 'react'
import Styles from '../styles/NavStyle.js'

export default function NavBar () {
    return (
        <div>
            <div style={{ margin: '20px 100px 20px 100px'}}>
                <Styles.LogoContainer>
                    <Styles.Logo src="./assets/Zero.png" />
                </Styles.LogoContainer>
                
                <Styles.Nav>FAQs</Styles.Nav> <Styles.Nav>About</Styles.Nav> 
            </div>
            <Styles.Divider />
        </div>
    )
}