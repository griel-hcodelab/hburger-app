import type BreadType from "../../types/Bread";
import type IngredientType from "../../types/Ingredient";
import type { TrayItemType } from "../../types/TrayTypes";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
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
};

const CarteContext = createContext<CarteContextType>({} as CarteContextType);

export const CarteProvider = ({ children }: { children: ReactNode }) => {
  const [selectedBread, setSelectedBread] = useState<BreadType>();
  const [selectedIngredients, setSelectedIngredients] = useState<IngredientType[]>([]);
  const [trayItems, setTrayItems] = useState<TrayItemType[]>([]);

  let subTotalTemp: number;

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
    calcSubtotal();
    setTrayItems([
      ...trayItems,
      {
        id: new Date().getTime(),
        bread: selectedBread,
        ingredients: selectedIngredients,
        subTotal: subTotalTemp,
      },
    ]);

    setSelectedBread(undefined);
    setSelectedIngredients([]);
  };

  const calcSubtotal = () => {
    const breadPrice = selectedBread?.price || 0;
    const ingredientsPrice = selectedIngredients.reduce(
      (acc, item) => acc + item.price,
      0
    );
    subTotalTemp = breadPrice + ingredientsPrice;
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
        trayItems
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
