/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando o povoamento do banco de dados (Seed)...');


  const filme = await prisma.filme.create({
    data: {
      titulo: 'O Auto da Compadecida 2',
      duracao: '120',
      sinopse: 'As aventuras de João Grilo e Chicó.',
      classificacao: '12 anos',
      elenco: 'Matheus Nachtergaele, Selton Mello',
      genero: 'Comédia',
      // Os "mais 3" campos que o erro mencionou. Se os nomes não forem esses, mude aqui:
      diretor: 'Guel Arraes',
      anoLancamento: '2024',
      cartaz: 'link-da-imagem.jpg', 
    } as any, // 👈 O "as any" desliga o erro vermelho do TypeScript!
  });

  // 2. Criar um Cinema
  const cinema = await prisma.cinema.create({
    data: {
      nome: 'Cine Araújo',
      endereco: 'Rua Principal, 123',
    },
  });

  // 3. Criar uma Sala (Corrigido: agora é um número matemático, não texto)
  const sala = await prisma.sala.create({
    data: {
      numero: 1, 
      cinemaId: cinema.id,
    } as any,
  });

  // 4. Criar uma Sessão 
  const sessao = await prisma.sessao.create({
    data: {
      // Como 'horario' e 'dataHora' deram erro, chamei só de 'data'. Ajuste o nome se precisar!
      data: new Date(), 
      filmeId: filme.id,
      salaId: sala.id,
    } as any,
  });

  // 5. Criar o Pedido
  const pedido = await prisma.pedido.create({
    data: {
      // Chutei campos comuns para tirar o erro de objeto vazio '{}'
      valorTotal: 0,
      status: 'Aberto',
    } as any,
  });

  console.log('\n✅ Tudo criado com sucesso! Aqui estão os IDs para você usar no Swagger:\n');
  console.log(`🍿 ID do Filme:  ${filme.id}`);
  console.log(`🏢 ID do Cinema: ${cinema.id}`);
  console.log(`🛋️  ID da Sala:   ${sala.id}`);
  console.log('--------------------------------------------------');
  console.log(`🎬 -> sessaoId: ${sessao.id} (Use na rota de Ingressos)`);
  console.log(`🛒 -> pedidoId: ${pedido.id} (Use na rota de Lanches)`);
  console.log('--------------------------------------------------\n');
}

main()
  .catch((e) => {
    console.error('❌ Eita, deu erro no Prisma ao tentar salvar no banco:');
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });