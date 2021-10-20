import { TipoTransacao } from "./tipoTransacao";

export interface Cnab {
    id: number;
    data: string;
    valor: number;
    cpf: string;
    cartao: string;
    hora: string;
    dono: string;
    loja: string;
    tipoTransacao: TipoTransacao;
}