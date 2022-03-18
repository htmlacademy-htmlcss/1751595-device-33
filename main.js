const categories = document.querySelector('#categories')
const categoriesLink = document.querySelector('#categoriesLink')

function openCatalog () {
    categories.classList.toggle('header__categories_active')
    categoriesLink.classList.toggle('header__catalog-link_active')
}

categories.addEventListener('mouseleave', () => {
    categories.classList.remove('header__categories_active')
    categoriesLink.classList.remove('header__catalog-link_active')
})