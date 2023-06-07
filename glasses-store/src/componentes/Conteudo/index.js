import SecaoCapa from '../SecaoCapa';
import SecaoProdutos from '../SecaoProdutos';
import SecaoContato from '../SecaoContato';
import SecaoSobre from '../SecaoSobre';

export default function Conteudo(){
    return(
        <main>
            <SecaoCapa />
            <SecaoProdutos />
            <SecaoSobre />
            <SecaoContato />
        </main>
    )
}