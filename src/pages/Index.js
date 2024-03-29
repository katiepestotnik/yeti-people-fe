import {Link} from 'react-router-dom'
import { useState } from 'react'
const Index = ({ people, createPeople, findPerson }) => {
    const [form, setForm] = useState({
        name: '',
        image: '',
        title: ''
    })
    const handleChange = (e) => {
        setForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        createPeople(form)
        setForm({
            name: '',
            image: '',
            title: ''
        })
    }
    const [search, setSearch] = useState('')
  const handleSearch = (e) => {
    e.preventDefault()
    findPerson(search)
      setSearch('')
    }
  const handleSearchChange = (e) => {
      setSearch(e.target.value)
  }

  const loaded = () => {
      return people.map((person) => {
        return <div key={person._id} className='person'>
            <Link to={`/people/${person._id}`}>{person.name}</Link>
            <img src={person.image} alt={person.name} />
            <h3>{person.title}</h3>
        </div>
    })
  }
    
    const loading = () => {
        return(<h1>Loading...</h1>)
    }
    return (
      <section>
          <form onSubmit={handleSearch}>
            <input
            type='text'
            value={search}
            placeholder='Enter name to search'
            onChange={handleSearchChange}
            />
            <input type='submit' value='search'/>
          </form>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={form.name}
              name="name"
              placeholder="name"
              onChange={handleChange}
            />
            <input
              type="text"
              value={form.image}
              name="image"
              placeholder="image URL"
              onChange={handleChange}
            />
            <input
              type="text"
              value={form.title}
              name="title"
              placeholder="title"
              onChange={handleChange}
            />
            <input type="submit" value="Create Person" />
          </form>
          {people ? loaded() : loading()}
        </section>
      )
}
export default Index