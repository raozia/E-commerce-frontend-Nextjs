import React from "react";

type ButtonVariation = "primary" | "warn" | "outline";

interface ButtonsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;
    variation?: ButtonVariation;
}

const Buttons = ({
    className = "",
    children,
    variation = "primary",
    ...rest
}: ButtonsProps) => {
    const variations: Record<ButtonVariation, string> = {
        primary:
            "border border-white text-white text-sm  py-4 px-13 rounded-md cursor-pointer",
        warn: "bg-black text-white rounded-md py-4 px-13  cursor-pointer",
        outline:
            "border border-black text-sm text-black cursor-pointer rounded-md py-4 px-13",
    };

    const vari = variations[variation] ?? variations.primary;
    return (
        <div>
            <button className={`  ${className} ${vari}`} {...rest}>
                {children}
            </button>
        </div>
    );
};

export default Buttons;
