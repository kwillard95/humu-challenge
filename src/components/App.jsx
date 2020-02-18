import React from 'react';
import employeeData from '../../employees.js'
import Styles from '../styles/AppStyle.js'

export default function App() {
    return (
        <div>
            <div style={{ display: 'block', marginLeft: '100px', marginTop: '20px', marginBottom: '20px', marginRight: '100px' }}>
                <Styles.LogoContainer>
                    <Styles.Logo src="./assets/Zero.png" />
                </Styles.LogoContainer>
                
                <Styles.Nav>FAQs</Styles.Nav> <Styles.Nav>About</Styles.Nav> 
            </div>
            <Styles.Divider />
        </div>
    )
}