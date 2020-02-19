import React from 'react';
import Styles from '../styles/DataStyle.js'
import employeeData from '../../employees.js'

export default function DataVisual() {

    function employeesByDept(data, deptObj) {
        deptObj = deptObj || {};
        for (var i = 0; i < data.length; i++) {
            var dept = data[i].department;
            if (!deptObj[dept]) {
                deptObj[dept] = {
                    leader: data[i].firstName + data[i].lastName,
                    employeeCount: 0
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
            if (dept === 'Residential Architecture' || dept === 'Commercial Architecture' || dept === 'Industrial Architecture') {
                let currentObj = obj[dept];
                currentObj.department = dept;
                deptArr.push(obj[dept]);
                sumOfAllDepts += deptObj[dept].employeeCount;
            }
        }

        for (let el of deptArr) {
            let percentage = Math.floor((el.employeeCount / sumOfAllDepts) * 100);
            el.percentage = percentage;
        }
        return deptArr;
    }

    const deptObj = employeesByDept(employeeData);
    const deptArr = containerLengths(deptObj);
    const colors = ['#bd10e0', '#4a90e2', '#50e3c2', '#b8e986', '#7ed321', '#417505', '#f8e71c', '#f5a623', '#9b9b9b']
    deptArr.sort((a, b) => {
        if (a.employeeCount > b.employeeCount) {
            return -1;
        } else if (a.employeeCount < b.employeeCount) {
            return 1
        }
        return 0
    })

    let borderLeftLength = 0;
    let topPadding = 0;

    return (
        <div style={{ margin: '20px 110px 20px 110px' }}>
            <h1>
                Departments
          </h1>
            <div>


                {deptArr.map((dept) => {
                    const color = colors.shift();
                    borderLeftLength += 100;
                    topPadding += 20
                    return (<span>
                        <Styles.Bar style={{
                            width: dept.percentage.toString() + '%',
                            height: borderLeftLength + 'px',
                            borderTop: '4px solid' + color,
                            borderLeft: '1px solid' + color
                        }}>
                            <div style={{ position: 'relative', top: topPadding + 'px', left: '5px' }}>
                                <div><b>{dept.department}</b></div>
                                <div>{dept.leader}</div>
                                <div>{dept.employeeCount} employees</div>
                            </div>

                        </Styles.Bar>
                    </span>)
                })}
            </div>
        </div>
    )
}