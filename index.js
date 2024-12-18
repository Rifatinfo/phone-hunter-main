
const loadAllPhones = async () =>{
    document.getElementById('spinner').style.display = 'none';

    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`);
    const data = await response.json();
    console.log(data.data);
}

const displayData = async (phone) => {
    console.log(phone);
}

const handleSearch = () => {
    document.getElementById('spinner').style.display = 'block';
     setTimeout(() => {
        loadAllPhones();
     }, 3000);
}

loadAllPhones();