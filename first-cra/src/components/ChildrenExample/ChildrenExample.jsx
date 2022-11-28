const ChildrenExample = props => {

    return (
        <section className="whatever">
            <h5>Estos son los children del componente: </h5>
            {props.children}   {/* presente por defecto */}
        </section>
    )
}

export default ChildrenExample