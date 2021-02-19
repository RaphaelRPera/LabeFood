export const goToHomePage = (history) => {
    history.push("/home")
}
export const goToSearch = (history) => {
    history.push("/home/busca")
}
export const goToLogin = (history) => {
    history.push("/login")
}
export const goToSignUp = (history) => {
    history.push("/cadastrar")
}
export const goToAddress = (history) => {
    history.push("/cadastrar/endereco")
}
export const goToRestaurant = (history, id) => {
    history.push(`/restaurante/${id}`)
}
export const goToCart = (history) => {
    history.push("/carrinho")
}
export const goToProfile = (history) => {
    history.push("/perfil")
}

// alterei nome e caminho: rederente a página de edição dos dados pessoais
export const goToProfileEdit = (history) => {
    history.push("/perfil/editar/dados-pessoais")
}

// adicionei uma página referente a edição do endereço
export const goToProfileEditAddress = (history) => {
    history.push("/perfil/editar/endereco")
}