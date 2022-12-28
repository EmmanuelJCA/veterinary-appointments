import { useEffect, useState } from "react"
import Error from "./Error"


const Form = ({ patients, setPatients, patient, setPatient }) => {

  // Inputs state
  const [name, setName] = useState('')
  const [petOwner, setPetOwner] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [symptoms, setSymptoms] = useState('')

  // Errors state
  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(patient).length > 0) {
      setName(patient.name)
      setPetOwner(patient.petOwner)
      setEmail(patient.email)
      setDate(patient.date)
      setSymptoms(patient.symptoms)
    } else {

    }
  }, [patient])

  const generateId = () => {
    const random = Math.random().toString(36).substring(2)
    const date = Date.now().toString(36)

    return random + date
  }

  const handleSubmit = (event) => {
    event.preventDefault()

      // Validacion del Formulario
      if([ name, petOwner, email, date, symptoms ].includes('')) {
        setError(true)
        return
      } 

      setError(false)

      // Objeto de Paciente
      const PatientObject = {
        name, 
        petOwner, 
        email, 
        date, 
        symptoms
      }

      if(patient.id) {
        // Editando el registro
        PatientObject.id = patient.id

        const updatedPatients = patients.map( patientState => patientState.id === patient.id ? PatientObject : patientState)

        setPatients(updatedPatients)
        setPatient({})

      } else {
        // Nuevo registro
        PatientObject.id = generateId()
        setPatients([...patients, PatientObject])
      }

      // Reiniciar el formulario
      setName('')
      setPetOwner('')
      setEmail('')
      setDate('')
      setSymptoms('')

    console.log("enviando formulario")
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>
    
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administrarlos</span>
      </p>

      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
      >
        {error  &&  <Error><p>Todos los campos son obligatorios</p></Error>}
        <div className="mb-5">
          <label htmlFor="pet" className="block text-gray-700 uppercase font-bold">
            Nombre mascota
          </label>
          <input
            id="pet" 
            type="text"
            placeholder="Nombre del paciente"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={event => setName(event.target.value)}
            />
        </div>

        <div className="mb-5">
          <label htmlFor="pet-owner" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario
          </label>
          <input
            id="pet-owner" 
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={petOwner}
            onChange={event => setPetOwner(event.target.value)}
            />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email Propietario
          </label>
          <input
            id="email" 
            type="email"
            placeholder="Email del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={event => setEmail(event.target.value)}
            />
        </div>

        <div className="mb-5">
          <label htmlFor="discharged" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>
          <input
            id="discharged" 
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={date}
            onChange={event => setDate(event.target.value)}
            />
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea 
            id="symptoms"
            placeholder="Describe los sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={symptoms}
            onChange={event => setSymptoms(event.target.value)}
          />
        </div>

        <input 
          id=""
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={ patient.id ? 'Editar paciente' : 'Agregar paciente' }
        />

      </form>
    </div>
  )
}

export default Form

