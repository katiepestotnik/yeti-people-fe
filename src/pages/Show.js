import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
function Show(props) {
    const [person, setPerson] = useState({
        name: '',
        title: '',
        image: ''
  })  
  const { id } = useParams()
//   const person = props.people?.find((person) => person._id === id)
    let navigate = useNavigate()
    const URL = `http://localhost:3001/people/${id}`
    const getPerson = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setPerson(data)
    }
    useEffect(()=>{getPerson()},[])



  // handleChange function for form
  const handleChange = (event) => {
    setPerson((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  // handlesubmit for form
  const handleSubmit = (event) => {
    event.preventDefault()
      props.updatePeople(person, id)
    // redirect people back to index
    navigate("/")
  }
    const removePerson = () => {
        props.deletePeople(person._id)
        navigate('/')
    }
    const loaded = () => {
        return (
            <div className="person">
              <h1>{person?.name}</h1>
              <h2>{person?.title}</h2>
                  <img src={person?.image} alt={person?.name} />
                  <button id="delete" onClick={removePerson}>
                DELETE
              </button>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={person.name}
                  name="name"
                  placeholder="name"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  value={person.image}
                  name="image"
                  placeholder="image URL"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  value={person.title}
                  name="title"
                  placeholder="title"
                  onChange={handleChange}
                />
                <input type="submit" value="Update Person" />
                  </form>
            </div>
          )
    }
    const loading = () => {
        return (<h1>Loading..</h1>)
    }
    return person? loaded():loading()
}

export default Show