# 🌟 HelloExpo - Template para Programação para Dispositivos Móveis 🌟

Bem-vindos, futuros desenvolvedores mobile! 🎉 Este é o **HelloExpo**, um template inicial super simples e poderoso para vocês começarem a criar aplicativos incríveis com **React Native** e **Expo** na disciplina *Programação para Dispositivos Móveis*, sob a orientação do Professor Eduardo Correia! 🚀

Aqui, vocês têm tudo pronto para dar os primeiros passos: um logo responsivo, textos estilosos e uma estrutura organizada para explorar e crescer! ✨ Vamos aprender juntos e transformar ideias em apps reais! 📱

> ⭐ **Gostou deste template?** Deixe uma estrela no repositório para apoiar o projeto! Seu star nos ajuda a crescer e motiva a criação de mais recursos educacionais. ⭐

---

## 🎯 O que é o HelloExpo?

O HelloExpo é um ponto de partida para seus projetos mobile. Ele vem com:
- Um **logo** responsivo no topo (adicione o seu em `assets/logo.png`! 🖼️).
- O título da disciplina: **"PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS"** em letras grandes e bold. 📝
- O nome do professor: **"Professor Eduardo Correia"**, com estilo diferenciado. 👨‍🏫
- Estilos básicos com `StyleSheet` para deixar tudo bonitinho e centralizado. 🎨
- Suporte ao **Expo**, que torna o desenvolvimento rápido e fácil! ⚡

---

## 🛠️ O que está incluído?

Aqui está o que vocês vão encontrar no código (`App.js`):
- **Logo**: Um `<Image>` responsivo que usa `Dimensions` para se ajustar a qualquer tela (60% da largura)! 📐
- **Textos**: Dois `<Text>` com estilos separados para título e subtítulo. ✍️
- **Layout**: Um `<View>` centralizado com fundo cinza claro (`#f0f0f0`). 🖼️
- **StatusBar**: Configurada com `style="auto"` para se adaptar ao tema do dispositivo. 🌙☀️

O código é comentado para vocês entenderem cada pedacinho! 🧠

---

## 🚀 Como começar?

Vamos colocar esse app pra rodar em poucos passos! Siga o guia abaixo:

### 1️⃣ Pré-requisitos
- **Node.js**: Certifique-se de ter o Node instalado (versão 16+). Verifique com `node -v` no terminal! 🖥️
- **Expo Go**: Baixe o app no seu celular (Play Store ou App Store) para testar rapidinho. 📲
- Um editor de código (recomendo o **VS Code**)! ✂️

### 2️⃣ Configurando o Projeto
- Clone o repositório usando o comando: 📦
  ```bash
  git clone https://github.com/Eduardo1985S/HelloExpo.git
  ```
- Abra o terminal e entre na pasta do projeto:
  ```bash
  cd HelloExpo
  ```
- Instale as dependências:
  ```bash
  npm install
  ```

### 3️⃣ Adicione seu Logo
- Vá até a pasta `assets/` (crie se não existir). 📁
- Coloque uma imagem chamada `logo.png` (pode ser o logo da sua instituição ou algo legal!). 🖼️
- Ajuste o `height` no `styles.logo` (ex.: 200) se necessário. 📏

### 4️⃣ Rodando o App
- Inicie o servidor Expo:
  ```bash
  npx expo start
  ```
- Escaneie o QR code no terminal com o Expo Go no seu celular. 📲
- Ou abra em um emulador:
  - Pressione `a` para Android (precisa do Android Studio).
  - Pressione `i` para iOS (precisa do Xcode, só em Mac).
- Pronto! Você verá o logo, o título da disciplina e o nome do professor na tela! 🎉

---

## 👌🏻 Estrutura do Projeto

Aqui está o que vocês vão encontrar:

```
HelloExpo/
├── assets/           # Onde fica o logo (adicione logo.png aqui!)
├── App.js            # Código principal do app
├── package.json      # Dependências e configurações
└── README.md         # Este arquivo que você está lendo! 😄
```

---

## ✏️ Como personalizar?

Quer deixar o HelloExpo com a sua cara? Aqui vão algumas ideias:

- **Mude o Logo**: Troque `logo.png` por outra imagem em `assets/`. 🖼️
- **Edite os Textos**: Altere o `<Text>` em `App.js` para algo diferente (ex.: seu nome!). 📝
- **Ajuste os Estilos**: Brinque com `StyleSheet` (cores, tamanhos, etc.) no `styles`. 🎨
- **Adicione Componentes**: Que tal um `<Button>` ou `<TextInput>`? Vamos aprender isso nas próximas aulas! 🚀

Exemplo rápido de mudança:

```jsx
<Text style={styles.title}>MEU PRIMEIRO APP MOBILE</Text>
<Text style={styles.subtitle}>Feito por [Seu Nome]</Text>
```

---

## 📜 Padrões de Commit

Para manter o histórico organizado, usem este padrão:

```
<tipo>(<escopo>): <descrição curta>
```

Exemplos:
- `feat(logo): add custom course logo`
- `style(text): update font size to 26`
- `docs(readme): add setup instructions`

Tipos principais:
- **feat**: Nova funcionalidade 🌟
- **fix**: Correção de erro 🐛
- **docs**: Atualização na documentação 📚
- **style**: Mudanças de estilo 🎨

---

## 💡 Dicas do Professor Eduardo

- **Explore o Expo**: Testem no celular com Expo Go, é super prático! 📱
- **Salvamento Automático**: O app atualiza sozinho ao salvar App.js. ⚡
- **Perguntem!**: Dúvidas? Me chamem na aula ou no canal da disciplina! 🗣️
- **Divirtam-se**: Programar é criar, então experimentem ideias malucas! 🤓

---

## 🌟 Próximos Passos

Nas próximas aulas, vamos:
- Adicionar botões interativos com `Button`. 🖱️
- Criar formulários com `TextInput`. ✍️
- Explorar mais recursos do React Native e Expo! 🚀

Fiquem ligados e preparem-se para construir apps incríveis! 😎

---

## ⭐ Apoie este Projeto ⭐

Se este template te ajudou de alguma forma, por favor considere:
1. Deixar uma estrela ⭐ no repositório
2. Compartilhar com seus colegas de turma
3. Enviar feedback ou sugestões de melhorias

Seu apoio é fundamental para continuarmos criando recursos educacionais de qualidade!

---

## 🙌 Agradecimentos

#### Obrigado por chegar até aqui!
#### Vamos aprender juntos e fazer esse semestre incrivel! 
#### 🤟 Boa sorte, Dev´s! 💻

Professor Eduardo Correia

Feito com 💙 para vocês!
