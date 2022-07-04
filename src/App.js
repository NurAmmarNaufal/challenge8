import "./App.css";
import List from "./List";
import { useState } from 'react'
import { uid } from "uid";
import Select from 'react-select';


function App() {


  const [players, setPlayers] = useState([{
      id: 1,
      username: "player satu",
      email: "satu@aha.com",
      experience: "2thn",
      level: 5
    },
    {
      id: 2,
      username: "player dua",
      email: "dua@aha.com",
      experience: "1thn",
      level: 3
    }
  ])

  const [isUpdate, setIsUpdate] = useState({id: null, status: false})

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    experience: '',
    level: ''
  })

  function handleChange(e) {
    let data = { ...formData };
    data[e.target.name] = e.target.value;
    console.log(data);
    setFormData(data);
  }

  //menambahkan kontak
  function handleSubmit(e) {
    e.preventDefault();
    // alert("Submit");
    let data = [...players]
    
    if (formData.username === "") {
      return false;
    }
    if (formData.email === "") {
      return false;
    }
    if (formData.experience === "") {
      return false;
    }
    if (formData.level === "") {
      return false;
    }

    if (isUpdate.status){
      data.forEach((player) =>{
        if(player.id === isUpdate.id){
          player.username = formData.username;
          player.email = formData.email;
          player.experience = formData.experience;
          player.level = formData.level
        }
      })
    }else{
      data.push({ id: uid(), username: formData.username, email: formData.email, experience: formData.experience, level: formData.level})
    }

    setIsUpdate({id: null, status: false})
    setPlayers(data)
    setFormData({username: "", email: "", experience: "", level: ""})
  }

  function handleEdit(id){
    let data = [...players]
    let foundData = data.find((player) => player.id === id)
    setFormData({
      username: foundData.username, 
      email: foundData.email,
      experience: foundData.experience,
      level: foundData.level
    })
    setIsUpdate({id: id, status: true})
  }

  function handleDelete(id){
    let data = [...players]
    let filteredData = data.filter((player) => player.id !== id);
    setPlayers(filteredData)
  }

  let list = [
      {
          value: 1,
          label: 'username'
      },
      {
          value: 2,
          label: 'email'
      },
      {
          value: 3,
          label: 'experience'
      },
      {
          value: 4,
          label: 'level'
      }
  ]

  function selection(e){
    let aa = ''
    if(e.value === 1){
      players.map((dat) =>
        aa += dat.username + ', '
        // console.log(dat.username)
      )
    }else if(e.value === 2){
      players.map((dat) =>
        aa += dat.email + ', '
        // console.log(dat.email)
      )
    }else if(e.value === 3){
      players.map((dat) =>
        aa += dat.experience + ', '
        // console.log(dat.experience)
      )
    }else if(e.value === 4){
      players.map((dat) =>
        aa += dat.level + ', '
        // console.log(dat.level)
      )
    }

    alert(aa)
    // players.map((player) =>
    //   alert(player.dat)
    // )
    
    // console.log(players.e.label)
  }

  return (
    <div className="App">
      <h1 className="px-3 py-3">My player List</h1>

      <form onSubmit={handleSubmit} className="px-3 py-4">
        <div className="form-group">
          <label htmlFor="">Players</label>
          <input type="text" className="form-control" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="">Email</label>
          <input type="text" className="form-control" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="">Pengalaman</label>
          <input type="text" className="form-control" name="experience" value={formData.experience} onChange={handleChange} />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="">Level</label>
          <input type="text" className="form-control" name="level" value={formData.level} onChange={handleChange} />
        </div>
        <div>
          <button type="submit" className="btn btn-primary w-100 mt-3">
            Save
          </button>
        </div>
      </form>
      <br/>
      <div className="form-group mt-3">
        <label htmlFor="">Lihat Berdasarkan...</label>
        <Select options={list} onChange={selection}/>
      </div>

      <List handleDelete={handleDelete} handleEdit={handleEdit} data={players} />
    </div>
  );
}

export default App;