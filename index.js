
const loadAllPhones = () =>{
    document.getElementById('spinner').style.display = 'none';
}

const handleSearch = () => {
    document.getElementById('spinner').style.display = 'block';
     setTimeout(() => {
        loadAllPhones();
     }, 3000);
}
