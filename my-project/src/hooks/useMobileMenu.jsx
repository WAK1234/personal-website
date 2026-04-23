import React, {useState} from 'react';

export default function useMobileMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navToggle = () => {
        setMenuOpen((prev) => !prev)
    }
    return {
        menuOpen,
        navToggle
    };
}