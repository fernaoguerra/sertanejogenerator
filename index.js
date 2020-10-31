console.log("carregou")
async function myFunction() {
    document.getElementById("content_header").innerHTML = "Seu hit sertanejo estará\npronto em alguns segundos...";
    // alert("Esse site é um experimento que usa Inteligência Artificial para fins educacionais e criativos.\nSeu novo Hit está pronto em alguns segundos")
    const content = await fetchLyric()
    // alert("Esse site é um experimento que usa Inteligência Artificial para fins educacionais e criativos")
    const resp = content.content.replace(/(\r\n|\n|\r)/gm, "<br/>")
    console.log(resp)
    // <section id="one" class="wrapper style1 special" style="display:none;">
    document.getElementById("one").style.display = '';
    document.getElementById("two").style.display = '';
    document.getElementById("footer").style.display = '';
    document.getElementById("content").innerHTML = resp;
    document.getElementById('generate').click();
    document.getElementById("content_header").innerHTML ="Gere letras de Sertanejo<br/>Usando Inteligêcia Artificial<br/>Criado por <a href='https://www.youtube.com/user/fernaoguerra'>Fernão Guerra</a>."
    
}

async function fetchLyric() {
    console.log("fetcheando")
    const response = await fetch('https://sertanejogenerator.rj.r.appspot.com/');
    // waits until the request completes...
    // console.log(response.json());
    return response.json()
}