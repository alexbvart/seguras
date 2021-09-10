

const logout = () => {
    if (localStorage.getItem("@token") !== null) {
        localStorage.removeItem('@token');
    }
    if (localStorage.getItem("@usuario") !== null) {
        localStorage.removeItem('@usuario');
    }
    return true
}
export default logout;
