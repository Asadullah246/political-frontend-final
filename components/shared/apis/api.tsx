import axios from "axios";
// import { IInsurance, IUser } from "../types";

// const base = 'https://careplan-backend.vercel.app'
// const base = 'https://care-plan-backend-main.vercel.app'
export const base ='http://localhost:5000'





// new codes

// home page name and email post ( subscribe )
export const createSubscribe = async (data:any) => {
  try {
    const res = await axios.post(`${base}/api/v1/newslatter`, data);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("refresh", res.data.refresh);
    if (res) return res.data;
  } catch (error) {
    console.log("err is", error);
  }
};

// testimonial  getMethod 
export const getTest = async () => {
  try {
    const config = {
      headers: {
        token: localStorage.getItem("token") || "",
      },
    };
    const res = await axios.get(`${base}/api/v1/testimonial`, config);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// faq
export const createFaq = async (data:any) => {
  try {
    const res = await axios.post(`${base}/api/v1/faq`, data);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("refresh", res.data.refresh);
    if (res) return res.data;
  } catch (error) {
    console.log("err is", error);
  }
};

export const askQuestions = async (data:any) => {
  try {
    const res = await axios.post(`${base}/api/v1/askquestions`, data);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("refresh", res.data.refresh);
    if (res) return res.data;
  } catch (error) {
    console.log("err is", error);
  }
};

export const getfaq = async () => {
  try {
    const config = {
      headers: {
        token: localStorage.getItem("token") || "",
      },
    };
    const res = await axios.get(`${base}/api/v1/faq`, config);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateakedquestions = async (id:string, data:any) => {
  try {
    const config = {
      headers: {
        token: localStorage.getItem("token") || "",
      },
    };
    const res = await axios.patch(`${base}/api/v1/askQuestions/${id}`, data, config);

    return res?.data;
  } catch (error) {
    console.log(error);
  }
};

// faq

// contact
export const createTestimonial = async (data:any) => {
  try {
    const res = await axios.post(`${base}/api/v1/testimonial`, data);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("refresh", res.data.refresh);
    if (res) return res.data;
  } catch (error) {
    console.log("err is", error);
  }
};

// delete for blog
export const deleteBlog = async (id) => {
  try {
    const headers = {
      token: localStorage.getItem("refresh") || "",
    };
    const res = await axios.delete(`${base}/api/v1/blogs/${id}`, { headers });
    return res;
  } catch ( {message} ) {
    console.log(message);
  }
};

export const deleteTest = async (id) => {
  try {
    const headers = {
      token: localStorage.getItem("refresh") || "",
    };
    const res = await axios.delete(`${base}/api/v1/testimonial/${id}`, { headers });
    return res;
  } catch ( {message} ) {
    console.log(message);
  }
};

// contact
export const createContact = async (data:any) => {
  try {
    const res = await axios.post(`${base}/api/v1/contact`, data);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("refresh", res.data.refresh);
    if (res) return res.data;
  } catch (error) {
    console.log("err is", error);
  }
};
export const updateContactInfo = async (id:string, data:any) => {
  try {
    const config = {
      headers: {
        token: localStorage.getItem("token") || "",
      },
    };
    const res = await axios.patch(`${base}/api/v1/contact/${id}`, data, config);

    return res?.data;
  } catch (error) {
    console.log(error);
  }
};

// contact i

// profile info
export const activeAccount = async (data:any) => {
  try {
    const res = await axios.post(`${base}/api/v1/user`, data);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("refresh", res.data.refresh);
    if (res) return res.data;
  } catch (error) {
    console.log("err is", error);
  }
};

export const updateProfileInfo = async (id:string, data:any) => {
  try {
    const config = {
      headers: {
        token: localStorage.getItem("token") || "",
      },
    };
    const res = await axios.patch(`${base}/api/v1/user/${id}`, data, config);

    return res?.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (id) => {
  try {
    const headers = {
      token: localStorage.getItem("refresh") || "",
    };
    const res = await axios.delete(`${base}/user/${id}`, { headers });
    return res?.data;
  } catch ( {message} ) {
    console.log(message);
  }
};



// profile info
// update website info
export const updateWebsiteInfo = async ( data:any) => {
  try {
    const config = {
      headers: {
        token: localStorage.getItem("token") || "",
      },
    };
    const res = await axios.patch(`${base}/api/v1/websiteInfo`, data, config);

    console.log("resdata is", res)


    return res.data?.user;
  } catch (error) {
    console.log(error);
  }
};

// create new  info

export const newWebsiteInfo = async (data:any) => {
  try {
    const res = await axios.post(`${base}/api/v1/websiteInfo`, data);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("refresh", res.data.refresh);
    if (res) return res.data;
  } catch (error) {
    console.log("err is", error);
  }
};
// blog api start
export const CreatingNewBlog = async (data: any) => {
  try {
    const res = await axios.post(`${base}/api/v1/blogs`, data);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("refresh", res.data.refresh);
    if (res) return res.data;
  } catch (error) {
    console.log("err is", error);
  }
};
// blog api end



// get webstie info

export const getSiteInfo = async () => {
  try {
    const config = {
      headers: {
        token: localStorage.getItem("token") || "",
      },
    };
    const res = await axios.get(`${base}/api/v1/websiteInfo`, config);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// new codes




export const registerUser = async (user: IUser) => {
  try {
    const res = await axios.post(`${base}/users/register`, user);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("refresh", res.data.refresh);
    if (res) return res.data.user;
  } catch (error) {
    console.log("err is", error);
  }
};

export const refreshUser = async (refresh: string) => {
  const config = {
    headers: {
      refresh,
    },
  };
  try {
    const res = await axios.get(`${base}/users/refresh`, config);
    if (res.data) localStorage.setItem("token", res.data.token);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (data: any) => {
  try {
    const res = await axios.post(`${base}/users/login`, data);
    if (res.data) localStorage.setItem("token", res.data.token);
    if (res.data) localStorage.setItem("refresh", res.data.refresh);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllPatient = async () => {
  try {
    const config = {
      headers: {
        token: localStorage.getItem("token") || "",
      },
    };
    const res = await axios.get(`${base}/patients`, config);
    return res.data.patients;
  } catch (error) {
    console.log(error);
  }
};

export const getAllTeamMember = async () => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.get(`${base}/team-member`, { headers });
    return res.data.members;
  } catch (error) {
    console.log(error);
  }
};

export const updateTeamMember = async (id: string, update: any) => {
  try {
    const config = {
      headers: {
        token: localStorage.getItem("token") || "",
      },
    };
    const res = await axios.patch(`${base}/team-member/${id}`, update, config);

    return res.data.member;
  } catch (error) {
    console.log(error);
  }
};

export const addTeamMember = async (member: IUser) => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.post(`${base}/team-member`, member, { headers });
    return res.data.member;
  } catch (error) {
    console.log(error);
  }
};

export const addPatient = async (member: IUser) => {

  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.post(`${base}/patients`, member, { headers });

    return res.data.patient;
  } catch ({ message }) {
    console.log(message);
  }
};

export const findPatient = async (id: any) => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.get(`${base}/patients/${id}`, { headers });
    return res;
  } catch (error) {
    return error;
  }
};

export const updatePatient = async (pid: string, info: any) => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.patch(`${base}/patients/${pid}`, info, {
      headers,
    });
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};


export const addPrimaryInsurance = async (primaryInsurance: IInsurance, pid: string) => {

  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.post(
      `${base}/patients/primaryinsurance/${pid}`,
      { primary: primaryInsurance },
      { headers }
    );

    return res;
  } catch ({ message }) {
    console.log(message);
  }
};


export const addSecondaryInsurance = async (secondaryInsurance: IInsurance, pid: string) => {

  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.post(
      `${base}/patients/secondaryinsurance/${pid}`,
      { secondary: secondaryInsurance },
      { headers }
    );

    return res;
  } catch ({ message }) {
    console.log(message);
  }
};
export const updatePrimaryInsurance = async (primaryInsurance: IInsurance, id: string) => {

  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.patch(
      `${base}/patients/insurance/${id}`,
      { primary: primaryInsurance },
      { headers }
    );

    return res;
  } catch ({ message }) {
    console.log(message);
  }
};

export const findInsurance = async (id: string) => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.get(`${base}/patients/insurance/${id}`, {
      headers,
    });
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const logoutUserApi = async () => {
  try {
    const headers = {
      token: localStorage.getItem("refresh") || "",
    };
    const res = await axios.delete(`${base}/users/logout`, { headers });
    return res;
  } catch ({ message }) {
    console.log(message);
  }
};

export const changePassword = async (value: any) => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.patch(`${base}/users/update-password`, value, {
      headers,
    });
    return res.status;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// reset password
export const sendResetPassEmail = async (email: any) => {
  try {

    const res = await axios.post(`${base}/users/reset-password`, email);

    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// update reset password
export const resetPassword = async (token: any, pass: string) => {
  try {
    const res = await axios.post(`${base}/users/reset-pass/${token}`, {
      password: pass,
    });
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const updateUser = async (user: IUser) => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.patch(`${base}/users/update`, user, {
      headers,
    });
    return res.status;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getUserData = async () => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.get(`${base}/users/me`, {
      headers,
    });
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// fee schedule section
export const getAllSchedule = async () => {
  try {
    const config = {
      headers: {
        token: localStorage.getItem("token") || "",
      },
    };
    const res = await axios.get(`${base}/fee-schedule`, config);
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getScheduleByCaseType = async (query: any) => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.patch(`${base}/fee-schedule`, query, { headers });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getDefaultFeeSchedule = async () => {
  try {
    const config = {
      headers: {
        token: localStorage.getItem("token") || "",
      },
    };
    const res = await axios.get(`${base}/fee-schedule/default`, config);
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const setDefaultFeeSchedule = async (id: string) => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.get(`${base}/fee-schedule/default/${id}`, { headers });

    return res;
  } catch ({ message }) {
    console.log(message);
  }
};

export const addFeeSchedule = async (schedule: any) => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.post(`${base}/fee-schedule`, schedule, { headers });

    return res;
  } catch ({ message }) {
    console.log(message);
  }
};

export const updateFeeSchedule = async (schedule: any) => {
  const sID = schedule._id;
  delete schedule._id;
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.patch(`${base}/fee-schedule/${sID}`, schedule, {
      headers,
    });
    return res;
  } catch ({ message }) {
    console.log(message);
  }
};
export const deleteFeeSchedule = async (id: string) => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.delete(`${base}/fee-schedule/${id}`, {
      headers,
    });
    return res;
  } catch ({ message }) {
    console.log(message);
  }
};

// sales tax

export const getSalesTax = async () => {
  try {
    const config = {
      headers: {
        token: localStorage.getItem("token") || "",
      },
    };
    const res = await axios.get(`${base}/fee-schedule/salestax`, config);
    return res.data.salesTax[0];
  } catch (error) {
    return error;
  }
};

export const updateSalesTax = async (id: string, tax: number) => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.patch(
      `${base}/fee-schedule/salestax/${id}`,
      { salesTax: tax },
      {
        headers,
      }
    );

    return res;
  } catch ({ message }) {
    console.log(message);
  }
};

// member section
export const deleteMember = async (tid: any) => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.delete(`${base}/team-member/${tid}`, { headers });
    return res;
  } catch ({ message }) {
    console.log(message);
  }
};

// addons api
export const getAddonList = async () => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.get(`${base}/addons`, { headers });
    return res.data.addOnsList;
  } catch (error) {
    console.log(error);
  }
};

// xray api

export const getXrayList = async () => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.get(`${base}/xrays`, { headers });
    return res.data.XrayList;
  } catch (error) {
    console.log(error);
  }
};

// exams api
export const getExamList = async () => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.get(`${base}/exams`, { headers });
    return res.data.examList;
  } catch (error) {
    console.log(error);
  }
};

// therapies api
export const getTherapyList = async () => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.get(`${base}/therapies`, { headers });
    return res.data.therapyList;
  } catch (error) {
    console.log(error);
  }
};

// care plan api
export const createCarePlan = async (info: any) => {

  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.post(`${base}/careplan`, info, {
      headers,
    });
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getPreviousCarePlan = async (id: string) => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.get(`${base}/careplan/${id}`, { headers });
    return res;
  } catch (error) {
    console.log(error);
  }
};

// care plan type api
export const createCarePlanType = async (info: any) => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.post(`${base}/careplan/type`, info, {
      headers,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getCarePlanTypeList = async () => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.get(`${base}/careplan/type`, { headers });
    return res.data.plansType;
  } catch (error) {
    console.log(error);
  }
};

export const updateCarePlanType = async (info: any, id: string) => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.patch(`${base}/careplan/type/${id}`, info, {
      headers,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getCarePlanType = async (id: any) => {
  try {

    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.get(`${base}/careplan/type/${id.id}`, {
      headers,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCarePlanType = async (id: any) => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.delete(`${base}/careplan/type/${id}`, { headers });
    return res;
  } catch (error) {
    return error;
  }
};

export const getCarePlanBySOC = async (query: any) => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.patch(`${base}/careplan/type`, query, {
      headers,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

// template builder section
export const createNewTemplate = async (data: any) => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.post(`${base}/template`, data, {
      headers,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getTemplateByType = async (type: any) => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.get(`${base}/template/type/${type}`, { headers });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getTemplateList = async () => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.get(`${base}/template`, { headers });
    return res?.data.templates;
  } catch (error) {
    console.log(error);
  }
};

export const getTemplateById = async (id: string) => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.get(`${base}/template/${id}`, { headers });
    return res?.data.template;
  } catch (error) {
    return error;
  }
};

export const updateTemplate = async (data: any, id: string) => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.patch(`${base}/template/${id}`, data, {
      headers,
    });
    return res;
  } catch (error) {
    return error;
  }
};

// code list section

export const getCodeList = async () => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.get(`${base}/code`, { headers });
    return res;
  } catch (error) {
    return error;
  }
};

export const getACode = async (id: any) => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.get(`${base}/code/${id}`, { headers });
    return res;
  } catch (error) {
    return error;
  }
};

export const createNewCode = async (data: any) => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.post(`${base}/code`, data, {
      headers,
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const updateCode = async (data: any, id: string) => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.patch(`${base}/code/${id}`, data, {
      headers,
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const updateBulkCodes = async (codes: any) => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const promises = codes.map(async (code: any) => {
      const res = await axios.patch(
        `${base}/code/${code._id}`,
        { amount: code.amount },
        {
          headers,
        }
      );
      return res.data;
    });
    const res = await Promise.all(promises);
    return res;
  } catch (error) {
    return error;
  }
};

export const queryCode = async (query: any) => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.patch(`${base}/code`, query, {
      headers,
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const deleteCode = async (cid: string) => {
  try {
    const headers = {
      token: localStorage.getItem("token") || "",
    };
    const res = await axios.delete(`${base}/code/${cid}`, { headers });
    return res;
  } catch (error) {
    return error;
    console.log(error);
  }
};
