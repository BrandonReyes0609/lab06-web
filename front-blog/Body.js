// Definición del componente Body que recibe props: post, isNewPostMode y onSavePost
function Body({ post, isNewPostMode, onSavePost }) {

    // Declaración del estado newPost con el hook useState
    // Inicializa el estado con un objeto que tiene campos para título, banner, contenido y locationU
    const [newPost, setNewPost] = React.useState({
        title: '',
        banner: '',
        content: '',
        locationU: 0
    });

    // Función para manejar el cambio en el campo de título
    // Actualiza el estado newPost con el nuevo valor del título
    const handleTitleChange = (event) => {
        setNewPost({ ...newPost, title: event.target.value });
    };

    // Función para manejar el cambio en el campo de banner
    // Actualiza el estado newPost con el nuevo valor del banner
    const handlebannerChange = (event) => {
        setNewPost({ ...newPost, banner: event.target.value });
    };

    // Función para manejar el cambio en el campo de contenido
    // Actualiza el estado newPost con el nuevo valor del contenido
    const handleContentChange = (event) => {
        setNewPost({ ...newPost, content: event.target.value });
    };

    // Función para manejar el cambio en el campo de ubicación (locationU)
    // Convierte el valor del input a entero y actualiza el estado newPost con el nuevo valor de locationU
    const handlelocationUChange = (event) => {
        setNewPost({ ...newPost, locationU: parseInt(event.target.value) });
    };

    // Función para manejar el clic en el botón de guardar
    // Envía una solicitud POST al servidor para guardar el nuevo post
    const handleSaveClick = async () => {
        const response = await fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        });

        // Verifica si la respuesta es correcta y llama a onSavePost si lo es
        if (response.ok) {
            onSavePost(); // Llamada a la función onSavePost pasada como prop
        } else {
            console.error('Error al guardar el nuevo post');
        }
    };

    // Estilos para el contenedor del contenido
    const contentStyle = {
        marginTop: '10px',
        height: '75%',
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        color: 'white',
    };

    // Estilos para el contenedor de los inputs
    const inputContainer = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    };

    // Estilos para los inputs
    const inputStyle = {
        fontSize: '16px',
        marginRight: '20px',
        border: '1px solid white',
        backgroundColor: '#2135ae',
        borderRadius: '5px',
        color: 'white',
        marginTop: '7%',
        marginBottom: '10px',
        width: '50%'
    };

    // Estilos para el botón de guardar
    const EstiloBOton = {
        width: '50px',
        height: '25px',
        backgroundColor: '#352c7d',
        borderRadius: '10px',
        color: 'white',
    };

    // Renderizado del componente
    return (
        <div style={contentStyle}>
            {isNewPostMode ? (
                // Modo de creación de nuevo post
                <div style={inputContainer}>
                    <input type="text" value={newPost.title} onChange={handleTitleChange} placeholder="Enter title" style={inputStyle} />
                    <input type="text" value={newPost.banner} onChange={handlebannerChange} placeholder="Enter banner" style={inputStyle} />
                    <input type="text" value={newPost.content} onChange={handleContentChange} placeholder="Enter content" style={inputStyle} />
                    <input type="number" value={newPost.locationU} onChange={handlelocationUChange} placeholder="Enter locationU" style={inputStyle} />
                    <button style={EstiloBOton} onClick={handleSaveClick}>Save</button>
                </div>
            ) : (
                // Modo de visualización de post existente
                <div>
                    {post ? (
                        // Mostrar el post si existe
                        <div>
                            <div style={{ backgroundColor: '#2135ae', padding: '10px', marginBottom: '10px', width: '100%' }}>
                                <h3 style={{ color: 'white', marginBottom: '5px', width: '100%' }}>banner: {post.banner}</h3>
                                <h3 style={{ color: 'white' }}>locationU: {post.locationU}</h3>
                            </div>
                            <div style={{ backgroundColor: '#182b7e', padding: '10px', width: '100%' }}>
                                <p style={{ color: 'white' }}>Content: {post.content}</p>
                            </div>
                        </div>
                    ) : (
                        // Mostrar imagen por defecto si no hay post
                        <img src='./blog-default-image/nopost.gif' style={{ maxWidth: '100%', maxHeight: '70%', marginTop: '20%' }} />
                    )}
                </div>
            )}
        </div>
    );
}
