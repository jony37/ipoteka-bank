// animation 
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length >0){
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemsHeight = animItem.offsetHieght;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemsHeight / animStart;

            if (animItemsHeight > window.innerHeight) {
                animItemPoint = window.innerHeight -  window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageXOffset< (animItemOffset + animItemsHeight)){
                animItem.classList.add('_active');
            }else {
                animItem.classList.remove('_active');

            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset ||  document.documentElement.scrollLeft,
        scrollTop = window.pegerYOffset ||  document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft} 
    }   
}