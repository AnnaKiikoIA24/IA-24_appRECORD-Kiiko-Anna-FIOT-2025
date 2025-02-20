const getContent = async (url) => {

    fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'text/plain' }
      })
      // Перетворюємо результат виконання на текст
      .then((response) => response.text())
      // Заповнюємо текстом зміст div
      .then((response) => {
        document.getElementById('div-content').innerHTML = response;
      })
      .catch(function(err) {  
        document.getElementById('div-content').innerHTML = "При виконанні запиту на сервер виникла помилка:" + err;
      });        
  }

const activateSection = (parentDiv, childDivActivate) => {
    const parentElem = document.getElementById(parentDiv)
    if (parentElem) {
        for (let curElem of parentElem.children) {
            if (curElem.id == childDivActivate) {
                curElem.style.display = "";
            }
            else {
                curElem.style.display = "none";
            }
        }
    }

}