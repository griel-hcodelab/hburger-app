import type BreadType from "../../types/Bread";
import type IngredientType from "../../types/Ingredient";
import type { TrayItemType } from "../../types/TrayTypes";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type CarteContextType = {
  addBread: (bread: BreadType) => void;
  addIngredient: (ingredient: IngredientType) => void;
  selectedBread: BreadType | undefined;
  selectedIngredients: IngredientType[];
  removeIngredient: (id: number) => void;
  removeTrayItem: (id: number) => void;
  createBurger: () => void;
  trayItems: TrayItemType[];
  total: number;
};

const CarteContext = createContext<CarteContextType>({} as CarteContextType);

export const CarteProvider = ({ children }: { children: ReactNode }) => {
  const [selectedBread, setSelectedBread] = useState<BreadType>();
  const [selectedIngredients, setSelectedIngredients] = useState<IngredientType[]>([]);
  const [trayItems, setTrayItems] = useState<TrayItemType[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setTotal(trayItems.reduce((sum, item) => sum + item.total, 0));
  }, [trayItems]);

  const addBread = (bread: BreadType) => {
    setSelectedBread(bread);
  };

  const addIngredient = (ingredient: IngredientType) => {
    setSelectedIngredients([
      ...selectedIngredients,
      ingredient,
    ]);
  };

  const removeIngredient = (id: number) => {
    setSelectedIngredients(
      selectedIngredients.filter((item) => item.id !== id)
    );
  };

  const removeTrayItem = useCallback((id: number) => {
    setTrayItems(trayItems.filter((item) => item.id !== id));
  }, [trayItems, setTrayItems]);

  const createBurger = () => {
    const ingredientsSum = selectedIngredients.reduce((sum, item) => sum + item.price, 0);

    setTrayItems([
      ...trayItems,
      {
        id: new Date().getTime(),
        bread: selectedBread,
        ingredients: selectedIngredients,
        total: ingredientsSum + (selectedBread?.price || 0),
      },
    ]);

    setSelectedBread(undefined);
    setSelectedIngredients([]);
  };

  return (
    <CarteContext.Provider
      value={{
        addBread,
        addIngredient,
        removeIngredient,
        removeTrayItem,
        createBurger,
        selectedBread,
        selectedIngredients,
        trayItems,
        total,
      }}
    >
      {children}
    </CarteContext.Provider>
  );
};

export function useCarte() {
  const context = useContext(CarteContext);

  if (!context) {
    throw new Error(
      "Only use useCarte's context within a CarteProvider, or you will broken the application"
    );
  }

  return context;
}
