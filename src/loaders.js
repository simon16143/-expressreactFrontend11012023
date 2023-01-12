export const appLoader = async ( ) => {
    const response = await fetch("https://express-react-app-11012023.onrender.com")
    const data = await response.json()
    return data
}