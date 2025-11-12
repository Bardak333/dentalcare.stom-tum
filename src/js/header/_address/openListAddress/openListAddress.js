const headerOpenAddressBtn = document.querySelectorAll('.header__address_points');
const headerAddressesList = document.querySelectorAll('.header__address_item');
let openAddress = false;

function closeAddress() {
    const headerAddressList = document.querySelectorAll('.header__address_list');
    const addressBtn = document.querySelectorAll('.header__address_btn');

    headerAddressList.forEach((item) => {
        item.classList.remove('address__openList');
    });

    addressBtn.forEach((item) => {
        item.classList.remove('address_active');
    });

    openAddress = false;
}

document.addEventListener('click', (event) => {

    if (openAddress && !event.target.closest('.header__address_points') && !event.target.closest('.header__address_list')) {

        closeAddress();
    }
});

function openListAddress(index) {
    const headerAddressList = document.querySelectorAll('.header__address_list');
    const addressBtn = document.querySelectorAll('.header__address_btn');

    headerAddressList.forEach((item, i) => {
        if (i !== index) {
            item.classList.remove('address__openList');
        }
    });

    headerAddressList[index].classList.toggle('address__openList');

    addressBtn.forEach((item) => {
        item.classList.toggle('address_active', headerAddressList[index].classList.contains('address__openList'));
    });

    openAddress = headerAddressList[index].classList.contains('address__openList');
}

function selectedAddress(index) {

    const addressText = document.querySelectorAll('.header__address_text');
    const headerAddressesList = document.querySelectorAll('.header__address_item');

    addressText.forEach((item) => {
        item.textContent = headerAddressesList[index].textContent;
    });

    closeAddress();
}

headerOpenAddressBtn.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        event.stopPropagation();
        openListAddress(index);
    });
});

headerAddressesList.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        event.stopPropagation();
        selectedAddress(index);
    });
});