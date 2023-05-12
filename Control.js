import React, { Component } from "react";

export default class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: "",
    };
  }

  handleAdd = () => {
    this.props.handleAdd();
  };

  // Khi nguoi dung cap nhat hay nhap du lieu tren form, cap nhat lai state
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  // Xu ly khi click vao nut tim kiem
  handleSearch = (event) => {
    this.props.handleSearch(this.state.searchData);
    // event.preventDefualt()
    event.preventDefault();
  };
  // Xu ly sap xep
  handleSort = (event) => {
    let value = event.target.value;
    let arr = value.split("-"); //arr [0] = studentName; arr[1] = ASC
    // chuyen du lieu sort ve App component
    this.props.handleSort(arr[0], arr[1]);
  };
  render() {
    return (
      <>
        <div className="card-header">
          <div className="row">
            <div className="col-3 ">
              <button
                type="button"
                className="btn btn-primary btn-icon-text"
                onClick={this.handleAdd}
              >
                Thêm mới sinh viên
              </button>
            </div>
            <div className="col-6 ">
              <form className="search-form" action="#">
                <i className="icon-search" />
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search Here"
                  title="Search here"
                  name="searchData"
                  value={this.state.searchData}
                  onChange={this.handleChange}
                />
                <button
                  className="btn btn-primary btn-icon-text"
                  onClick={this.handleSearch}
                >
                  Tìm kiếm
                </button>
              </form>
            </div>
            <div className="col-3 d-flex align-items-center">
              <select className="form-control" onChange={this.handleSort}>
                <option value="">Sắp xếp</option>
                <option value="studentName-ASC">Student Name (ASC)</option>
                <option value="studentName-DESC">Student Name (DESC)</option>
                <option value="age-ASC">ABC (ASC)</option>
                <option value="age-DESC">ABC (DESC)</option>
              </select>
            </div>
          </div>
        </div>
      </>
    );
  }
}
