const Patient = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase"> 
            Nombre: {''} <span className="font-normal normal-case">Hook</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase"> 
            Propietario: {''} <span className="font-normal normal-case">Emmanuel</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase"> 
            Email: {''} <span className="font-normal normal-case">emmanuel@gmail.com</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase"> 
            Fecha Alta: {''} <span className="font-normal normal-case">20/08/2023</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase"> 
            Sintomas: {''} <span className="font-normal normal-case">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium corporis facere reprehenderit optio rem minus placeat consectetur beatae, cupiditate, adipisci itaque? Expedita ab eum, debitis cum consequuntur facilis ea omnis?</span>
        </p>
    </div>
  )
}

export default Patient
