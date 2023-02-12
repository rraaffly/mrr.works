export const ButtonBaseStyle =
  "inline-flex items-center justify-center font-medium tracking-tight border transition-all duration-300 active:scale-95 hover:-translate-y-0.5 focus:outline-none";

export const ButtonSizeStyle = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3.5 text-base",
};

export const ButtonVariantStyle = {
  solid: "bg-black text-white hover:shadow-lg hover:shadow-black-500",
  outline: "border-black text-black",
  ghost: "bg-black/80",
};

export const ButtonRoundedStyle = (rounded: boolean) => {
  return rounded ? "rounded-full" : "rounded-md";
};

export const ButtonBlockStyle = (block: boolean) => {
  return block ? "w-full flex" : "inline-flex";
};
