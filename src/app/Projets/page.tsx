"use client";

import React, {useState} from "react";
import {prisma} from "@/lib/prisma";

export default async function Projets() {

    const [step, setStep] = useState(0);

    const projetcs = await prisma.post.findMany({
        where:
            {
                published:true,
            }
    })

    console.log(projetcs)
    return(
        <div>
            <h2>Mes projets</h2>

            {projetcs.map((proj, index) => (
                <div key={index}>
                    <div>
                        <p>{proj.title}</p>
                    </div>

                </div>
            ))}
        </div>
    )
}