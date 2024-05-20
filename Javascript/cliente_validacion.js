document.getElementById('clientForm').addEventListener('submit', function(event) 
{
    var isValid = true;
    var inputs = document.querySelectorAll('#clientForm input[required], #clientForm select[required], #clientForm textarea[required]');
    inputs.forEach(function(input) 
    {
        if (!input.value.trim()) 
        {
            isValid=false;
            input.classList.add('is-invalid');
        }
        else
            input.classList.remove('is-invalid');
    });
    if (!isValid)
    {
        event.preventDefault();
        alert('Por favor, completa todos los campos obligatorios.');
    }
});
