'use client'

// modify later - the navbar should highlight the current clicked page so add the respective logic, add link target

import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Link,
} from "@heroui/react";

export const Logo = () => {
    return (
        <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
            <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
};

export default function NavbarCC() {
    const menuItems = [
        "Home",
        "About",
        "Practicing Areas",
        "Testimonials",
        "Contact",
    ];
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [clicked, setClicked] = React.useState(menuItems[0])

    const itemPressed = (item: string) => {
        setClicked(item)
    }

    return (
        <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <Logo />
                    <p className="font-bold text-inherit">Law</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex" justify="end">
                <NavbarBrand>
                    <Logo />
                    <p className="font-bold text-inherit">Law</p>
                </NavbarBrand>
                <NavbarContent className=" sm:flex gap-14 " >
                    {
                        menuItems.map((item, key) => {
                            return (
                                <NavbarItem key={key} isActive={item == clicked ? true : false}>
                                    <Link color="foreground" onPress={() => itemPressed(item)} href="#">
                                        {item}
                                    </Link>
                                </NavbarItem>
                            )
                        })
                    }
                </NavbarContent>
            </NavbarContent>

            {/* <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                <Button as={Link} color="warning" href="#" variant="flat">
                    Sign Up
                </Button>
                </NavbarItem>
            </NavbarContent> */}

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

