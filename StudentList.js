import React, { Component } from 'react'
import Student from './Student'

export default class StudentList extends Component {
  handleEdit = (student) => {
    this.props.handleEdit(student)
  }
  handleView = (student)=>{
    this.props.handleView(student)
  }
  render() {
    //lay data tu props 
    let {students} = this.props;
    console.log(students);
    //tao cac student item 
    let studentElement = students.map((item, index)=>{
      return <Student index = {index} student = {item} handleView = {this.handleView} handleEdit = {(student) => this.handleEdit(student)}></Student>
      
    })
    return (
      <>
        <div className="card-body">
            <h3 className="card-title">Danh sách sinh viên</h3>
            <div className="table-responsive pt-3">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Mã sinh viên</th>
                    <th>Tên sinh viên</th>
                    <th>Tuổi</th>
                    <th>Giới tính</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                    {/* Student rows*/}
                    {/* <Student></Student>
                    <Student></Student>
                    <Student></Student> */}
                    {studentElement}
                  {/* <tr>
                    <td>2</td>
                    <td>SV002</td>
                    <td>Nguyễn Văn B</td>
                    <td>21</td>
                    <td>Nữ</td>
                    <td>
                      <div className="template-demo">
                        <button
                          type="button"
                          className="btn btn-danger btn-icon-text"
                        >
                          Xem
                        </button>
                        <button
                          type="button"
                          className="btn btn-warning btn-icon-text"
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
                  <tr>
                    <td>3</td>
                    <td>SV003</td>
                    <td>Nguyễn Văn C</td>
                    <td>19</td>
                    <td>Nam</td>
                    <td>
                      <div className="template-demo">
                        <button
                          type="button"
                          className="btn btn-danger btn-icon-text"
                        >
                          Xem
                        </button>
                        <button
                          type="button"
                          className="btn btn-warning btn-icon-text"
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
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
      </>
    )
  }
}
