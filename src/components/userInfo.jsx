import axios from "axios";
import React, {useState, useEffect} from "react";
import Typography from '@mui/material/Typography';

//import styles from './Package.scss';


const Userinfo = () => {
    const [data, setData] = useState(false)
    const [userRole, setUserRole] = useState('user')
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
    useEffect(() =>{
      setUserRole(localStorage.getItem('userRole'))
      loadData()
    }, [])

const loadData = async () => {
    console.log('loadData')
    
    await axios.get('http://localhost:8000/register/getall')
    .then((res) => {
        setDatas(res.data)
    })
    .catch((err) => console.log('>>>>err', err))
}

const setDatas = async (data) => {
        setData(data)
        console.log('data>>28>', data)
}


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
            User Info
      </Typography>


    <table className="customers">
      <thead>
        <tr> <th>No.</th>
          <th>Name</th> 
          <th>Surname</th> 
          <th>Tel</th> 
          <th>Username</th> 
          <th>ID</th>
          <th>Role</th>
        </tr>
      </thead>
        {
          data.length > 0 ? data.map((item, index) =>
      <tbody key={item._id}>
          <tr>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>{item.tel}</td>
            <td>{item.username}</td>
            <td>{item._id}</td>
            <td>{item.role}</td>
          </tr>
  </tbody>

            )
            :null
        }
    </table> 
    
    <a className="btn btn-sm btn-outline-secondary" href="/adminpage">Back</a>

  </div>
)

}

export default Userinfo;
