import React, { Component } from 'react'

export default class Student extends Component {
  handleEdit = (student)=> {
    this.props.handleEdit(student)
  }
  handleView = (student)=>{
      this.props.handleView(student)
  }
  render() {
    // lay du lieu tu props de hien thi 
    // let student = this.props.student
    let {student, index} = this.props
   // console.log(student)
   
    return (
     <>
        <tr>
                    <td>{index+1}</td>
                    <td>{student.studentId}</td>
                    <td>{student.studentName}</td>
                    <td>{student.age}</td>
                    <td>{(student.sex===true || student.sex === 'true' )? "Nam": 'Nữ'}</td>
                    <td>
                      <div className="template-demo">
                        <button
                          type="button"
                          className="btn btn-danger btn-icon-text" onClick={()=> this.handleView(student)}
                        >
                          Xem
                        </button>
                        <button
                          type="button"
                          className="btn btn-warning btn-icon-text" onClick={() => this.handleEdit(student)}
                        >
                          Sửa
                        </button>
                        <button
                          type="button"
                          className="btn btn-success btn-icon-text"
                        >
                          Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
     </>
    )
  }
}
