const headerOpenAddressBtn = document.querySelector('.header__address_openList-btn');

function openListAddress () {

    const headerAddressList = document.querySelector('.header__address_list');
    const screenWidth = document.documentElement.clientWidth;

    if (screenWidth >= 1672) {

        if (headerAddressList.classList.contains('address__openList')) {

            headerAddressList.classList.remove('address__openList');
            headerAddressList.classList.toggle('address__openList_desktop');
        }
        else {

            headerAddressList.classList.toggle('address__openList_desktop');
        }

    }
    else {
        if (headerAddressList.classList.contains('address__openList_desktop')) {

            headerAddressList.classList.remove('address__openList_desktop');
            headerAddressList.classList.toggle('address__openList');

        }
        else {

            headerAddressList.classList.toggle('address__openList');
        }
    }
}

headerOpenAddressBtn.addEventListener ('click', openListAddress);