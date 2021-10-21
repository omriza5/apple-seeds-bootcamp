import React, { useState } from "react";
import FormInput from "./formInput";
import FormSelect from "./formSelect";
import FormTextArea from "./formTextArea";
import FormButton from "./formButton";

const options = ["0-15", "16-30", "31-45"];
const FormReview = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    age: "0-15",
    freeText: "",
  });
  const [isReview, setIsReview] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    reviewForm();
  };

  const handleInputChange = (e) => {
    const property = e.currentTarget.name;
    setData({
      ...data,
      [property]: e.currentTarget.value,
    });
  };
  const reviewForm = () => {
    setIsReview(true);
  };
  return (
    <>
      {!sent && (
        <form onSubmit={handleSubmit}>
          <FormInput
            value={data.firstName}
            name="firstName"
            onInputChange={handleInputChange}
            placeholder="Enter Your First Name"
          />
          <FormInput
            value={data.lastName}
            name="lastName"
            onInputChange={handleInputChange}
            placeholder="Enter Your Last Name"
          />
          <FormSelect
            name="age"
            value={data.age}
            onInputChange={handleInputChange}
            selectData={options}
          />
          <FormTextArea
            name="freeText"
            value={data.freetext}
            onInputChange={handleInputChange}
          />
          <FormButton value="SUBMIT" />
        </form>
      )}
      {isReview && (
        <div className="reviewSection">
          <p>{data.firstName}</p>
          <p>{data.lastName}</p>
          <p>{data.age}</p>
          <p>{data.freeText}</p>
          <FormButton value="Back" onButtonClick={() => setIsReview(false)} />
          <FormButton
            value="Send Survey"
            onButtonClick={() => {
              setSent(true);
              setIsReview(false);
            }}
          />
        </div>
      )}
      {sent && (
        <p style={{ color: "green", fontSize: "5rem", fontWeight: "bold" }}>
          The data was sent successfully to the sever
        </p>
      )}
    </>
  );
};

export default FormReview;
