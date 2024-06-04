// Definición del componente Header que recibe la prop post
function Header({ post }) {
    // Estilos para el encabezado
    const headerStyle = {
        height: '15%', // Altura del encabezado
        width: '100%', // Ancho completo
        backgroundColor: '#271958', // Color de fondo
        borderRadius: '20px', // Bordes redondeados
        color: 'white', // Color del texto
        display: 'flex', // Utiliza flexbox para alinear los elementos
        alignItems: 'center', // Centra los elementos verticalmente
        justifyContent: 'center', // Centra los elementos horizontalmente
    };

    // Renderizado del componente
    return (
        <div style={headerStyle}>
            {/* Muestra el título del post si existe, de lo contrario muestra 'No post selected' */}
            <h2>{post ? post.title : 'No post selected'}</h2>
        </div>
    );
}
