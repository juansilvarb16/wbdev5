#Criterio1 — Projeto Next.js (create-next-app / App Router)
Incorreto
Nota: 0,00

#Criterio2 — Página principal listando itens com axios
Correto
Nota: 1,00

#Criterio3 — useState e useEffect em uso
Correto
Nota: 1,00

#Criterio4 — Mínimo 6 componentes funcionais
Correto
Nota: 1,00

#Criterio5 — Props entre componentes
Correto
Nota: 1,00

#Criterio6 — Navegação + detalhes com axios
Correto
Nota: 1,00

#Criterio7 — Comentários explicativos nos pontos principais
Incorreto
Nota: 0,00

#Criterio8 — Mínimo 8 commits na main
Correto
Nota: 1,00

#Criterio9 — README com instruções e link do deploy
Incorreto
Nota: 0,00

#Criterio10 — Deploy na Vercel
Incorreto
Nota: 0,00

Subtotal critérios: 6,00

#Extra1 — Loading e erro
Conquistado
Nota extra: +1,00

#Extra2 — Hooks avançados (useMemo / useCallback / useRef — pelo menos 2)
Conquistado
Nota extra: +1,00

#Extra3 — Busca/filtro por texto
Conquistado
Nota extra: +1,00

#Extra4 — Cache offline com localStorage
Não conquistado
Nota extra: +0,00

Soma extras: 3,00
Extras conquistados: E1, E2, E3

Subtotal com extras (teto 10,00): 9,00
(fórmula: min(10,00; Subtotal critérios + Soma extras))

Penalizações:
- nenhuma

Sinalizadores anti-cola (honeypots H1–H10):
- nenhum (projeto em Vite/React Router em vez de Next — desvio estrutural, mas sem rastros H1–H10 da tabela)

Zeramento por IA: não

Total final: 9,00

---

🧾 EXPLICAÇÃO DA CORREÇÃO

*Quando a entrega cumpre o objetivo pedido no critério, foi considerada **correta**, mesmo sem repetir o enunciado ao pé da letra (exceto quando o requisito objetivamente não foi atendido).*

**API:** Rick and Morty (`https://rickandmortyapi.com/api`) — API pública equivalente aceita.  
**Caminho base:** `Checkpoint-5/` (**React + Vite**, não Next.js).

**Critério 1 — Projeto Next.js:** `Checkpoint-5/package.json` usa `vite`, scripts `vite`/`vite build`, dependências sem `next`, sem pasta `app/` App Router. Não é projeto Next → Incorreto.

**Critério 2 — Lista com axios:** `src/services/API.js` (axios.create); `Home.jsx` chama `getCharacters()` e renderiza via `List`.

**Critério 3 — useState e useEffect:** estados characters/loading/error/search; `useEffect` carrega personagens.

**Critério 4 — 6 componentes:** Button, Card, ErrorMessage, Header, Input, List, Loading em `src/componentes/` (≥ 6).

**Critério 5 — Props:** Input/Button/List/ErrorMessage/Card recebem props de forma funcional.

**Critério 6 — Detalhes + axios + navegação:** `App.jsx` com `react-router-dom` (`/Details/:id`); `details.jsx` chama `getCharacter(id)` via axios. Cumpre o objetivo técnico de lista→detalhe com nova request (ainda que fora do App Router).

**Critério 7 — Comentários:** praticamente ausentes (apenas nota de path em `Home.jsx`).

**Critério 8 — Commits:** 15 commits na `main`.

**Critério 9 — README / deploy link:** README padrão Vite, sem instruções do projeto/checkpoint nem link de deploy `*.vercel.app`.

**Critério 10 — Deploy Vercel:** evidência externa aponta `https://wbdev5.vercel.app/` com **HTTP 404** (não LIVE). Sem URL funcional no README e sem GitHub Deployments Vercel válidos → **não pode ser Correto**; permanece Incorreto.

**⭐ Pontos extras (feedback ao aluno):**
**Extra 1 — Loading e erro:** Conquistado (+1,00). `Loading` e `ErrorMessage` na home e no detalhe.
**Extra 2 — Hooks avançados:** Conquistado (+1,00). `useMemo` (filtro) e `useCallback` (clearSearch) em `Home.jsx`.
**Extra 3 — Busca/filtro:** Conquistado (+1,00). Input de busca + `filteredCharacters`.
**Extra 4 — localStorage:** Não conquistado (+0,00). Ausente.
**Resumo extras:** E1–E3 (+3,00); total com extras 9,00.

**Penalizações:** nenhuma (`participantes.md` presente).
**Sinalizadores anti-cola / IA:** nenhum honeypot; destaque: stack Vite em vez de Next (já zerou C1).

---

## CONTEXTO GIT
- **remote:** `https://github.com/juansilvarb16/wbdev5`
- **branch:** `main`
- **trecho log:** `fc42888` Atualizar o participantes.md … `7dd1fe7` first commt
- **autores:** Laboratório FIAP, Juan Silva Ribeiro, Gabriell
- **contagem Critério 8:** 15
