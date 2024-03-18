let worksData = [];

const addWork = () => {
    const workSelect = document.querySelector("#work-select");
    const quantity = parseInt(document.querySelector("#quantity").value);
    const cost = parseFloat(document.querySelector("#cost").value);

    if (isNaN(quantity) || isNaN(cost)) {
        alert("Заполните все поля!");
        return;
    }
    worksData.push({ work: workSelect.value, quantity: quantity, cost: cost });

    updateWorksList();
}

const updateWorksList = () => {
    let worksDiv = document.querySelector("#works");
    worksDiv.innerHTML = "";

    worksData.forEach((work, index) => {
        let workElement = document.createElement("p");
        workElement.textContent = `${work.work} - Количество: ${work.quantity}, Стоимость: ${work.cost} руб.`;
        worksDiv.appendChild(workElement);
    });
}

const calculateTotal = () => {
    let totalCost = 0;
    let totalQuantity = 0;

    worksData.forEach(work => {
        totalQuantity += work.quantity;
        totalCost += work.quantity * work.cost;
    });

    let totalElement = document.querySelector("#total");
    totalElement.innerHTML = `
    <p>Общий объем работ: ${totalQuantity}</p>
    <p>Общая стоимость работ: ${totalCost} рублей</p> 
    `;
}