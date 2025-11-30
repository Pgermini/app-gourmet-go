// src/types/CartTypes.ts (ou .d.ts)

// Tipagem do Produto (entrada)
export interface Product {
  id: string | number;
  nome: string;
  preco: number;
  descricao?: string; 
  imagem?: string | number;
  [key: string]: any; 
}

// Tipagem do Item no Carrinho (estado)
export interface CartItem extends Product {
  qtd: number;
}

// Tipagem do Objeto retornado pelo useCart()
export interface CartContextData {
  cart: CartItem[];
  total: number;
  totalItens: number;
  addToCart: (product: Product) => void;
  clearCart: () => void;
  aumentar: (id: string | number) => void;
  diminuir: (id: string | number) => void;
}