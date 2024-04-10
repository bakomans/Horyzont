import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animacja fal
const waveAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

// Stylizacja kontenera z animowanymi falami
const StyledContainer = styled.div`
  background-image: url('../assets/vawes.png'); // Importujesz obraz z animowanymi falami
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  position: absolute; // Dodajemy absolutne pozycjonowanie
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: -1; // Ustawiamy niższy indeks warstwy, aby nie przysłaniać innych elementów
  overflow: hidden; // Ukrywamy treści, które mogą wystawać poza kontener
  animation: ${waveAnimation} 2s ease-in-out infinite; // Dodajemy animację fal
`;

function AnimatedWaves() {
  return <StyledContainer />;
}

export default AnimatedWaves;
