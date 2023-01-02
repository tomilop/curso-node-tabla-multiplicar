const empleados = [
    {
        id: 1,
        nombre: 'Tomás', 
    },
    {
        id: 2,
        nombre: 'Linda', 
    },
    {
        id: 3,
        nombre: 'Karen', 
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000, 
    },
    {
        id: 2,
        salario: 1500, 
    }
];


const getEmpleado = ( id ) => {


    return new Promise(( resolve, reject ) => {
        
        const empleado = empleados.find( e => e.id === id )?.nombre;

        ( empleado ) 
            ? resolve( empleado )
            : reject( `No existe el empleado con id: ${ id }` )
        
    });

  

}

const getSalario = () => {

    return new Promise( ( resolve, reject ) => {

        const salario = salarios.find( s => s.id === id )?.salario;
        
        ( salario )
            ? resolve( salario )
            : reject( `El salario del empleado ${ id } no existe!` )

    });


}

const getInfoUsuario = async() => {

    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario del empleado: ${ empleado }, es de: ${ salario }`;
    } catch (error) {
        throw error;
    }
}

const id = 10;

getInfoUsuario( id )
    .then( msg => {
        console.log('Correcto!')
        console.log(msg) 
    })
    
    .catch( err => {
        console.log('Fallo!')
        console.log(err)
    });


