"use client";
import { useReducer, useState } from "react";

const productsData = [
    {
        id: 1,
        name: 'PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, Keyboard layout INT',
        price: 1499,
        quantity: 2,
        imgLight: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg",
        imgDark: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
    },
    {
        id: 2,
        name: "Restored Apple Watch Series 8 (GPS) 41mm Midnight Aluminum Case with Midnight Sport Band",
        price: 598,
        quantity: 1,
        imgLight: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg",
        imgDark: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg"
    },
    {
        id: 3,
        name: 'Apple - MacBook Pro 16" Laptop, M3 Pro chip, 36GB Memory, 18-core GPU, 512GB SSD, Space Black',
        price: 1799,
        quantity: 1,
        imgLight: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg",
        imgDark: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg"
    },
    {
        id: 4,
        name: 'Tablet APPLE iPad Pro 12.9" 6th Gen, 128GB, Wi-Fi, Gold',
        price: 699,
        quantity: 1,
        imgLight: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg",
        imgDark: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg"
    },
    {
        id: 5,
        name: 'APPLE iPhone 15 5G phone, 256GB, Gold',
        price: 999,
        quantity: 3,
        imgLight: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg",
        imgDark: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg"
    },
];

const initialValue = productsData;

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCRAMENT':
            return state.map((item: any) =>
                item.id === action.payload
                    ? { ...item, quantity: Math.max(1, item.quantity + 1) }
                    : item
            )
        case 'DECRAMENT':
            return state.map((item: any) =>
                item.id === action.payload
                    ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                    : item
            )
        case 'REMOVE':
            return state.filter((item: any) => item.id !== action.payload)
        default:
            return state
    }
}

const Shipping = () => {
    const [state, disPatch] = useReducer(reducer, initialValue)
    const cart = state
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const savings = 299;
    const pickup = 99;
    const tax = 799;
    const total = subtotal - savings + pickup + tax;

    return (
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                    Shopping Cart
                </h2>

                <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                    {/* Cart items */}
                    <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl space-y-6">
                        {cart.map((item) => (
                            <div key={item.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-6">
                                    <img
                                        src={item.imgLight}
                                        alt={item.name}
                                        width={80}
                                        height={80}
                                        className="dark:hidden rounded"
                                    />
                                    <img
                                        src={item.imgDark}
                                        alt={item.name}
                                        width={80}
                                        height={80}
                                        className="hidden dark:block rounded"
                                    />

                                    <div className="flex-1 space-y-2 md:max-w-md">
                                        <p className="text-base font-medium text-gray-900 dark:text-white">
                                            {item.name}
                                        </p>

                                        <div className="flex items-center gap-4">
                                            <button
                                                onClick={() => disPatch({ type: 'REMOVE', payload: item.id })}
                                                className="text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => disPatch({ type: 'DECRAMENT', payload: item.id })}
                                            className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700"
                                        >
                                            <span>-</span>
                                        </button>
                                        <input
                                            type="text"
                                            readOnly
                                            value={item.quantity}
                                            className="w-10 text-center bg-transparent text-sm font-medium text-gray-900 dark:text-white"
                                        />
                                        <button
                                            onClick={() => disPatch({ type: 'INCRAMENT', payload: item.id })}
                                            className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700"
                                        >
                                            <span>+</span>
                                        </button>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-base font-bold text-gray-900 dark:text-white">
                                            ${(item.price * item.quantity).toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary */}
                    <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                            <p className="text-xl font-semibold text-gray-900 dark:text-white">
                                Order summary
                            </p>

                            <div className="space-y-2">
                                <dl className="flex justify-between">
                                    <dt className="text-gray-500">Original price</dt>
                                    <dd className="font-medium">${subtotal.toLocaleString()}</dd>
                                </dl>
                                <dl className="flex justify-between">
                                    <dt className="text-gray-500">Savings</dt>
                                    <dd className="text-green-600">-${savings}</dd>
                                </dl>
                                <dl className="flex justify-between">
                                    <dt className="text-gray-500">Store Pickup</dt>
                                    <dd>${pickup}</dd>
                                </dl>
                                <dl className="flex justify-between">
                                    <dt className="text-gray-500">Tax</dt>
                                    <dd>${tax}</dd>
                                </dl>
                            </div>

                            <dl className="flex justify-between border-t pt-2 dark:border-gray-700">
                                <dt className="font-bold">Total</dt>
                                <dd className="font-bold">${total.toLocaleString()}</dd>
                            </dl>

                            <button className="w-full rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800">
                                Proceed to Checkout
                            </button>
                        </div>

                        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                            <form className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="voucher"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Do you have a voucher or gift card?
                                    </label>
                                    <input
                                        type="text"
                                        id="voucher"
                                        className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 dark:bg-gray-700 dark:text-white"
                                        placeholder="Enter code"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800"
                                >
                                    Apply Code
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Shipping