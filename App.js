// App.js
import { StatusBar } from 'expo-status-bar'; // Controla a barra de status do dispositivo
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'; // Adiciona Image e Dimensions

// Pega a largura da tela para tornar o logo responsivo
const { width } = Dimensions.get('window');

// Componente principal do aplicativo
export default function App() {
  return (
    <View style={styles.container}>
      {/* Logo da disciplina ou instituição */}
      <Image
        source={require('./assets/logo.png')} // Caminho do logo na pasta assets
        style={styles.logo}
        resizeMode="contain" // Mantém a proporção da imagem
      />
      {/* Textos informativos */}
      <Text style={styles.title}>PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS</Text>
      <Text style={styles.subtitle}>Professor Eduardo Correia</Text>
      {/* StatusBar com estilo automático */}
      <StatusBar style="auto" />
    </View>
  );
}

// Estilos definidos com StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
    backgroundColor: '#f0f0f0', // Fundo cinza claro
    alignItems: 'center', // Centraliza horizontalmente
    justifyContent: 'center', // Centraliza verticalmente
  },
  logo: {
    width: width * 0.6, // 60% da largura da tela
    height: 200, // Altura fixa (ajuste conforme o logo)
    marginBottom: 30, // Espaço entre logo e texto
  },
  title: {
    fontSize: 24, // Tamanho maior para o título
    color: '#333', // Cor escura
    textAlign: 'center', // Centraliza o texto
    fontWeight: 'bold', // Negrito para destaque
    marginBottom: 10, // Espaço entre título e subtítulo
  },
  subtitle: {
    fontSize: 18, // Tamanho menor para o subtítulo
    color: '#666', // Cor mais clara para contraste
    textAlign: 'center', // Centraliza o texto
  },
});