export const BUY_PASTAS = "BUY_PASTAS";
export const EAT_PASTAS = "EAT_PASTAS";

export const buyPasta = () => {
  return {
    type: BUY_PASTAS
  };
};

export const eatPasta = () => {
  return {
    type: EAT_PASTAS
  };
};