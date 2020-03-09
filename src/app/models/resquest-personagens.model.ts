import { Personagem } from './personagem.model'

export class RequestPersonages {
    count: number;
	next: string | null;
	previous: string | null;
	results: Personagem[];
}