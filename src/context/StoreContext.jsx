import { createContext,useState,useEffect } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [popup,setPopup] = useState(() => JSON.parse(localStorage.getItem("popup")) ?? true)

    const [selected, setSelected] = useState(() => {
        try {
          const storedSelected = localStorage.getItem('selected');
          return storedSelected ? JSON.parse(storedSelected) : '';
        } catch (error) {
          console.error('Failed to parse selected item:', error);
          return '';
        }
      });

    const [quantity,setQuantity] = useState(1);

    const [cartValue,setCartValue] = useState(() => JSON.parse(localStorage.getItem("cartValue")) || 0); 
    
    const [clicked,setClicked] = useState(true);

    useEffect(() => {
        localStorage.setItem("popup", JSON.stringify(popup));
    }, [popup]);

    useEffect(() => {
        localStorage.setItem("cartValue", JSON.stringify(cartValue));
    }, [cartValue]);

    const PopupFunction = () => {
        setPopup(!popup)
    }

    const ToHome = () => {
        setPopup(!popup)
        setCartValue(0)
    }

    const CartShow = () => {
        setCartValue(value=>value+1)
    }

    const AddToCart = (prop) => {
        try {
          setSelected(prop);
          localStorage.setItem('selected', JSON.stringify(prop));
        } catch (error) {
          console.error('Failed to save selected item:', error);
        }
      };

    const MenuDisplay = () => {
        setClicked(value=>!value)
    }

    const Increase = () => {
        setQuantity(value=>value+1)
    }

    const Decrease = () => {
        
        quantity ? setQuantity(value=>value-1):quantity;

    }

    const contextValue = {
        ToHome,
        popup,
        PopupFunction,
        selected,
        quantity,
        Increase,
        Decrease,
        clicked,
        MenuDisplay,
        cartValue,
        AddToCart,
        CartShow
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;