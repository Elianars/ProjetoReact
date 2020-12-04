
import { Link } from 'react-router-dom';
export default function Nav() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-danger">

            <Link class="navbar-brand" to="/"><img width="100px" src="./img/img/Full Stack logo.png" alt="logo" /></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample07">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/produtos">Produto </Link>
                    </li>
                    <li class="nav-item active">
                        <Link class="nav-link" to="/lojas"> lojas</Link>
                    </li>
                    <li class="nav-item active">
                        <Link class="nav-link " to="/mensagem">Contato</Link>
                    </li>

                </ul>

            </div>

        </nav>

    )
}

