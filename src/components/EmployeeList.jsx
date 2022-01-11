import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link } from 'react-router-dom'

export default class EmployeeList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }

        
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        })
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div>
                    <Link to="/add-employee">
                        <button className='bg-amber-500 hover:bg-amber-700'>Add Employee</button>
                    </Link>
                </div>
                    <div className='items-center'>
                        <table className="border-separate table-auto border-2 border-gray-900">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email Id</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => <tr key={employee.id}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.emailId}</td>

                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                
            </div>
        )
    }
}

