import { useState, useEffect } from "react";
import { startPLC, stopPLC } from "../services/plcServices";

export const useProcessLogic = () => {
  const [motorActivo, setMotorActivo] = useState<boolean>(false);
  const [sensorPresencia, setSensorPresencia] = useState<boolean>(false);
  const [tipoPieza, setTipoPieza] = useState<"A" | "B">("A");
  const [contador, setContador] = useState<{ itemsA: number; itemsB: number }>({
    itemsA: 0,
    itemsB: 0,
  });

  // Función para iniciar el proceso
  const iniciarProceso = async () => {
    await startPLC();
    setMotorActivo(true);
    setSensorPresencia(true);
  };

  // Función para detener el proceso
  const detenerProceso = async () => {
    await stopPLC();
    setMotorActivo(false);
    setSensorPresencia(false);
  };

  // Función para seleccionar tipo aleatorio
  const seleccionarTipoAleatorio = () => {
    const tipo = Math.random() > 0.5 ? "A" : "B";
    setTipoPieza(tipo);
  };
  useEffect(() => {
    if (!motorActivo) return;
    const intervalo = setInterval(() => {
      setContador((prev) => {
        if (tipoPieza === "A") return { ...prev, itemsA: prev.itemsA + 1 };
        else return { ...prev, itemsB: prev.itemsB + 1 };
      });
      seleccionarTipoAleatorio();
    }, 2000); // Incrementa cada segundo
    return () => clearInterval(intervalo);
  }, [motorActivo, tipoPieza]);

  // Función para reiniciar el contador
  const reiniciarContador = () => setContador({ itemsA: 0, itemsB: 0 });

  return {
    motorActivo,
    sensorPresencia,
    contador,
    tipoPieza,
    iniciarProceso,
    detenerProceso,
    reiniciarContador,
  };
};
