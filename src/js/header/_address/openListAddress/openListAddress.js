const headerOpenAddressBtn = document.querySelectorAll('.header__address_points');
const headerAddressesList = document.querySelectorAll('.header__address_item');

function openListAddress (index) {

    const headerAddressList = document.querySelectorAll('.header__address_list');
    const addressBtn = document.querySelectorAll('.header__address_btn');

    headerAddressList[index].classList.toggle('address__openList');

    addressBtn.forEach((item) => {

        item.classList.toggle('address_active');
    })
}

function selectedAddress (index) {

    console.log("Выбор адреса работает");
    const addressText = document.querySelectorAll('.header__address_text');
    const headerAddressesList = document.querySelectorAll('.header__address_item');


    addressText.forEach((item) => {

        item.textContent = headerAddressesList[index].textContent;
    })

}

// headerOpenAddressBtn.addEventListener ('click', openListAddress);

headerOpenAddressBtn.forEach((item, index) => {

    item.addEventListener('click', () => openListAddress(index));
});

headerAddressesList.forEach((item, index) => {

    item.addEventListener('click', () => selectedAddress(index));
})

