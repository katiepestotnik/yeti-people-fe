import {useEffect, useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from '../pages/Index'
import Show from '../pages/Show'
import '../styles.scss'
import Test from '../pages/Test'
const Main = () => {
    const [people, setPeople] = useState([])
    const URL = `http://localhost:3001/people/`
    const getPeople = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setPeople(data)
    }
    const findPerson = async (search) => {
        const response = await fetch(URL)
        const data = await response.json()
        data.forEach((person) => {
            console.log(person)
            if (person.name === search) {
                setPeople([person])
            }
        })

    }
    const createPeople = async(person) => {
        await fetch(URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify(person)
        })
        getPeople()
    }
    const updatePeople = async (person, id) => {
        await fetch(URL + id, {
            method: 'PUT',
            headers: {
                'Content-Type': "Application/json"
            },
            body: JSON.stringify(person)
        })
        getPeople()
    }
    const deletePeople = async (id) => {
        await fetch(URL + id, {
            method: 'DELETE'
        })
        getPeople()
    }
    useEffect(() => { getPeople() }, [])
    console.log(people)
    return (
    <main>
        <Routes>
            <Route
                exact path='/'
                element={<Index
                people={people}
                createPeople={createPeople}
                findPerson={findPerson}
                />} />
            <Route path='/people/:id' element={<Show
                people={people}
                updatePeople={updatePeople}
                    deletePeople={deletePeople} />} />    
            <Route path='/people/test' element={<Test/> }
                />
        </Routes>    
    </main>)
}
export default Main