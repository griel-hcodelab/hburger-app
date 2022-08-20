import {
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
  useState,
} from "react";
import {
  SelectedBreadTypes,
  SelectedIngredientsTypes,
} from "../../types/CarteTypes";
import { TrayItemsTypes } from "../../types/TrayTypes";

type CarteContextType = {
  addBread: ({ id, name, price }: SelectedBreadTypes) => void;
  addIngredients: ({ id, name, price }: SelectedIngredientsTypes) => void;
  selectedBread: SelectedBreadTypes | undefined;
  selectedIngredients: SelectedIngredientsTypes[];
  removeIngredients: (id: number) => void;
  createBurger: () => void;
  trayItems: TrayItemsTypes[];
};

const CarteContext = createContext<CarteContextType>({} as CarteContextType);

export const CarteProvider = ({ children }: { children: ReactNode }) => {
  const [selectedBread, setSelectedBread] = useState<SelectedBreadTypes>();
  const [selectedIngredients, setSelectedIngredients] = useState<
    SelectedIngredientsTypes[]
  >([]);
  const [trayItems, setTrayItems] = useState<TrayItemsTypes[]>([]);

  let subTotalTemp: number;

  const addBread = ({ id, name, price }: SelectedBreadTypes) => {
    setSelectedBread({
      id,
      name,
      price,
    });
  };

  const addIngredients = ({ id, name, price }: SelectedIngredientsTypes) => {
    setSelectedIngredients([
      ...selectedIngredients,
      {
        id,
        name,
        price,
      },
    ]);
  };

  const removeIngredients = (id: number) => {
    setSelectedIngredients(
      selectedIngredients.filter((item) => item.id !== id)
    );
  };

  const createBurger = async () => {
    await calcSubtotal();
    const id = trayItems.length + 1;

    setTrayItems([
      ...trayItems,
      {
        id,
        bread: selectedBread,
        ingredients: selectedIngredients,
        subTotal: subTotalTemp,
      },
    ]);

    setSelectedBread(undefined);
    setSelectedIngredients([]);
  };

  const calcSubtotal = async () => {
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
        addIngredients,
        removeIngredients,
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
