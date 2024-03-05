function Button(){

    const styles = {
        backgroundColor: "pink",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        display: "inline-block"
    }

    return(
        <button style={styles}>Click me!</button>
    );
}

export default Button