/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { type ComponentProps, useEffect, useState } from 'react';
import { SecuxWebUSB } from "@secux/transport-webusb";


export function Button(props: ComponentProps<'button'>): JSX.Element {
    const normalTitle = "▶️ Demo this";
    const activeTitle = "🏃 Running...";
    const normalColor = "#0074B7";
    const activeColor = "#003B73";
    const [isLoading, setLoading] = useState(false);
    const [title, setTitle] = useState(normalTitle);
    const [bgColor, setBgColor] = useState(normalColor);

    async function handleClick(e) {
        setLoading(true);
        setTitle(activeTitle);
        setBgColor(activeColor);

        try {
            await props.onClick.call(this);
        } catch (error) {
            alert(error);
        }

        setLoading(false);
        setTitle(normalTitle);
        setBgColor(normalColor);
    }

    return (
        <button
            disabled={isLoading}
            style={{
                color: 'white',
                backgroundColor: bgColor,
                border: 'none',
                borderRadius: 20,
                padding: 10,
                cursor: 'pointer',
                marginBottom: 10
            }}
            onClick={!isLoading ? handleClick : null}
            onMouseEnter={() => setBgColor(activeColor)}
            onMouseLeave={() => setBgColor(normalColor)}
        >{title}</button>
    );
}

export async function useSecuX(callback) {
    const device = await SecuxWebUSB.Create();
    await device.Connect();

    let e;
    try {
        await callback(device);
    } catch (error) {
        e = error;
    }

    await device.Disconnect();

    if (e) alert(e);
}
