import React from 'react';
import Styles from '../styles/DataStyle.js'
import employeeData from '../../employees.js'

export default function DataVisual () {

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

      function containerLengths (obj) {
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
      console.log(deptArr)
      
    return (
      <div style={{ margin: '20px 100px 20px 100px'}}>
          <h1>
              Departments
          </h1>
          {deptArr.map((dept) => {
            return (<span>
            <Styles.Bar style={{width: dept.percentage.toString() + '%', borderTop: '4px solid' + colors.shift()}}>
                {/* {dept.department}
                {dept.employeeCount} */}
            </Styles.Bar>
          </span>)
          })}
          
      </div>  
    )
}