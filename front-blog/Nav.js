// Definición del componente Nav que recibe las props onDelete, onSave, onNewPost y selectedPost
function Nav({ onDelete, onSave, onNewPost, selectedPost }) {
    // Declaración del estado isEditing con el hook useState para controlar el modo de edición
    const [isEditing, setIsEditing] = React.useState(false);
    // Declaración del estado inputValue con el hook useState para almacenar el valor del input
    const [inputValue, setInputValue] = React.useState('');

    // Estilos para la barra de navegación
    const EstiloNavegacion = {
        width: '100%', // Ancho completo
        height: '10%', // Altura del 10% del contenedor
        display: 'flex', // Utiliza flexbox para alinear los elementos
    };

    // Estilos para los botones
    const EstiloBOton = {
        backgroundColor: '#352c7d', // Color de fondo del botón
        color: 'white', // Color del texto del botón
        width: '150px', // Ancho del botón
        height: '30px', // Altura del botón
        borderRadius: '35px', // Bordes redondeados
        marginLeft: '20px', // Margen izquierdo
        cursor: 'pointer', // Cambia el cursor al pasar sobre el botón
    };

    // Estilos para el input de edición
    const inputStyle = {
        height: '30px', // Altura del input
        marginRight: '10px', // Margen derecho
        padding: '0 10px', // Relleno interno
        borderRadius: '5px', // Bordes redondeados
        border: '1px solid #352c7d', // Borde del input
    };

    // Función para manejar el clic en el botón de editar
    // Activa el modo de edición
    const handleClciEditar = () => {
        setIsEditing(true);
    };

    // Función para manejar el clic en el botón de guardar
    // Llama a la función onSave pasada como prop y desactiva el modo de edición
    const handleSaveClick = () => {
        onSave();
        setIsEditing(false);
    };

    // Función para manejar el clic en el botón de borrar
    // Elimina el post seleccionado a través de una solicitud DELETE a la API
    const handleClikcBOrrar = async () => {
        if (!selectedPost) {
            console.error('No hay post seleccionado para borrar');
            return;
        }

        const response = await fetch(`http://localhost:3000/posts/${selectedPost.id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            onDelete(); // Llama a la función onDelete pasada como prop
        } else {
            console.error('Error al borrar el post');
        }
    };

    // Función para manejar el cambio en el input
    // Actualiza el estado inputValue con el valor del input
    const handleInputCambio = (event) => {
        setInputValue(event.target.value);
    };

    // Renderizado del componente
    return (
        <div style={EstiloNavegacion}>
            {/* Botón para borrar el post seleccionado */}
            <button style={EstiloBOton} onClick={handleClikcBOrrar}>Delete</button>
            {/* Botón para crear un nuevo post */}
            <button style={EstiloBOton} onClick={onNewPost}>New Post</button>
            {/* Botón para activar el modo de edición */}
            <button style={EstiloBOton} onClick={handleClciEditar}>Edit</button>
            {/* Input de edición que solo se muestra si isEditing es true */}
            {isEditing && (
                <input
                    type="text"
                    style={inputStyle}
                    value={inputValue}
                    onChange={handleInputCambio}
                    placeholder="Enter data..."
                />
            )}
        </div>
    );
}
