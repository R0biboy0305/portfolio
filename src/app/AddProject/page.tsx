"use client";
import CreateProject from "@/lib/createProject"
import React, {useState} from "react";
import Form from "next/form";
import Input from "@/app/AddProject/__components/input";
import Button from "@/app/components/button/Button";

export default function AddProject() {

    const [technologies, setTechnologies] = useState(
        [{title: "", description: "", icon: ""}]
    )

    const [functions, setFunctions] = useState([{title: "", description: ""}])

    const updateTech = (index: number, field: string, value: string) => {
        const newTechs = [...technologies];
        newTechs[index] = {...newTechs[index], [field]: value};
        setTechnologies(newTechs);
    }

    const updateFunction = (index:number, field: string, value: string) => {
        const newFunctions = [...functions];
        newFunctions[index] = {...newFunctions[index], [field]: value};
        setFunctions(newFunctions);
    }

    const addFunction = () =>{
        setFunctions([...functions, {title: "", description: ""}])
    }

    const addTech = () => {
        setTechnologies([...technologies, {title: "", description: "", icon: ""}])
    }

    const handleSubmit = async (formData: FormData) => {

        formData.append("technologies", JSON.stringify(technologies))
        formData.append("functions", JSON.stringify(functions))

        try {
            await CreateProject(formData);
            alert("Projet créé avec succès !");
        } catch (error) {
            console.error("Erreur lors de la création :", error);
            alert("Une erreur est survenue.");
        }
    }

    return (
        <div className="backdrop-blur-3xl flex w-1/2 rounded-2xl m-auto p-4 shadow-lg">
            <Form action={handleSubmit} className="flex flex-col gap-5">
                <Input placeholder={"Title..."} name={"title"} type={"text"}/>
                <Input placeholder={"Description..."} name={"description"} type={"text"}/>
                <Input placeholder={"Preview..."} name={"preview"} type={"text"}/>
                <Input placeholder={"Objecif..."} name={"objectif"} type={"text"}/>
                <Input placeholder={"bilan..."} name={"bilan"} type={"text"}/>
                <div className="flex flex-col gap-2 items-start shadow-2xl p-4 rounded-2xl ">
                    <label className="text-white">Publié</label>
                    <Input placeholder={""} name={"published"} type={"checkbox"}/>
                </div>
                <input className="text-white shadow-xl p-4 rounded-2xl" type="file" accept={"image/*"}
                       name={"ProjectImages"} placeholder={"image url"} multiple={true}/>

                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-white">Technologies</h3>
                    <button type="button" onClick={addTech}
                            className="bg-blue-600 px-3 py-1 rounded text-sm hover:bg-blue-500">
                        + Ajouter
                    </button>
                </div>
                {technologies.map((tech, index) => (
                    <div key={index}>
                        <input
                            className="placeholder:text-white text-white"
                            type="text"
                            placeholder="Title..."
                            value={tech.title}
                            onChange={(e) => updateTech(index, "title", e.target.value)}
                        />
                        <input
                            className="placeholder:text-white text-white"
                            type="text"
                            placeholder="Description..."
                            value={tech.description}
                            onChange={(e) => updateTech(index, "description", e.target.value)}
                        />
                        <input
                            className="placeholder:text-white text-white"
                            type="text"
                            placeholder="Icon"
                            value={tech.icon}
                            onChange={(e) => updateTech(index, "icon", e.target.value)}
                        />
                    </div>
                ))}
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-white">Functions</h3>
                    <button type="button" onClick={addFunction}
                            className="bg-blue-600 px-3 py-1 rounded text-sm hover:bg-blue-500">
                        + Ajouter
                    </button>
                </div>
                {functions.map((funct, index) => (
                    <div key={index}>
                        <input
                            className="placeholder:text-white text-white"
                            type="text"
                            placeholder="Title..."
                            value={funct.title}
                            onChange={(e) => updateFunction(index, "title", e.target.value)}
                        />
                        <input
                            className="placeholder:text-white text-white"
                            type="text"
                            placeholder="Descritpion..."
                            value={funct.description}
                            onChange={(e) => updateFunction(index, "description", e.target.value)}
                        />

                    </div>
                ))}

                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}