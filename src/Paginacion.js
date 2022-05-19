export default function Paginacion(props) {

    

    const getPaginas = () => {
        const resultado = [];
        for (let i = 0; i < props.total; i++) {
            let pagina = i + 1;
            resultado.push(
                <a onClick={() => props.onChange()} 
                className={props.pagina === pagina ? 'active' : ''}>
                    {pagina}
                </a>
            );
        }
        return resultado;
    }

    return (
        <div className="topbar-filter">
           
            <div className="pagination2">
                <span>Página {props.pagina} de {props.total}:</span>

                {getPaginas()}
               
                {/* <a href="#">2</a>
                <a href="#"><i className="ion-arrow-right-b"></i></a> */}
            </div>
        </div>
    );
}