import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentId: "",
      studentName: "",
      age: "",
      sex: "",
      birthDate: "",
      birthPlace: "",
      address: "",
    };
    // {
    //   studentId : this.props.studentId,
    //   studentName : this.props.studentName,
    //   age : this.props.age,
    //   birthDate : this.props.birthDate,
    //   birthPlace : this.props.studebirthPlacentId,
    //   address : this.props.address
    // }
  }
  // dung component nay truoc khi render trong qua trinh mounting
  componentWillMount = () => {
    let { student, actionName } = this.props;
    if (actionName === "" || actionName === "update") {
      this.state = {
        studentId: student.studentId,
        studentName: student.studentName,
        age: student.age,
        sex: student.sex,
        birthDate: student.birthDate,
        birthPlace: student.birthPlace,
        address: student.address,
      };
    } else {
      //truong hop them moi, cac dieu khien set lai trang thai ban dau
      this.setState({
        studentId: "",
        studentName: "",
        age: "",
        sex: "",
        birthDate: "",
        birthPlace: "",
        address: "",
      });
    }
  };
  //vao truoc khi render trong qua trinh update

  componentWillReceiveProps = (nextProps) => {
    let { student, actionName } = nextProps;
    if (actionName === "" || actionName === "update") {
      this.state = {
        studentId: student.studentId,
        studentName: student.studentName,
        age: student.age,
        sex: student.sex,
        birthDate: student.birthDate,
        birthPlace: student.birthPlace,
        address: student.address,
      };
    } else {
      //truong hop them moi, cac dieu khien set lai trang thai ban dau
      this.setState({
        studentId: "",
        studentName: "",
        age: "",
        sex: "",
        birthDate: "",
        birthPlace: "",
        address: "",
      });
    }
  };
  // su kien khi thay doi du lieu tren form, cap nhat lai state
  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  // khi nguoi dung submit form (them moi hoac sua)
  handleSubmit = (event) => {
    // truong hop sua "update"
    if (this.props.actionName === "update") {
      let studentUpdate = {
        studentId: this.state.studentId,
        studentName: this.state.studentName,
        age: this.state.age,
        sex: this.state.sex,
        birthDate: this.state.birthDate,
        birthPlace: this.state.birthPlace,
        address: this.state.address,
      };
      // console.log("student update:" ,studentUpdate)
      this.props.handleUpdate(studentUpdate);
    } else if (this.props.actionName === "Add") {
      let studentAddSave = {
        studentId: this.state.studentId,
        studentName: this.state.studentName,
        age: this.state.age,
        sex: this.state.sex,
        birthDate: this.state.birthDate,
        birthPlace: this.state.birthPlace,
        address: this.state.address,
      };
      // console.log("student update:" ,studentUpdate)
      this.props.handleAddSave(studentAddSave);
    }
    event.preventDefault();
  };
  render() {
    let { actionName } = this.props;
    let elementButton = "";
    if (actionName === "") {
    } else if (actionName === "update") {
      elementButton = (
        <button
          type="submit"
          className="btn btn-primary me-2"
          onClick={this.handleSubmit}
        >
          Update
        </button>
      );
    } else if (actionName === "Add") {
      elementButton = (
        <button
          type="submit"
          className="btn btn-primary me-2"
          onClick={this.handleSubmit}
        >
          Add
        </button>
      );
    }
    return (
      <>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Thông tin sinh viên</h3>
            <form className="form-sample">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.studentId}
                    name="studentId"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.studentName}
                    name="studentName"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tuổi</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.age}
                    name="age"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Giới tính</label>
                <div className="col-sm-9">
                  <select
                    className="form-control"
                    value={this.state.sex}
                    name="sex"
                    onChange={this.handleChange}
                  >
                    <option value={true}>Nam</option>
                    <option value={false}>Nữ</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Ngày sinh</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    placeholder="dd/mm/yyyy"
                    value={this.state.birthDate}
                    name="birthDate"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nơi sinh</label>
                <div className="col-sm-9">
                  <select
                    className="form-control"
                    value={this.state.birthPlace}
                    name="birthPlace"
                    onChange={this.handleChange}
                  >
                    <option value={"HN"}>Hà Nội</option>
                    <option value={"HCM"}>TP. Hồ Chí Minh</option>
                    <option value={"DN"}>Đà Nẵng</option>
                    <option value={"QN"}>Quảng Ninh</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Địa chỉ</label>
                <div className="col-sm-9">
                  <textarea
                    className="form-control"
                    value={this.state.address}
                    name="address"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              {/* <button type="submit" className="btn btn-primary me-2">
                Submit
              </button> */}
              {elementButton}
            </form>
          </div>
        </div>
      </>
    );
  }
}
