import React, { Component } from "react";
import { Formik } from "formik";
import "./AddItemComponent.css";
import AuthenticationService from "../../Authentication/AuthenticationService";
class AddItemComponent extends Component {
  render() {
    //   private String userName;
    // private String gameName;
    // private String itemType;
    // private String itemName;
    // private String description;
    // private float price;
    return (
      <div>
        <Formik
          initialValues={{
            username: this.props.match.params.name,
            gameName: "",
            ItemType: "",
            ItemName: "",
            description: "",
            price: 0,
          }}
          // validate={(values) => {
          //   const errors = {};
          //   if (!values.email) {
          //     errors.email = "Required";
          //   } else if (
          //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          //   ) {
          //     errors.email = "Invalid email address";
          //   }
          //   return errors;
          // }}
          onSubmit={(values) => {
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            // }, 400);
            // setSubmitting(false);
            AuthenticationService.addUserItem(values);
            console.log(values);
          }}
        >
          {({
            values,
            // errors,
            // touched,
            handleChange,
            // handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <div className="form-group mainform">
              <form onSubmit={handleSubmit}>
                <label>Game Name</label>
                <input
                  type="text"
                  name="gameName"
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  value={values.gameName}
                  className="form-control"
                />

                {/* {errors.email && touched.email && errors.email} */}
                <label>Item Type</label>
                <input
                  type="text"
                  name="ItemType"
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  value={values.ItemType}
                  className="form-control"
                />
                {/* {errors.password && touched.password && errors.password} */}
                <label>Item Name</label>
                <input
                  type="text"
                  name="ItemName"
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  value={values.ItemName}
                  className="form-control"
                />
                <label>description`</label>
                <input
                  type="text"
                  name="description"
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  value={values.description}
                  className="form-control "
                />
                <label>Price</label>
                <input
                  type="number"
                  name="price"
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  value={values.price}
                  className="form-control"
                />
                <button
                  type="submit"
                  className="btn btn-md btn-primary"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </Formik>
      </div>
    );
  }
}

export default AddItemComponent;
