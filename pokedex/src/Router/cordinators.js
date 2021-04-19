export const goToHomePage = (history) => {
    history.push('/')
}

export const goToPokedexPage = (history) => {
    history.push('/pokedex')
}

export const goToPokemonDetailPage = (history, id) => {
    history.push(`/pokedex/details/${id}`)
}

export const goBack = (history) => {
    history.goBack()
}