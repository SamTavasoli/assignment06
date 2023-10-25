document.addEventListener('DOMContentLoaded', (event) => {
    const employeeForm = document.getElementById('empForm');
    employeeForm.addEventListener('submit', event => {
        event.preventDefault();
        const idValue = document.getElementById('id').value;
        const nameValue = document.getElementById('name').value;
        const extValue = document.getElementById('ext').value;
        const emailValue = document.getElementById('email').value;
        const departmentValue = document.getElementById('department').value;
        console.log(`ID: ${idValue}`);
        console.log(`Name: ${nameValue}`);
        console.log(`Extension: ${extValue}`);
        console.log(`Email: ${emailValue}`);
        console.log(`Department: ${departmentValue}`);
    });
});
