import React from "react"
import { useState } from "react"
import './../assets/css/MusicRegistration.css'
import Dropdown from "../components/DropDown"
import InputMusic from "../components/InputMusic"



function MusicRegistration () {
    const [fields, setField] = useState({})
    const [downloadMode, setDownloadMode] = useState()
    const artists = [
        {id: 1, name: 'Post Malone'},
        {id: 2, name: 'Matue'},
        {id: 3, name: 'Zé Ramalho'}
    ]

    const generos = [
        {id: 1, name: 'Rock'},
        {id: 2, name: 'Pop'},
        {id: 3, name: 'Trap'},
        {id: 4, name: 'Mpb'},
    ]

    function dowloadModefunc(state) {
        setDownloadMode(state)
        
    }

    
    
    return (
        <div>
            <h1 className="page-title">Bem vindo a o cadastro de musicas do Spotify 2</h1>
            <section className="container">
                <form action="" className="form-box">
                    <label htmlFor="name" className="label">Nome</label>
                    <input id="name" type="text" className="text-input" />
                    <label htmlFor="artist" className="label">Artistas</label>
                    <Dropdown 
                        IdforSelectLabel="artist" 
                        data={artists}
                        optionLabel="name"
                        optionValue="id"
                    />

                    <label className="label" htmlFor="genero">Genero</label>
                    <Dropdown 
                        IdforSelectLabel="genero" 
                        data={generos}
                        optionLabel="name"
                        optionValue="id"
                    />

                    <label htmlFor="image" className="label">Imagem</label>
                    <input type="file" id="image" src="" alt="" />

                    <label htmlFor="downloadMode" className="label">Música</label>
                    <Dropdown 
                        downloadMode={dowloadModefunc}
                        IdforSelectLabel="downloadMode" 
                        optionLabel="option"
                        optionValue="id"
                        data={[
                            {id: 0, option: 'Por arquivo'},
                            {id: 1, option: 'Por link'}
                    ]}
                    />
                    
                    <InputMusic props={downloadMode} />

                </form>
            </section>
        </div>
    )
}

export default MusicRegistration