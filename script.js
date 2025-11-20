const input = document.getElementById('fileInput');
const button = document.getElementById('uploadButton');
const preview = document.getElementById('preview');

button.addEventListener('click',() => {
    input.click()
});
button.addEventListener('dragover',(e) => {
    e.preventDefault();
    button.classList.add('dragover')
});
button.addEventListener('dragleave',() => button.classList.remove('dragover'));
button.addEventListener('drop',(e) => {
    e.preventDefault();
    button.classList.remove('dragover');
    const file= e.dataTransfer.files[0];
    if (file) { 
        const img=document.createElement('img');
        img.src = URL.createObjectURL(file);
        preview.innerHTML='';
        preview.appendChild(img);
    }
});
input.addEventListener('change',() => {
    const file= input.files[0]
    if (file) { 
    const img=document.createElement('img');
    img.src = URL.createObjectURL(file);
    preview.innerHTML='';
    preview.appendChild(img);
    }
});