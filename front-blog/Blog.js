// Componente principal del blog
function Blog() {
    // Estado para almacenar el post seleccionado
    const [selectedPost, setSelectedPost] = React.useState(null);

    // Estado para controlar el modo de creación de nuevo post
    const [isNewPostMode, setIsNewPostMode] = React.useState(false);

    // Estilo del contenedor principal del blog
    const blogStyle = {
        width: '100%', // Ancho completo
        height: '100vh', // Altura completa de la ventana
        display: 'flex', // Utiliza flexbox para alinear los elementos
    };

    // Estilo para la barra lateral (BlogBar)
    const BarStyle = {
        width: '30%', // 30% del ancho del contenedor principal
        height: '100%', // Altura completa del contenedor principal
        display: 'flex', // Utiliza flexbox para alinear los elementos
        flexDirection: 'column', // Organiza los elementos en columna
    };

    // Estilo para el área de contenido principal
    const ContentStyle = {
        width: '70%', // 70% del ancho del contenedor principal
        height: '100%', // Altura completa del contenedor principal
        display: 'flex', // Utiliza flexbox para alinear los elementos
        flexDirection: 'column', // Organiza los elementos en columna
    };

    // Función para manejar la eliminación de un post
    const handleDelete = () => {};

    // Función para manejar la creación de un nuevo post
    // Resetea el post seleccionado y activa el modo de nuevo post
    const handleNewPost = () => {
        setSelectedPost(null);
        setIsNewPostMode(true);
    };

    // Función para manejar la acción de guardar un post
    // Desactiva el modo de nuevo post
    const handleSavePost = () => {
        setIsNewPostMode(false);
    };

    // Renderizado del componente Blog
    return (
        <div style={blogStyle}>
            {/* Componente de la barra lateral, pasa la función setSelectedPost como prop */}
            <BlogBar setSelectedPost={setSelectedPost} style={BarStyle} />
            {/* Área de contenido principal */}
            <div style={ContentStyle}>
                {/* Componente Header, pasa el post seleccionado como prop */}
                <Header post={selectedPost} />
                {/* Componente Body, pasa el post seleccionado, el modo de nuevo post y la función onSavePost como props */}
                <Body post={selectedPost} isNewPostMode={isNewPostMode} onSavePost={handleSavePost} />
                {/* Componente Nav, pasa las funciones onDelete, onSave, onNewPost y el post seleccionado como props */}
                <Nav onDelete={handleDelete} onSave={handleSavePost} selectedPost={selectedPost} onNewPost={handleNewPost} />
            </div>
        </div>
    );
}
