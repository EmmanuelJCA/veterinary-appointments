import Patient from "./Patient"

const PatientList = ({patients}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">
        Listado Pacientes
      </h2>

      <p className="text-xl mt-5 text-center">
        Administra tus {''}
        <span className="text-indigo-600 font-bold">Pacientes y citas</span>
      </p>

      <div className="md:h-screen md:overflow-scroll">

        { patients.map( patient => (
          <Patient
            patient={patient}
          />
        ))}
      </div>
    </div>

  )
}

export default PatientList

