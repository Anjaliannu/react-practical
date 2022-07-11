import axios from "axios";

 export const postTalentApi = async (
  first_name,
  last_name,
  username,
  email,
  password
) => {
  const formData = new FormData();

  formData.append("firstname", first_name);
  formData.append("lastname", last_name);
  formData.append("username", username);
  formData.append("email", email);
  formData.append("password", password);
  
  try {
    const talentData = await axios.post(
      "http://wren.in:3200/api/sign-up/talent",
     formData
    );
    console.log(talentData);
    return talentData;
  } catch (error) {
    console.log(error);
  }
};
export const postFanApi = async (
  first_name,
  last_name,
  username,
  email,
  password
) => {
  const formData = new FormData();

  formData.append("firstname", first_name);
  formData.append("lastname", last_name);
  formData.append("username", username);
  formData.append("email", email);
  formData.append("password", password);
  
  try {
    const talentData = await axios.post(
      "http://wren.in:3200/api/sign-up/fan",
     formData
    );
    console.log(talentData);
    return talentData;
  } catch (error) {
    console.log(error);
  }
};
