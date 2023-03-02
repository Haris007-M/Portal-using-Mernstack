import axios from "axios";
import React, { useState } from "react";

export default function InterneeForm() {
    const [user, setUser] = useState({
        interneeNo: "",
        name: "",
        image:"",
        email:"",
        duration: "",
        joinDate: "",
        technology: "",
        attendance: "",
        project: "",
        status: "",
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
          ...user,
          [name]: value,
        });
      };
      const addData = async (event) => {
        event.preventDefault();
        
        axios
          .post("http://localhost:8002/students", user)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
        resetForm();
      };
    
      const resetForm = () => {
        setUser({
          interneeNo: "",
          name: "",
          image: "",
          duration: "",
          joinDate: "",
          technology: "",
          attendance: "",
          project: "",
          status: "",
        });
      };
  return (
    <>
      <div
        className="modal fade"
        id="kt_modal_Internee"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="row">
                <div className="col-md-6 my-1">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    onChange={handleChange}
                    value={user.name}
                    placeholder="type your name"
                    id="name"
                    required
                  />
                </div>
                <div className="col-md-6 my-1">
                  <label htmlFor="internee" className="form-label">
                    Internee_No
                  </label>
                  <input
                    type="number"
                    name="interneeNo"
                    className="form-control"
                    onChange={handleChange}
                    value={user.interneeNo}
                    id="internee"
                    required
                  />
                </div>
                <div className="col-md-12 my-1">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    onChange={handleChange}
                    value={user.email}
                    id="email"
                    required
                  />
                </div>
                <div className="col-md-6 my-1">
                  <label
                    htmlFor="validationServerUsername"
                    className="form-label">
                    Image
                  </label>
                  <div className="input-group has-validation">
                    <input
                      type="file"
                      name="image"
                      accept="image/jpeg"
                      className="form-control"
                      onChange={handleChange}
                      value={user.image}
                      id="validationServerUsername"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6 my-1">
                  <label htmlFor="validationServer03" className="form-label">
                    Attendance
                  </label>
                  <input
                    type="number"
                    name="attendance"
                    className="form-control"
                    onChange={handleChange}
                    value={user.attendance}
                    id="validationServerUsername"
                    required
                  />
                  {/* <input type="numbers" className="form-control" value={cnic} onChange={(e) => setCnic(e.target.value)} maxLength="13" pattern="\d{13}" placeholder='1234156789101' id="validationServer03" required /> */}
                </div>
                <div className="col-md-12 my-1">
                  <label htmlFor="validationServer03" className="form-label">
                    Project
                  </label>
                  <input
                    type="text"
                    name="project"
                    className="form-control"
                    onChange={handleChange}
                    value={user.project}
                    id="validationServer03"
                    required
                  />
                </div>
                <div className="col-md-6 my-1">
                  <label htmlFor="date" className="form-label">
                    Join Date
                  </label>
                  <input
                    type="date"
                    name="joinDate"
                    className="form-control"
                    onChange={handleChange}
                    value={user.joinDate}
                    id="date"
                    required
                  />
                </div>
                <div className="col-md-6 my-1">
                  <label htmlFor="validationServer05" className="form-label">
                    Duration
                  </label>
                  <select
                    className="form-select"
                    onChange={handleChange}
                    value={user.duration}
                    name="duration"
                    id="validationServer05"
                    required>
                    <option defaultValue disabled value=""></option>
                    <option value="1_Month">1_MONTH</option>
                    <option value="2_Month">2_MONTH</option>
                    <option value="3_Month">3_MONTH</option>
                    <option value="4_Month">4_MONTH</option>
                    <option value="5_Month">5_MONTH</option>
                    <option value="6_Month">6_MONTH</option>
                  </select>
                </div>
                <div className="col-md-6 my-1">
                  <label htmlFor="validationServer05" className="form-label">
                    Technology
                  </label>
                  <select
                    className="form-select"
                    name="technology"
                    onChange={handleChange}
                    value={user.technology}
                    id="validationServer04"
                    required>
                    <option defaultValue disabled value=""></option>

                    <option value="HTML/CSS">HTML/CSS</option>
                    <option value="Graphic Designing">Graphic Designing</option>
                    <option value="VIDEO EDITING">VIDEO EDITING</option>
                    <option value="ANIMATIONS">ANIMATIONS</option>
                    <option value="WORDPRESS">WORDPRESS</option>
                    <option value="PHP">PHP</option>
                    <option value="ASP.NET / MVC">ASP.NET / MVC</option>
                    <option value="LARAVEL">LARAVEL</option>
                    <option value="CODIGNITOR">CODIGNITOR</option>
                    <option value="Android Development">
                      Android Development
                    </option>
                    <option value="React Native">React Native</option>
                    <option value="JAVA EE/SE">JAVA EE/SE</option>
                    <option value="NODE JS">NODE JS</option>
                    <option value="REACT JS">REACT JS</option>
                    <option value="PYTHON">PYTHON</option>
                    <option value="C#">C#</option>
                    <option value="Flutter">Flutter</option>
                    <option value="SEO">SEO</option>
                    <option value="SQA">SQA</option>
                    <option value="DIGITAL MARKETING">DIGITAL MARKETING</option>
                    <option value="UNITY">UNITY</option>
                    <option value="BLOCKCHAIN">BLOCKCHAIN</option>
                    <option value="ARTIFICAL INTELLIGENCE">
                      ARTIFICAL INTELLIGENCE
                    </option>
                    <option value="PROJECT MANAGEMENT">
                      PROJECT MANAGEMENT
                    </option>
                    <option value="ADMINISTRATION">ADMINISTRATION</option>
                    <option value="NETWORKING">NETWORKING</option>
                    <option value="ACCOUNTING">ACCOUNTING</option>
                    <option value="OTHERS">OTHERS</option>
                  </select>
                </div>
                <div className="col-md-6 my-1">
                  <label htmlFor="validationServer05" className="form-label">
                    Status
                  </label>
                  <select
                    className="form-select"
                    onChange={handleChange}
                    value={user.status}
                    name="status"
                    id="validationServer05"
                    required>
                    <option defaultValue disabled value=""></option>
                    <option>On going</option>
                    <option>Pending</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal">
                Update
              </button>
              <button
                type="button"
                onClick={addData}
                className="btn btn-primary"
                data-bs-dismiss="modal">
                Add Internee
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
