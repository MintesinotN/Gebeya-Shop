import { createContext,useState } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [popup,setPopup] = useState(true)

    const [selected,setSelected] = useState('')

    const [quantity,setQuantity] = useState(1);

    const [cartValue,setCartValue] = useState(0); 
    
    const [clicked,setClicked] = useState(true);

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
        setSelected(prop)
    }

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