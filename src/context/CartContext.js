// src/context/CartContext.js (Versão JS CORRIGIDA)

import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    // 1. Lógica para ADICIONAR ou INCREMENTAR um produto
    function addToCart(product) {
        setCart((prev) => {
            // Verifica se o item já existe no carrinho pelo ID
            const existingItemIndex = prev.findIndex((item) => item.id === product.id);

            if (existingItemIndex > -1) {
                // Se existe, cria uma cópia atualizando APENAS a quantidade
                const updatedCart = [...prev];
                updatedCart[existingItemIndex].qtd += 1; // Incrementa QTD
                return updatedCart;
            }

            // Se não existe, adiciona como novo item com QTD = 1
            // A interface 'Product' espera qtd, então garantimos que ele tem qtd: 1
            return [...prev, { ...product, qtd: 1 }];
        });
    }

    // 2. Lógica para AUMENTAR quantidade (usado no botão + do carrinho)
    function aumentar(id) {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, qtd: item.qtd + 1 } : item
            )
        );
    }

    // 3. Lógica para DIMINUIR quantidade (usado no botão - ou lixeira)
    function diminuir(id) {
        setCart((prev) =>
            prev
                .map((item) =>
                    item.id === id ? { ...item, qtd: item.qtd - 1 } : item
                )
                // Filtra para REMOVER o item se a QTD chegar a 0
                .filter((item) => item.qtd > 0)
        );
    }
    
    // 4. Limpar carrinho
    function clearCart() { 
        setCart([]); 
    }

    // Cálculo do total monetário
    const total = cart.reduce((acc, item) => acc + item.preco * item.qtd, 0);
    // Cálculo do total de unidades
    const totalItens = cart.reduce((acc, item) => acc + item.qtd, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                total,
                totalItens,
                addToCart,
                clearCart,
                aumentar,
                diminuir,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

// ----------------------------------------------------
export function useCart() {
    return useContext(CartContext);
}