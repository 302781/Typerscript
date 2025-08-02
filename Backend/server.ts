import type { Request, Response } from 'express';
import express from 'express';

const app = express();

interface IProdutos {
    id: number,
    name: string,
    price: number,
    description: string,
    adress: {
        street: string;
        number: number;
        state: string;
    };
}

let produtos = IProdutos[] = [];

app.get('/produtos', (req: Request, res: Response) => {

    const newProdutos: IProdutos = ({
        id: Math.floor(Math.random() * 1000),
        name: 'Produto 1',
        price: 100,
        description: 'Descrição do Produto 1',
        adress: {
            street: "Rua Exemplo",
            number: 123,
            state: "Cidade Exemplo"
        }

    })
    produtos.push(newProdutos)
    return res.json(produtos)
})

app.listen(3000, () => {
    console.log('Servidor rodando')
})