// top bar
// analytics tabs
export const Toggler = (e , toggleTarget , targetLevel) => {
    const currentElement = e.currentTarget;
    const element = targetLevel 
    ? getElement(currentElement , targetLevel).querySelector(toggleTarget)
    : currentElement;

    // choose level you want to target to set up toggler - might remove
    function getElement(getparent , stop){
        let nextParent = stop - 1;
        if(nextParent >= 0){
            return getElement(getparent.parentNode , nextParent)
        } else {
            return getparent
        }
    }

    const getAll = document.querySelectorAll(toggleTarget);
    
    getAll.forEach(el => {
        if(el != element){
            if(el.getAttribute('active')) el.removeAttribute('active')
        }
    })

    element.getAttribute('active') ? element.removeAttribute('active') : element.setAttribute('active' , 'true')
}