import React from 'react';
export default function Mensagem(){
    const [student, setStudent] = React.useState([]);
    const [render, setRender] = React.useState(false);
    const[msg, setMsg] = React.useState(false);
    const [nome, setNome] = React.useState(""); 
  const [mensagem, setMensagens] = React.useState(""); 


    React.useEffect(async () => {
        const url = "http://localhost:3333/mensagens";
        const response = await fetch(url);
        setStudent(await response.json());
    }, [render])

    function handleSubmit(event) {
        event.preventDefault();
        // let formData = new FormData(event.target)
        const formData={
            nome: nome,
            msg: mensagem,
        }
        const url = "http://localhost:3333/mensagens";
        fetch(url, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(formData)
        }).then((response) => response.json()).then((dados)=> {
            setRender(!render);
            setMensagens(""); 
            setNome("");
            setMsg(dados);
            setTimeout(() => {
                setMsg(false);
            }, 2000)
        })
    }
        return (

            <main>
                <h2>Contatos</h2>
                <section class="container">
                    <div class="row">
                        <div class="col-6 text-center">
                            <p><img src="img/img/email.png" width="40" />Contato@fullstackeletro.com</p>
                        </div>

                        <div class="col-6 text-center">

                            <p><img src="img/img/whatsapp.png" width="40" />(11) 99999-9888</p>
                        </div>
                    </div>

                </section>

                <form onSubmit={handleSubmit} class="container my-3 p-3 pg-light rounded shadow-lg" method="post">
                    <div class="form-group">
                        <label>Nome: </label>
                        <input value={nome} onChange={(event) => setNome(event.target.value)}  class="form-control" type="text" name="nome" />
                        <label>Mensagem:</label>
                        <textarea value={mensagem} onChange={(event) => setMensagens(event.target.value)} class="form-control" name="msg"></textarea>
                        <input class="btn btn-primary" type="submit" name="submit" value="Enviar" />
                    </div>
                </form>
                {msg && <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
                    Cadastro efetuado com sucesso!
                    </div>}

                <div class="container my-3 p-3 bg-white rounded shadow-sm">
                    <h6 class="border-bottom border-gray pb-2 mb-0">Mensagens</h6>
                        {student.map(
                           row => 
                        
                    <div class="media text-muted pt-3">
                        <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
                        </svg>
                        <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <div class="d-flex justify-content-between align-items-center w-100">
                        <strong class="text-gray-dark">{row.nome}</strong>
                        <p>{row.data}</p>
                            </div>
                            <p class="d-block">{row.msg}</p>
                        </div>
                    </div>
                    )}
                </div>
            </main>
        )
    

}

