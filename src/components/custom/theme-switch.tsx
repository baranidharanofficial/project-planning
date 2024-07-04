'use client';

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from "next/image";

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        console.log("ThemeSwitch mounted");
        setMounted(true);
    }, []);

    useEffect(() => {
        console.log("setTheme:", setTheme);
        console.log("resolvedTheme:", resolvedTheme);
    }, [setTheme, resolvedTheme]);

    if (!mounted) {
        return (
            <Image
                src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
                width={36}
                height={36}
                sizes="36x36"
                alt="Loading Light/Dark Toggle"
                priority={false}
                title="Loading Light/Dark Toggle"
            />
        );
    }

    const handleClick = () => {
        if (setTheme) {
            setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
            console.log("Theme changed to:", resolvedTheme === 'dark' ? 'light' : 'dark');
        } else {
            console.error("setTheme is not defined");
        }
    };

    if (!resolvedTheme) {
        console.log("resolvedTheme is undefined");
        return null; // Or return a default state, such as a loading spinner
    }

    return (
        resolvedTheme === 'dark' ?
            <FiSun onClick={handleClick} className="cursor-pointer" /> :
            <FiMoon onClick={handleClick} className="cursor-pointer" />
    );
}
