
const loadAllPhones = async (status) =>{
    document.getElementById('spinner').style.display = 'none';

    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`);
    const data = await response.json();
     {status ? displayAllPhone(data.data) :  displayAllPhone(data.data.slice(0,6))};
}

const displayAllPhone = async (phone) => {
    console.log(phone);
}

const handleShowAll = () =>{
    loadAllPhones(true);
}

const handleSearch = () => {
    document.getElementById('spinner').style.display = 'block';
     setTimeout(() => {
        loadAllPhones();
     }, 3000);
}

loadAllPhones();