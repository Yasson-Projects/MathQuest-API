<p align="center">
  <img src="./assets/nestjs.png">
</p>

**Class proyect: `A`**

Esto es una api de preguntas matematicas de operaciones, creada en Yasson projects, este proyecto esta en fase alfa por ahora, si quieres apoyar el proyecto para el hosting recuerda hablar en instagram como @ljuanda_castro para recibir donaciones (solo por nequi colombia)

# HTTP Requests
<div>
  <button class="copy-code-button" onclick="copyCode(this)">Copiar</button>
  <pre><code>test</code></pre>
</div>

<style>
  .copy-code-button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 4px 2px;
    cursor: pointer;
  }
</style>

<script>
  function copyCode(button) {
    const codeBlock = button.nextElementSibling;
    const code = codeBlock.innerText;
    
    navigator.clipboard.writeText(code)
      .then(() => {
        button.innerText = 'Copiado';
        setTimeout(() => {
          button.innerText = 'Copiar';
        }, 2000);
      })
      .catch(err => {
        console.error('Error al copiar el código:', err);
      });
  }
</script>
