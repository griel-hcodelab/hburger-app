import { createContext, ReactNode, useContext } from "react";

type CarteContextType = {
  breads: any;
};

const CarteContext = createContext<CarteContextType>({} as CarteContextType);

export default function CarteProvider({ children }: { children: ReactNode }) {
  const getBreads = () => {
    return [
      {
        name: "Pão Australiano",
        price: 3,
      },
      {
        name: "Pão de Batata",
        price: 2.5,
      },
      {
        name: "Pão Tradicional",
        price: 2,
      },
    ];
  };

  const breads = getBreads();

  return (
    <CarteContext.Provider value={{ breads }}>{children}</CarteContext.Provider>
  );
}

export function useCarte() {
  const context = useContext(CarteContext);

  if (!context) {
    throw new Error(
      "Only use useCarte's context within a CarteProvider, or you will broken the application"
    );
  }

  return context;
}
