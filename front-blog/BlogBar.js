// Definición del componente BlogBar que recibe la prop setSelectedPost
function BlogBar({ setSelectedPost }) {

    // Declaración del estado blogs con el hook useState
    // Inicializa el estado con un array vacío
    const [blogs, setBlogs] = React.useState([]);

    // Definición de los tipos de las props usando PropTypes
    BlogBar.propTypes = {
        blogs: PropTypes.array.isRequired,
    };

    // Estilos para la barra donde se seleccionarán los posts del blog
    const BlogBarStyles = {
        width: '25%',
        height: '100vh',
        backgroundColor: '#010923',
        padding: '10px',
        borderRadius: '25px',
        marginRight: '15px',
        overflowY: 'scroll', // Permite el desplazamiento vertical si el contenido es largo
    };

    // Estilos para cada post en la barra
    const PostStyle = {
        backgroundColor: '#352c7d',
        height: '10%',
        borderRadius: '10px',
        marginBottom: '20px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    };

    // Estilos para el botón de selección de post
    const EstiloBOton = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: `url("./blog-default-image/button.png")`,
        backgroundSize: 'cover',
        border: 'none',
        cursor: 'pointer', // Cambia el cursor al pasar sobre el botón
        marginLeft: '20px',
    };

    // Estilos para el botón de limpiar selección
    const ClearEstiloBOton = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: `url("./blog-default-image/scape.png")`,
        backgroundSize: 'cover',
        border: 'none',
        cursor: 'pointer', // Cambia el cursor al pasar sobre el botón
        marginLeft: '20px',
    };

    // Función para consumir la REST API y obtener los posts del blog
    const fetchPost = async () => {
        const response = await fetch('http://localhost:3000/posts', {
            method: 'GET',
        });

        // Verifica si la respuesta es correcta y actualiza el estado blogs con los datos obtenidos
        if (response.ok) {
            const data = await response.json();
            setBlogs(data);
        } else {
            throw new Error('Error al obtener posts del blog');
        }
    };

    // Hook useEffect para llamar a fetchPost cuando el componente se monta
    // y cada vez que cambie el estado blogs
    React.useEffect(() => { fetchPost(); }, [blogs]);

    // Función para manejar la selección de un post
    // Actualiza el estado setSelectedPost con el post seleccionado
    const handlePost = (post) => {
        setSelectedPost(post);
    };

    // Función para manejar el clic en el botón de limpiar selección
    // Establece el estado setSelectedPost en null, limpiando la selección
    const handleClearPost = () => {
        setSelectedPost(null);
    };

    // Renderizado del componente
    return (
        <div style={BlogBarStyles}>
            {/* Mapea sobre el array blogs para renderizar cada post */}
            {blogs.map(blog => (
                <div key={blog.id} style={PostStyle}>
                    <h4>{blog.title}</h4>
                    {/* Botón para seleccionar el post */}
                    <button style={EstiloBOton} onClick={() => handlePost(blog)}></button>
                    {/* Botón para limpiar la selección */}
                    <button style={ClearEstiloBOton} onClick={handleClearPost}></button>
                </div>
            ))}
        </div>
    );
}
