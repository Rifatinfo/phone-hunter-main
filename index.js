
const loadAllPhones = async (status, searchText) => {
    console.log(searchText);
    document.getElementById('spinner').style.display = 'none';

    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText ? searchText : "iphone"}`);
    const data = await response.json();
    console.log(data);
    { status ? displayAllPhone(data.data) : displayAllPhone(data.data.slice(0, 6)) };
}

const displayAllPhone = async (phones) => {
    console.log(phones); 
    const phoneContainer = document.getElementById("phones-container");
    phones.forEach(phone => {
        const div = document.createElement('div');
        const { brand, image, slug } = phone;
        div.innerHTML = `
                    <div class="card bg-base-100 m-2 w-96 shadow-xl">
            <figure>
                <img
                    src="${phone.image}"
                    alt="${phone.name || 'Product Image'}" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">${brand}</h2>
                <p>${slug}</p>
                <div class="card-actions justify-end">
                   <button onclick="phoneDetails('${slug}')" class="btn btn-error">Details</button>
                </div>
            </div>
            </div>
        `
        phoneContainer.appendChild(div);
    });
}

const handleShowAll = () => {
    loadAllPhones(true);
}

const handleSearch = () => {
    document.getElementById('spinner').style.display = 'block';
    setTimeout(() => {
        const searchText = document.getElementById("search-box").value;
        loadAllPhones(false, searchText);
    }, 3000);
}

const phoneDetails = async (slugs) =>{
      console.log("phone details check", slugs);
      const response = await fetch(`https://openapi.programming-hero.com/api/phone/${slugs}`);
      const data = await response.json();
      console.log(data.data);
      const { brand, image, slug } = data.data;
      const modalContainer = document.getElementById('modal-container');
      modalContainer.innerHTML = `
            <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="text-lg font-bold">${brand}</h3>
          <p class="py-4">${slug}</p>
          <div class="modal-action">
            <form method="dialog">
              <!-- if there is a button in form, it will close the modal -->
              <button class="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      `
      my_modal_5.showModal()
}

loadAllPhones(false, 'iphone');