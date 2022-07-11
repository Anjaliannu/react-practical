import axios from "axios";

export const postTalentApi = async (
  first_name,
  last_name,
  username,
  email,
  password
) => {
  try {
    const talentData = await axios.post(
      "http://wren.in:3200/api/sign-up/talent",
      { first_name, last_name, username, email, password }
    );
    // console.log(talentData);
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
  try {
    const fanData = await axios.post("http://wren.in:3200/api/sign-up/fan", {
      first_name,
      last_name,
      username,
      email,
      password,
    });
    // console.log(fanData);
    return fanData;
  } catch (error) {
    console.log(error);
  }
};
