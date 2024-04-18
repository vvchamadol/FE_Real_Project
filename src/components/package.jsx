import axios from "axios";
import React, {useState, useEffect} from "react";
import Typography from '@mui/material/Typography';
import { TextField } from "@mui/material";

//import styles from './Package.scss';


const Package = () => {
    const [data, setData] = useState(false)
    const [userRole, setUserRole] = useState('user')
    const [showEdit, setShowEdit] = useState({})
    const [editView, isEditView] = useState(false)
    const [addView, isAddView] = useState(false)
    const [form, setForm] = useState({});
    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
      console.log('form', form)
    };
    useEffect(() =>{
      setUserRole(localStorage.getItem('userRole'))
      loadData()
    }, [])

const loadData = async () => {
    console.log('loadData')
    
    await axios.get('http://localhost:8000/package/getall')
    .then((res) => {
        setDatas(res.data)
    })
    .catch((err) => console.log('>>>>err', err))
}

const setDatas = async (data) => {
        setData(data)
        console.log('data>>28>', data)
}

const viewEdit = async (data) => {
  setShowEdit(data)
  isEditView(true)
  console.log('viewEdit>>>>>34', data, 'editView', editView)
}


const viewEditClose = async () => {
  isEditView(false)
}

const viewEditSubmit = async (data) => {
  form._id = showEdit._id
  console.log('loadData>>>', form)
  await axios.post('http://localhost:8000/package/update', form)
  .then((res) => {
    loadData()
  })
  .catch((err) => console.log('>>>>err', err))
}

const viewAdd = async (data) => {
  setShowEdit(data)
  isAddView(true)
  console.log('viewEdit>>>>>34', data, 'editView', editView)
}


const viewAddClose = async () => {
  isAddView(false)
}

const viewAddSubmit = async (data) => {
  console.log('73loadData>>>', form)
  await axios.post('http://localhost:8000/package', form)
  .then((res) => {
    loadData()
  })
  .catch((err) => console.log('>>>>err', err))
}

return (
  
  <div>
      {/* editView */}
      { editView ? 

    <div className="editView">
      <button onClick={() => viewEditClose()}>Close</button>
        <div className="editZone">
          <TextField type="text" name="name" placeholder={showEdit.name} id="package" onChange={handleChange} /> <br/>
          <TextField type="text" name="info" placeholder={showEdit.info} id="info" onChange={handleChange}/> <br/>
          <TextField type="text" name="prices" placeholder={showEdit.prices} id="prices" onChange={handleChange} /> <br/>
          <TextField type="text" name="size" placeholder={showEdit.size} id="size" onChange={handleChange}/>
        </div>
      <button onClick={() => viewEditSubmit()}>Edit</button>
    </div> : <></> }
      

      { addView ? 
      <div className="addView">
      <button onClick={() => viewAddClose()}>Close</button>
        <div className="addZone">
          <TextField type="text" name="name" placeholder="name" id="package" onChange={handleChange}/> <br/>
          <TextField type="text" name="info" placeholder="info" id="info" onChange={handleChange} /> <br/>
          <TextField type="text" name="prices" placeholder="prices" id="prices" onChange={handleChange} /> <br/>
          <TextField type="text" name="size" placeholder="size" id="size" onChange={handleChange} />
        </div>
      <button onClick={() => viewAddSubmit()}>Add</button>

      </div> : <></> }

      {/* HTML */}
      <Typography component="h1" variant="h7">
            Package Cleaning
      </Typography>

    <table className="customers">
      <thead>
        <tr> <th>No.</th>
          <th>Package Name</th> 
          <th>Package info</th> 
          <th>Prices</th> 
          <th>Size</th> 
        </tr>
      </thead>
        {
          data.length > 0 ? data.map((item, index) =>
      <tbody key={item._id}>
          <tr>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.info}</td>
            <td>{item.prices}</td>
            <td>{item.size}</td>
            
            { userRole === 'admin' ?  <button onClick={() => viewEdit(item)}>Edit</button> : <></> }
            
          </tr>
  </tbody>

            )
            :null
        }
    </table> 
        <div>
        { userRole === 'admin' ?  <button onClick={() => viewAdd()}>Add Package</button> : <></> } <br/>
        { userRole === 'admin' ?  <a className="btn btn-sm btn-outline-secondary" href="/adminpage">Back</a> : <></> }
        { userRole === 'user' ?  <a className="btn btn-sm btn-outline-secondary" href="/userpage">Back</a> : <></> }
        </div>
  </div>
)

}

export default Package;
