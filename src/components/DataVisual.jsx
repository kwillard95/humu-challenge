import React from 'react';
import Styles from '../styles/DataStyle.js'
import employeeData from '../../employees.js'

export default function DataVisual() {

    function employeesByDept(data, deptObj) {
        deptObj = deptObj || {};
        for (var i = 0; i < data.length; i++) {
            var dept = data[i].department;
            if (dept.includes('Sales') && dept !== 'Sales') {
                deptObj.Sales.employeeCount++;
            } else if (!deptObj[dept]) {
                deptObj[dept] = {
                    firstName: data[i].firstName,
                    lastName: data[i].lastName,
                    employeeCount: 1
                };
            } else {
                deptObj[dept].employeeCount++;
            }
            if (data[i].reports.length) {
                employeesByDept(data[i].reports, deptObj);
            }
        }
        return deptObj
    }

    function containerLengths(obj) {
        const deptArr = [];
        let sumOfAllDepts = 0;
        for (let dept in obj) {
            if (dept !== 'intervieworg') {
                let currentObj = obj[dept];
                currentObj.department = dept;
                deptArr.push(obj[dept]);
                if (currentObj.employeeCount < 10) {
                    currentObj.employeeCount = 100;
                }
                sumOfAllDepts += currentObj.employeeCount;
            }
        }

        for (let dept of deptArr) {
            let percentage = Math.floor((dept.employeeCount / sumOfAllDepts) * 100);
            dept.percentage = percentage;
        }
        return deptArr;
    }

    const deptArr = containerLengths(employeesByDept(employeeData));
    const colors = ['#bd10e0', '#4a90e2', '#50e3c2', '#b8e986', '#7ed321', '#417505', '#f8e71c', '#f5a623', '#9b9b9b'];

    deptArr.sort((a, b) => {
        if (a.employeeCount > b.employeeCount) {
            return -1;
        } else if (a.employeeCount < b.employeeCount) {
            return 1
        }
        return 0
    })

    let borderLength = 40;

    return (
        <div>
            <Styles.Header>
                Departments
           </Styles.Header>
            <Styles.Container>
                {deptArr.map((dept) => {
                    const color = colors.shift();
                    borderLength += 30;
                    return (
                        <Styles.Bar style={{
                            width: dept.percentage.toString() + '%',
                            height: borderLength + 'px',
                            borderTop: '4px solid' + color,
                            borderLeft: '1px solid' + color
                        }}>
                            <div>
                                <Styles.Text><b>{dept.department}</b></Styles.Text>
                                <Styles.Text>{dept.firstName} {dept.lastName}</Styles.Text>
                                <Styles.Text>{dept.employeeCount} employees</Styles.Text>
                            </div>

                        </Styles.Bar>
                    )
                })}
            </Styles.Container>
        </div>
    )
}