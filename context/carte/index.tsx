import { createContext, ReactNode, useContext, useState } from "react";
import { SelectedBreadTypes, SelectedIngredientsTypes } from "../../types/CarteTypes";

type CarteContextType = {
  addBread: ({ id, name, price }: SelectedBreadTypes) => void;
  addIngredients: ({ id, name, price }: SelectedIngredientsTypes) => void;
  selectedBread: SelectedBreadTypes | undefined;
  selectedIngredients: SelectedIngredientsTypes[];
  removeIngredients: (id: number) => void;
};

const CarteContext = createContext<CarteContextType>({} as CarteContextType);

export default function CarteProvider({ children }: { children: ReactNode }) {
  const [selectedBread, setSelectedBread] = useState<SelectedBreadTypes>();
  const [selectedIngredients, setSelectedIngredients] = useState<SelectedIngredientsTypes[]>([]);
  const [trayItems, setTrayItems] = useState([])

  const addBread = ({id, name, price}:SelectedBreadTypes) => {
    setSelectedBread({
      id,
      name,
      price,
    });
  };

  const addIngredients = ({id, name, price}:SelectedIngredientsTypes) => {
    setSelectedIngredients([
      ...selectedIngredients,
      {
        id,
        name,
        price,
      },
    ]);
  }

  const removeIngredients = (id: number) => {
    setSelectedIngredients(selectedIngredients.filter(item => item.id !== id));
  }


  return (
    <CarteContext.Provider value={{ addBread, addIngredients, removeIngredients, selectedBread, selectedIngredients }}>
      {children}
    </CarteContext.Provider>
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
