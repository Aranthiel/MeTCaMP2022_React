function Bio(){
    
    return(
        <div className="container">
            <section className="section"> 
                <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/juego">Juego</a></li>
                    <li className="is-active"><a href="/bio">Contacto</a></li>
                </ul>
                </nav>
            </section>
        </div>
        
    )
}
export default Bio;
