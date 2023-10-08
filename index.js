let form = document.getElementById('my-form');
form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();
    console.log('updating List');
    
  
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let nil= document.createElement('li');
    let use=document.getElementById('users');
   
    let formData = {
        Name: name,
        Email: email,
        Phone: phone
    };
    
    axios.post('https://crudcrud.com/api/cb572857b05d42ec8e22718d6414e4/appointment', formData)
    .then((response)=>
    {
        showoutput(response.data);
    })
    .catch((err)=>
    {
        alert("Something went wrong");
        console.log(err);
    })
   
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
}

function showoutput(formData)
{
    
    let nil= document.createElement('li');
    let use=document.getElementById('users');
    
    nil.innerHTML = `Name: ${formData.Name}, Email: ${formData.Email}, Phone: ${formData.Phone}
    <button>Delete</button>
    <button>Edit</button>`;
    use.appendChild(nil);
   
}