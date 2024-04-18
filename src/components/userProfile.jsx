import axios from "axios";
import React, { useState, useEffect } from "react";
//import styles from './Package.scss';
import styles from './userProfile.scss'
import Typography from '@mui/material/Typography';


const Userprofile = () => {
  const [data, setData] = useState();
  const [userRole, setUserRole] = useState("user");
  const [userProfile, setUserProfile] = useState();
  // console.log('-*-*-*-*-*',userRole)
  // console.log('-*-*-*-*-*',UserProfile)
  console.log("-*-*-*-*-*", data);

  //const [showEdit, setShowEdit] = useState({})
  //const [editView, isEditView] = useState(false)
  //const [addView, isAddView] = useState(false)
  //const [form, setForm] = useState({});
  // const handleChange = (e) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   });
  //   console.log('form', form)
  // };

  useEffect(() => {
    setUserRole(localStorage.getItem("userRole"));
    setUserProfile(localStorage.getItem("userId"));
    loadData();
  }, [userRole, userProfile]);

  //   const setUser_Id = async () => {
  //     setUserProfile(localStorage.getItem('userId'))
  //     console.log('setUser_Id=================37', userProfile)
  //     //localhost:8000/profile?id=65d0b32f0a3b9db8cdb40d04
  // }

  const loadData = async () => {
    if (userProfile)
      await axios
        .get(`http://localhost:8000/profile?id=${userProfile}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(">>>>err", err));
  };

  // const setDatas = async (data) => {
  //         setData(data)
  //         console.log('data>>53>', data)
  // }

  // const viewEdit = async (data) => {
  //   setShowEdit(data)
  //   isEditView(true)
  //   console.log('viewEdit>>>>>34', data, 'editView', editView)
  // }

  // const viewEditClose = async () => {
  //   isEditView(false)
  // }

  // const viewEditSubmit = async (data) => {
  //   form._id = showEdit._id
  //   console.log('loadData>>>', form)
  //   await axios.post('http://localhost:8000/register/update', form)
  //   .then((res) => {
  //     loadData()
  //   })
  //   .catch((err) => console.log('>>>>err', err))
  // }

  // const viewAdd = async (data) => {
  //   setShowEdit(data)
  //   isAddView(true)
  //   console.log('viewEdit>>>>>34', data, 'editView', editView)
  // }

  // const viewAddClose = async () => {
  //   isAddView(false)
  // }

  // const viewAddSubmit = async (data) => {
  //   console.log('73loadData>>>', form)
  //   await axios.post('http://localhost:8000/register', form)
  //   .then((res) => {
  //     loadData()
  //   })
  //   .catch((err) => console.log('>>>>err', err))
  // }
  
  return (
    <div>
      {/* HTML */}
      <Typography component="h1" variant="h7">
            Profile
      </Typography>

      <table className="customers" >
        <thead>
          <tr>
            {/* {" "}
            <br></br> */}
            <th>Name</th>
            <th>Surname</th>
            <th>Tel</th>
            <th>Username</th>
          </tr>
        </thead>
        {data ? (
          <tbody key={data._id}>
            <tr>
              <td>{data.name}</td>
              <td>{data.surname}</td>
              <td>{data.tel}</td>
              <td>{data.user}</td>
            </tr>
          </tbody>
        ) : null}
      </table>

      <a className="btn btn-sm btn-outline-secondary" href="/userpage">
        Back
      </a>
    </div>
  );
};

export default Userprofile;
