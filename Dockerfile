# Etapa de compilação
FROM node:20 as build

WORKDIR /app

# Copia os arquivos do projeto para o diretório de trabalho
COPY package.json ./
COPY yarn.lock ./
COPY ./public ./

# Instala as dependências
RUN yarn install --frozen-lockfile

# Copia o código-fonte da aplicação
COPY . .

# Compila a aplicação TypeScript
RUN yarn build

# Etapa de produção
FROM node:20-alpine

WORKDIR /app

# Copia os arquivos de build da etapa anterior
COPY --from=build /app/build ./build
COPY --from=build /app/node_modules ./node_modules
COPY ./public ./

COPY package.json ./
COPY yarn.lock ./

# Expõe a porta em que a aplicação será executada
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["yarn", "start"]
